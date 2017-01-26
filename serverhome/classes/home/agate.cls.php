<?php
class Home {

//list of App modules, JSModule=>PHPModule that can form the list
    private $appModules=array(
      'Test'=>'Test'
    );

    const DEF_ROLES_OUT_ACTION='SET_APP_ROLES';
    public function doAction($in){
      $this->checkAccess($in);
      $action=empty($in['action'])?'':$in['action'];
      switch ($action){
        case 'modules':
          AppData::setOutput('HOME_MODULES_LIST','modulesAvailableList',$this->buildModulesList());
        break;
        case 'runathome':
          AppData::setOutput("SET_HOME_MODULE","cls","Home");
        break;
        default:
          $session=AppData::getItem('session');
          AppData::setOutput(self::DEF_ROLES_OUT_ACTION,'roles',$session->getRoles());
          AppData::setOutput("SET_APP_MODULE","cls","Home");
      }
    }

    private function buildModulesList(){
      $ret=array();
      $session=AppData::getItem('session');
      if(!$session->isLogged()) return $ret;
      $roles=$session->getRoles();
      foreach ($this->appModules as $cls)
          if($clsName=checkClsName($cls)){
            $locCls=new $clsName();
            if(method_exists($locCls,'listAvailable'))
              $locCls->listAvailable($roles,$ret);
          };

      return $ret;
    }
    public function listAvailable($roles,&$ret){
      $ret[]=array('name'=>'Главная страница','startparams'=>array('cls'=>'Home','action'=>'runathome'));
    }

    public function checkAccess($in){
      $session=AppData::getItem('session');
      if(!$session->isLogged()){
        throw new Exception("Несанкционированный доступ. Home доступен только для авторизованных пользователей");
      }
    }
}
?>
