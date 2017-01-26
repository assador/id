<?php
class Login {
    const DEF_ROLES_OUT_ACTION='SET_APP_ROLES';
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
          } else {
            throw new Exception('SHOULD_BE_LOGGED');
          };
          AppData::setOutput(self::DEF_ROLES_OUT_ACTION,'roles',$session->getRoles());
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
                  AppData::setOutput(self::DEF_ROLES_OUT_ACTION,'roles',$session->getRoles());
                }
              }
              $result->close();
            };

            if(!$found){
              throw new Exception('USER_WRONG');
            }
            AppData::setOutput('SET_APP_MODULE','cls','Home');
        break;
        case 'roles':
          $actionout=(empty($_REQUEST['actionout']))?self::DEF_ROLES_OUT_ACTION:$_REQUEST['actionout'];
          $session=AppData::getItem('session');
          AppData::setOutput($actionout,'roles',$session->getRoles());
        break;

/*This is for tests, do not forget to remove it!*/
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
                    "role"=>AppData::SYS_ADMIN,
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
                    "role"=>AppData::ACCOUNT_ADMIN,
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
                    "role"=>AppData::CAFFE_ADMIN,
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
          AppData::setOutput("SET_APP_MODULE","cls","Login");
      }

    } catch (Exception $e){
      $mes=$e->getMessage();
      $state=array('mode'=>'Form');
      if(!empty($this->errors[$mes])){
        $state['message']=$this->errors[$mes];
      } else {
        AppData::addError("Login process: ".$mes);
      }
      AppData::setOutput("LOGIN_SET_DATA","data",$state);
    }
  }
}
?>
