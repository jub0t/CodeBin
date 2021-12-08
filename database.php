<?php
/* ***********************************************************************************************
  Configure the credentials to your database.
************************************************************************************************* */

// $SQL = new mysqli("localhost", "root", "", "test");
$SQL->query('CREATE TABLE `pastes` (
  `created` varchar(255) NOT NULL,
  `id` varchar(255) PRIMARY KEY,
  `name` tinytext NOT NULL,
  `content` text NOT NULL,
  `mark` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;');

function toID($length) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return strtoupper($randomString);
} 

if ($SQL->connect_error) {
  $CONNECTECTION_ERROR = $SQL->connet_error;
  die("Connection Failed: $CONNECTECTION_ERROR");
}
