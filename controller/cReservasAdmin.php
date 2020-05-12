<?php
include_once '../model/reservasModel.php';

$reservas= new reservasModel;

$reservas->setList();

$reservasList=$reservas->getListString();

echo $reservasList;