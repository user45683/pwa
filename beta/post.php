
<meta http-equiv='refresh' content='3; url=https://dellsin.000webhostapp.com/'>
<meta charset="utf-8">
<?php
$to = "gm2308483@gmail.com";
$message = "Имя: " . $_POST['name'] . "<br>" ;
$message .= "E-mail: " . $_POST['email'] . "<br>";
$message .= $_POST['message'];
$tema = "Обратная связь";
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$mail = mail($to, $tema, $message, $headers);
	if($mail==true){
		echo "Сообщение отправлено";}
	else{echo "Что-то пошло не так";}
?>
