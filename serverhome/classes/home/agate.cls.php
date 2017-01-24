<?php
class Home {
    public function doAction($in){
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        default:
          AppData::setOutput("SET_APP_MODULE","cls","Home");
      }
    }
}
?>
