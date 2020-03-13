<?php
include_once '../model/reservasModel.php';

$idReserva= filter_input(INPUT_GET, "idReserva");

$reserva= new reservasModel();
$reserva->reservaDelete($idReserva);

echo "Reserva borrada";