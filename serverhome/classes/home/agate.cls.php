<?php
class Home {
    const DEF_ROLES_OUT_ACTION='SET_APP_ROLES';
    public function doAction($in){
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        default:
          $session=AppData::getItem('session');
          AppData::setOutput(self::DEF_ROLES_OUT_ACTION,'roles',$session->getRoles());
          AppData::setOutput("SET_APP_MODULE","cls","Home");
      }
    }
}
?>
