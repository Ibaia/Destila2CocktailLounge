<?php
include_once '../model/usuarioModel.php';

$usuarios= new usuarioModel;

$usuarios->setList();
$usuariosList=$usuarios->getListString();

echo $usuariosList;

?>