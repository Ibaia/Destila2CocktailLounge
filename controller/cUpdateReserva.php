<?php
include_once '../model/reservasModel.php';

$reserva= new reservasModel();

$idReserva=filter_input(INPUT_GET, "idReserva");
$reserva->setIdReserva($idReserva);


$fecha=filter_input(INPUT_GET, "fecha");
$reserva->setFecha($fecha);


$pack=filter_input(INPUT_GET, "pack");
$reserva->setPack($fecha);

$result= $reserva->updateReserva();

echo $result; 