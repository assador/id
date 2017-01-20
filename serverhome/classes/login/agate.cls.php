<?php
class Login {
    public function doAction($in){
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        case 'login':

        break;
        default:
          //AppData::addOutput("debug","waiting for solution");
          //show login form
          AppData::setOutput("rootmode","LoginForm");
      }
    }
}
?>
