<!doctype html>

<html lang="ru" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>phpform</title>
</head>
<body>
<div style="margin:10%;">
<form method="post" action="action1.php">
<table><tr>
<td><label for="login">Логин</label></td>
<td><input id="login" type="text" name="login">
</td></tr><tr><td>
<label for="password">Пароль</label></td><td>
<input id="password" type="password" name="password"></td></tr>
<tr><td colspan="2" style="text-align: center"><input type="submit" value="Войти"></td></tr></table>
</form>
</div>


<form action="action.php" method="post">
 <p>Ваше имя: <input type="text" name="name" /></p>
 <p>Ваш возраст: <input type="text" name="age" /></p>
 <p><input type="submit" /></p>
</form>


</body>
</html>
