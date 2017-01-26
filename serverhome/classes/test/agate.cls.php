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
      $session=AppData::getItem("session");
      if($session->checkRole(AppData::SYS_ADMIN)){
        $ret[]=array(
            'name'=>'Тестовый модуль 1 (для SYS_ADMIN)',
            'path'=>'test/TestModule1.jsx',
            'params'=>array(
              'param_1_1'=>'Параметр 1 для Модуля 1',
              'param_1_2'=>'Параметр 2 для Модуля 1'
            )
        );
        $ret[]=array(
            'name'=>'Тестовый модуль 2 (для SYS_ADMIN)',
            'path'=>'test/TestModule2.jsx',
            'params'=>array(
              'param_2_1'=>'Параметр 1 для Модуля 2'
            )
        );
      } else if($session->checkRole(AppData::ACCOUNT_ADMIN)){
        $ret[]=array(
            'name'=>'Тестовый модуль 1 (для ACCOUNT_ADMIN)',
            'path'=>'test/TestModule1.jsx',
            'params'=>array(
              'param_1_1'=>'Параметр 1 для Модуля 1',
              'param_1_2'=>'Параметр 2 для Модуля 1'
            )
        );
      } else if($session->checkRole(AppData::CAFFE_ADMIN)){
        $ret[]=array(
          'name'=>'Тестовый модуль 2 (для CAFFE_ADMIN)',
          'path'=>'test/TestModule2.jsx',
          'params'=>array(
            'param_2_1'=>'Параметр 1 для Модуля 2'
          )
        );
      }
    }

    public function checkAccess($in){
      $session=AppData::getItem('session');
      if(!$session->isLogged()){
        throw new Exception("Несанкционированный доступ. Test доступен только для авторизованных пользователей");
      }
    }
}
?>
