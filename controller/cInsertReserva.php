<?php
include_once '../model/reservaModel.php';

$newReserva = new reservaModel();
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
