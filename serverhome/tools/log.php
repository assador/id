<?php

function logIt($errmessage,$errcode=0){
  if($f=fopen(LOGFILE,'a')){
    fputs($f,date('d.m.y H:i:s').': '.$errcode.': '.$errmessage);
    fclose($f);
  }
}
?>
