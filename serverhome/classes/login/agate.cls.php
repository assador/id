<?php
class Login {
    private $errors=array(
      'USER_BLOCKED'=>'Пользователь заблокирован',
      'USER_WRONG'=>'Неправильный E-mail и/или пароль',
      'SHOULD_BE_LOGGED'=>'Чтобы отлогиниться вы должны быть залогиненным'
    );

    public function doAction($in){
      try {
      $action=empty($in['action'])?'':$in['action'];

      switch ($action){
        case 'out':
          $session=AppData::getItem('session');
          if($session->isLogged()){
            $session->logout();
            AppData::setSessionKey("");
          } else {
            throw new Exception('SHOULD_BE_LOGGED');
          };
          AppData::setOutput("LOGIN_SET_MODE","mode","Form");
          AppData::setOutput("LOGIN_SET_MESSAGE","message",'');
          AppData::setOutput("SET_APP_MODULE","cls","Login");
        break;
        case 'in':
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
                  AppData::setSessionKey($sessionid);
                }
              }
              $result->close();
            };

            if(!$found){
              throw new Exception('USER_WRONG');
            }
//
            AppData::setOutput('SET_APP_MODULE','cls','Home');
        break;
        case 'testcreate':
        case 'testdestroy':

          $db=AppData::getItem('sysdb');

          $tabUser=dbTableName('user');
          $tabRole=dbTableName('user_role');

          $testusers=array(
              array(
                "login"=>"1",
                "password"=>"1",
                "roles"=>array(
                  array(
                    "role"=>UserSession::SYS_ADMIN,
                    "account_id"=>0,
                    "caffe_id"=>0
                  )
                )
              ),
              array(
                "login"=>"2",
                "password"=>"2",
                "roles"=>array(
                  array(
                    "role"=>UserSession::ACCOUNT_ADMIN,
                    "account_id"=>1,
                    "caffe_id"=>0
                  )
                )
              ),
              array(
                "login"=>"3",
                "password"=>"3",
                "roles"=>array(
                  array(
                    "role"=>UserSession::CAFFE_ADMIN,
                    "account_id"=>1,
                    "caffe_id"=>1
                  )
                )
              )
          );

            foreach($testusers as $user){
              $sql='DELETE FROM '.$tabUser.' WHERE email="'.$db->real_escape_string($user['login']).'"';
              echo $sql."<br>\r\n";
              dbQuery($db,$sql);
              if($action!="testcreate") continue;
              $sql='INSERT INTO '.$tabUser.' (email,password,isblocked) values ("'.$db->real_escape_string($user['login']).'",unhex(sha2("'.$db->real_escape_string($user['password']).'",256)),0)';
              echo $sql."<br>\r\n";
              dbQuery($db,$sql);
              if($db->insert_id) {
                foreach($user['roles'] as $role){
                  $sql='INSERT INTO '.$tabRole.' (role,user_id,account_id,caffe_id) values ("'.$role['role'].'",'.$db->insert_id.','.$role['account_id'].','.$role['caffe_id'].')';
                  echo $sql."<br>\r\n";
                  dbQuery($db,$sql);
                }
              }
            }
          exit();
        break;
        default:
          //AppData::addOutput("debug","waiting for solution");
          //show login form
          AppData::setOutput("LOGIN_SET_MODE","mode","Form");
          AppData::setOutput("LOGIN_SET_MESSAGE","message",'');
          AppData::setOutput("SET_APP_MODULE","cls","Login");
      }

    } catch (Exception $e){
      $mes=$e->getMessage();
      if(!empty($this->errors[$mes])){
        AppData::setOutput("LOGIN_SET_MESSAGE","message",$this->errors[$mes]);
      } else {
        AppData::addError("Login process: ".$mes);
      }
      AppData::setOutput("LOGIN_SET_MODE","mode","Form");
    }
  }
}
?>
