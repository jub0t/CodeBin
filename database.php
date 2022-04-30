<?php
require_once "dotenv.php";

use DevCoder\DotEnv;

(new DotEnv(__DIR__ . '/.env'))->load();

$SQL = new mysqli(getenv('MYSQL_HOSTNAME'), getenv('MYSQL_USERNAME'), getenv('MYSQL_PASSWORD'), getenv('MYSQL_DATABASE'));
$SQL->query('CREATE TABLE IF NOT EXISTS `pastes` (
  `created` varchar(255) NOT NULL,
  `id` varchar(255) PRIMARY KEY,
  `name` tinytext NOT NULL,
  `content` text NOT NULL,
  `mark` tinytext NOT NULL
)');

function toID($length)
{
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
