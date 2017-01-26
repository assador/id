<?php
class Test {
    public function doAction($in){
      $this->checkAccess($in);
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        case 'runathome':
          AppData::setOutput("SET_HOME_MODULE","cls","Test");
        break;
        default:
          AppData::setOutput("SET_APP_MODULE","cls","Test");
      }
    }
    public function listAvailable($roles,&$ret){
      $ret[]=array('name'=>'Пустой тестовый модуль','startparams'=>array('cls'=>'Test','action'=>'runathome'));
    }

    public function checkAccess($in){
      $session=AppData::getItem('session');
      if(!$session->isLogged()){
        throw new Exception("Несанкционированный доступ. Test доступен только для авторизованных пользователей");
      }
    }
}
?>
