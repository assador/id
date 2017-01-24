<?php
require 'defs.php';
require HOME.'/tools/appdata.cls.php';
function myErrorHandler($errno, $errstr, $errfile, $errline){
/*
    if (!(error_reporting() & $errno)) {
        return false;
    }
*/
    throw new Exception('PHP error:'.$errstr." on line $errline in file $errfile",$errno);
    /* Don't execute PHP internal error handler */
    return true;
}
$old_error_handler = set_error_handler("myErrorHandler");

try {
  require HOME.'/tools/log.php';
  require HOME.'/tools/db.php';

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
    AppData::setSession($session);
    $session->update();
    if($clsName=checkClsName($_REQUEST[VARNAME_CLASS])){
      $cls=new $clsName();
      $cls->doAction($_REQUEST);
    }
  }
} catch (Exception $e){
  AppData::addError($e->getMessage());
} catch (Error $e){
  AppData::addError($e->getMessage().' in '.$e->getFile().' on '.$e->getLine());
};
if($DB) $DB->close();
AppData::postOutput();
?>
