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
  public static function setOutput($key,$value){
    self::$output[$key]=$value;
  }
  public static function addOutput($key,$value){
    if(empty(self::$output[$key])) self::$output[$key]='';
    self::$output[$key].=$value;
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
