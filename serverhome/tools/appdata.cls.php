<?php

class AppData {

  const SYS_ADMIN='system';
  const ACCOUNT_ADMIN='account';
  const CAFFE_ADMIN='caffe';

  private static $data=array();
  private static $output=array();
  private static $session="";

  public static function setItem($key,$value){
    self::$data[$key]=$value;
  }
  public static function getItem($key){
    if(!empty(self::$data[$key])){
      return self::$data[$key];
    } else {
      return null;
    }
  }
  /*
  $action - это ID акции - like SET_MODULE (см. ServerApi.jsx)
  $key - это поле в данных акции
  $value - ...
  */
  public static function setOutput($action,$key,$value){
    self::$output['actions'][$action][$key]=$value;
  }
  public static function addOutput($action,$key,$value){
    if(empty(self::$output['actions'][$action][$key])) self::$output['actions'][$action][$key]='';
    self::$output['actions'][$action][$key].=$value;
  }
  public static function addError($value){
    self::addOutput(ACTION_SYSTEM,VARNAME_ERROR,$value."\r\n");
  }
  public static function addDebug($value){
    self::addOutput(ACTION_SYSTEM,VARNAME_DEBUG,$value."\r\n");
  }
  public static function clearOutput(){
    self::$output=array();
  }
  public static function postOutput(){
    header("Content-type: application/json; charset=".CODEPAGE."\n");
    $sesid='';
    $session=self::getItem('session');
    if($session && $session->isLogged()) $sesid=$session->getSessionKey();
    
    self::$output['session']=$sesid;
    echo json_encode(self::$output);
  }

}
?>
