<?php
// the message
$msg = "testing";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("gunaveeramallu97@gmail.com","My subject",$msg);

?>