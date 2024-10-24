<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";

$comm = mysqli_connect($server, $username, $password, $dbname);

if(!$comm){
    die("Failed". mysqli_connect_error());
} else{
     "meow";
}
