<?php
/* ***********************************************************************************************
  Configure the credentials to your database.
************************************************************************************************* */

$SQL = new mysqli("localhost", "root", "", "test");
$SQL->query('CREATE TABLE `pastes` (
  `created` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,s
  `name` tinytext NOT NULL,
  `content` text NOT NULL,
  `mark` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;');

if ($SQL->connect_error) {
  $CONNECTECTION_ERROR = $SQL->connet_error;
  die("Connection Failed: $CONNECTECTION_ERROR");
}
