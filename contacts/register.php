<?php
require_once('db.php');

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$sql = "INSER INTO `users` (name,email,text) VALUES ('$name','$email','$text')";
$conn -> query($sql);