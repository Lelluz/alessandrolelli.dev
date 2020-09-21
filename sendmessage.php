<?php

$host_mail = 'alessandro@alessandrolelli.dev';
$mail_from = $_POST['mail'];
$message = $_POST['message'];
$body = 'New message from your website!<br><br>'
      .'E-mail: '.$mail_from.'<br>'
      .'Messaggio: '.$message.'<br><br>';

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP();

$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'server220.web-hosting.com';
$mail->Port = 465;
$mail->IsHTML(true);
$mail->Username = $host_mail;
$mail->Password = 'Anonymo07';
$mail->SetFrom('alessandro@alessandrolelli.dev', 'Personal Website');
$mail->Subject = 'New message from your website!';
$mail->Body = $body;
$mail->AddAddress('alelelli.98@gmail.com', 'Alessandro');

if(!$mail->Send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'OK';
}