<?php

class AppData {
  private static $data=array();
  private static $output=array();
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
    if(empty(self::$output[$action][$key])) self::$output[$action][$key]='';
    self::$output['actions'][$action][$key].=$value;
  }
  public static function clearOutput(){
    self::$output=array();
  }
  public static function postOutput(){
    header("Content-type: application/json; charset=".CODEPAGE."\n");
    echo json_encode(self::$output);
  }
}
?>
