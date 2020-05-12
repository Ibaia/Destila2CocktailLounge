<?php
include_once '../model/reservasModel.php';

$idUser=filter_input(INPUT_GET, 'idUsuario');

$reservas= new reservasModel;

$reservas->setListUsu($idUser);

$reservasList=$reservas->getListString();

echo $reservasList;