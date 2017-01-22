<?php

try {
  require 'defs.php';
  require HOME.'/tools/log.php';
  require HOME.'/tools/db.php';
  require HOME.'/tools/appdata.cls.php';

  function checkClsName($clsName){
    $clsName=preg_replace('/\W/im','',$clsName);
    $fileName=strtolower($clsName);
    if($clsName)
      if(file_exists(HOME.'/classes/'.$fileName.'/agate.cls.php') || file_exists(HOME.'/tools/'.$fileName.'.cls.php'))
        return $clsName;
    return false;
  }

  spl_autoload_register(function ($clsName) {
    $fileName=strtolower($clsName);
      if(file_exists(HOME.'/classes/'.$fileName.'/agate.cls.php')){
        require HOME.'/classes/'.$fileName.'/agate.cls.php';
      } else if(file_exists(HOME.'/tools/'.$fileName.'.cls.php')){
        require HOME.'/tools/'.$fileName.'.cls.php';
      } else {
        throw new Exception("No file for required class".$clsName);
      };
  });

  $DB=dbConnect(DBSERVER,DBUSER,DBPASSWORD,DBNAME,CODEPAGE);
  AppData::setItem('sysdb',$DB);
  $session=new UserSession();
  AppData::setItem('session',$session);
  if(empty($_REQUEST[VARNAME_SESSION]) || !$session->check($_REQUEST[VARNAME_SESSION])){
//do login
    $cls=new Login();
    $cls->doAction($_REQUEST);
  } else {
    $session->update();
    if($clsName=checkClsName($_REQUEST[VARNAME_CLASS])){
      $cls=new $clsName();
      $cls->doAction($_REQUEST);
    }
  }
} catch (Exception $e){
  logIt($e->getMessage());
  AppData::addOutput(ACTION_SYSTEM,VARNAME_ERROR,$e->getMessage());
} catch (Error $e){
  logIt($e->getMessage());
  AppData::addOutput(ACTION_SYSTEM,VARNAME_ERROR,$e->getMessage());
};
if($DB) $DB->close();
AppData::postOutput();
?>
