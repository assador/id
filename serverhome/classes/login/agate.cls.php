<?php
class Login {
    public function doAction($in){
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        case 'in':
          $login=$_REQUEST['login'];
          $password=$_REQUEST['password'];

          //AppData::setOutput("SET_ROOT_MODULE","cls","LoginApp");
          AppData::setOutput("LOGIN_SET_MODE","mode","form");
        break;
        default:
          //AppData::addOutput("debug","waiting for solution");
          //show login form
          AppData::setOutput("SET_ROOT_MODULE","cls","LoginApp");
      }
    }
}
?>
