<?php

class UserSession {

  private $data=array('islogged'=>false,'roles'=>array());

  public function check($key){
    $db=AppData::getItem('sysdb');
    $tabUser=dbTableName('user');
    $tabSession=dbTableName('session');
    $sql='SELECT t1.id,t1.email,t1.isblocked,hex(t2.sessionkey) as sessionid FROM '.$tabUser.' as t1, '.$tabSession.' as t2 WHERE t2.sessionkey=unhex("'.$db->escape_string($key).'") and t2.expires>NOW() and t1.id=t2.user_id limit 1';
    if($result=$db->query($sql)){
      while($row=$result->fetch_assoc()){
        $this->data['id']=$row['id'];
        $this->data['email']=$row['email'];
        $this->data['isblocked']=$row['isblocked'];
        $this->data['session']=$row['sessionid'];
        if($this->data['isblocked']==1){
          $this->data['islogged']=false;
        } else {
          $this->data['islogged']=true;
          $tabRole=dbTableName('user_role');
          $sql='SELECT role,account_id,caffe_id FROM '.$tabRole.' WHERE user_id='.$row['id'];
          if($resultRole=$db->query($sql)){
            while($row=$resultRole->fetch_assoc()){
              $this->data['roles'][]=array('role'=>$row['role'],'account_id'=>$row['account_id'],'caffe_id'=>$row['caffe_id']);
            }
            $resultRole->close();
          }
        };
      };
      $result->close();
    }
    return $this->data['islogged'];
  }

  public function create($userid){
    $sessionid='';
    $db=AppData::getItem('sysdb');
    $tabSession=dbTableName('session');
    $sql='select md5("'.uniqid(time()).'") as sessionid';
    if($result=$db->query($sql)){
      while($row=$result->fetch_assoc()){
        $sessionid=$row['sessionid'];
        $sql='INSERT INTO '.$tabSession.' (user_id,sessionkey,created,expires,ip) values ('.$userid.',unhex("'.$sessionid.'"),NOW(),NOW() + interval '.SESSION_EXPIRES.',INET6_ATON("'.$db->real_escape_string($_SERVER['REMOTE_ADDR']).'"))';
        $db->query($sql);
        $sql='DELETE FROM '.$tabSession.' WHERE user_id='.$userid.' AND sessionkey not in (unhex("'.$sessionid.'"))';
        $db->query($sql);
      };
      $result->close();
    }
    if($sessionid) $this->check($sessionid);
    return $sessionid;
  }

  public function logout(){
    if($this->data['islogged'] && $this->data['session']){
      $db=AppData::getItem('sysdb');
      $tabSession=dbTableName('session');
      $sql='DELETE FROM '.$tabSession.' WHERE sessionkey=unhex("'.$this->data['session'].'")';
      $db->query($sql);
      $this->data=$data=array('islogged'=>false,'roles'=>array());
    }
  }


  public function checkRole($role,$account=0,$caffe=0){
    if($this->data['islogged'])
      foreach($this->data['roles'] as $data)
        if($data['role']==$role){
            if(empty($data['account'])){
              return true;
            } else if($data['account']==$account){
              if(empty($data['caffe'])){
                return true;
              } else if($data['caffe']==$caffe){
                return true;
              }
            }
        }
    return false;
  }

  public function update(){
    if($this->data['islogged']){
        $db=AppData::getItem('sysdb');
        $db->query('UPDATE '.dbTableName('session').' SET expires=NOW()+INTERVAL '.SESSION_EXPIRES.' WHERE sessionkey=unhex("'.$this->data['session'].'")');
        if($db->errno)
          throw new DBException('DB error:'.$db->errno.' '.$db->error,$db->errno);
    }
  }

  public function isLogged(){
    if(!empty($this->data['islogged']) && $this->data['islogged']===true){
      return true;
    }
    return false;
  }

  public function getSessionKey(){
    if(!empty($this->data['islogged']) && $this->data['islogged']===true && !empty($this->data['session'])){
      return $this->data['session'];
    }
    return '';
  }

  public function getRoles(){
    return $this->data['roles'];
  }

}
?>
