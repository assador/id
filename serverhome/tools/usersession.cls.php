<?php

class UserSession {

  const SYS_ADMIN='sys';
  const ACCOUNT_ADMIN='account';
  const CAFFE_ADMIN='caffe';

  private $data=array('islogged'=>false,'roles'=>array());

  public function check($key){
    $db=AppData::getItem('sysdb');
    $tabUser=dbTableName('user');
    $tabSession=dbTableName('session');
    $sql='SELECT t1.id,t1.email,t1.isblocked,t2.id as sessionid FROM '.$tabUser.' as t1, '.$tabSession.' as t2 WHERE t2.sessionkey="'.$db->escape_string($key).'" and t2.expires>NOW() and t1.id=t2.user_id limit 1';
    if($result=$db->query($sql)){
      while($row=$result->fetch_row()){
        $this->data['id']=$row['id'];
        $this->data['email']=$row['email'];
        $this->data['isblocked']=$row['isblocked'];
        $this->data['sessionid']=$row['sessionid'];
        if($this->data['isblocked']==1){
          $this->data['islogged']=false;
        } else {
          $this->data['islogged']=true;
          $tabRole=dbTableName('role');
          $sql='SELECT role,account_id,caffe_id FROM '.$tabRole.' WHERE user_id='.$row['id'];
          if($resultRole=$db->query($sql)){
            while($row=$resultRole->fetch_row()){
              $this->data['roles'][]=array('role'=>$row['role'],'account_id'=>$row['account_id'],'caffe_id'=>$row['caffe_id']);
            }
            $resultRole->close();
          }
        };
      };
      $result->close();
    }
  }

  public function checkRole($role){
    if($this->data['islogged'])
      foreach($this->data['roles'] as $data)
        if($data['role']==$role)
          return true;
    return false;
  }

  public function update(){
    if($this->data['islogged']){
        $db=AppData::getItem('sysdb');
        $db->query('UPDATE '.dbTableName('session').' SET expires=DATE_ADD(NOW(), '.SESSION_EXPIRES.') WHERE id='.$this->data['sessionid']);
        if($db->errno)
          throw new DBException('DB error:'.$db->errno.' '.$db->error,$db->errno);
    }
  }

  public function isLogged(){
    if(!empty($this->data['logged']) && $this->data['logged']===true){
      return true;
    }
    return false;
  }
}
?>
