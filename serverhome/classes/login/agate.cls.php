<?php
class Login {
    private $errors=array(
      'USER_BLOCKED'=>'Пользователь заблокирован',
      'USER_WRONG'=>'Неправильный E-mail и/или пароль'
    );

    public function doAction($in){
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        case 'in':
          try {
            $tabUser=dbTableName('user');
            $tabSession=dbTableName('session');

            $login=(empty($_REQUEST['login']))?'':trim($_REQUEST['login']);
            $password=(empty($_REQUEST['password']))?'':trim($_REQUEST['password']);

            if(!$login && !$password)
              throw new Exception('USER_WRONG');

            $db=AppData::getItem('sysdb');

//Let's create new user while the DB is Empty
            $sql='SELECT count(*) as cnt FROM '.$tabUser;
            if($result=$db->query($sql)){
              while($row=$result->fetch_assoc()){
                if($row['cnt']==0){
                    $sql='INSERT INTO '.$tabUser.' (email,password,isblocked) values ("'.$db->real_escape_string($login).'",unhex(sha2("'.$db->real_escape_string($password).'",256)),0)';
                    $db->query($sql);

                    if($db->insert_id) {
                      $tabRole=dbTableName('user_role');
                      $sql='INSERT INTO '.$tabRole.' (role,user_id,account_id,caffe_id) values ("system",'.$db->insert_id.',0,0)';
                      $db->query($sql);
                    }
                }
              }
              $result->close();
            };

            $found=false;
            $sql='SELECT id,isblocked FROM '.$tabUser.' WHERE email="'.$db->real_escape_string($login).'" and password=unhex(sha2("'.$db->real_escape_string($password).'",256)) limit 1';
            if($result=$db->query($sql)){
              while($row=$result->fetch_assoc()){
                $found=true;
                if($row['isblocked']){
                  throw new Exception('USER_BLOCKED');
                } else {
                  $session=AppData::getItem('session');
                  $sessionid=$session->create($row['id']);
                  AppData::setSession($sessionid);
                }
              }
              $result->close();
            };

            if(!$found){
              throw new Exception('USER_WRONG');
            }

            AppData::setOutput('SET_APP_MODULE','cls','Home');

          } catch (Exception $e){
            $mes=$e->getMessage();
            if(!empty($this->errors[$mes])){
              AppData::setOutput("LOGIN_SET_MESSAGE","message",$this->errors[$mes]);
            } else {
              AppData::addError("Login process: ".$mes);
            }
            AppData::setOutput("LOGIN_SET_MODE","mode","Form");
          }
        break;
        default:
          //AppData::addOutput("debug","waiting for solution");
          //show login form
          AppData::setOutput("SET_APP_MODULE","cls","Login");
      }
    }
}
?>
