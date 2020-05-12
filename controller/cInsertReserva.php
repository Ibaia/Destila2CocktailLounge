<?php
include_once '../model/reservasModel.php';

$newReserva = new reservasModel();
$newReserva->setList();

//Fecha
$fecha=filter_input(INPUT_GET, 'fecha');
$newReserva->setFecha($fecha);

//idUsuario
$idUsu=filter_input(INPUT_GET, "idUsuario");
$newReserva->setIdUsuario($idUsu);

//idPack
$pack= filter_input(INPUT_GET, "pack");
$newReserva->setPack($pack);


$result=$newReserva->insertReserva();


echo $result;
