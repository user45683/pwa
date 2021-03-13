
<meta http-equiv='refresh' content='3; url=http://localhost:8080/pwa/beta/index.html'>
<meta charset="utf-8">
<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$emailmessage = "Имя: $name /nE-mail: $email /nТекст: $message";
	$email0 = "gm2308483@gmail.com";
	$send = mail($email0, $emailmessage, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
	if($send==true){
		echo "Сообщение отправлено";}
	else{echo "Что-то пошло не так";}
?>
