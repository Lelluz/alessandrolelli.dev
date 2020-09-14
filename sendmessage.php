<?php

$mail_from = $_POST['mail'];
$message = $_POST['message'];

$mail_to = "alelelli.98@gmail.com";
$headers = "From: ".$mail_from;
$subject = "Nuovo messaggio per te!";
$txt = "Nuovo messaggio per te!\n\n\n"
      ."E-mail: ".$mail_from."\n\n"
      ."Messaggio: ".$message."\n\n";

mail($mail_to, $subject, $txt, $headers);

echo "OK";