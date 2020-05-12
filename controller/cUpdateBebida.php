<?php
include_once '../model/bebidaModel.php';

$bebida = new bebidaModel();
$bebida->setList();

//Id
$id=filter_input(INPUT_GET, 'id');
$bebida->setIdBebida($id);

//Nombre
$nombre=filter_input(INPUT_GET, 'nombre');
$bebida->setNombre($nombre);

//Apellido
$descricion=filter_input(INPUT_GET, 'descipcion');
$bebida->setDescripcion($descricion);

$result=$bebida->updateBebida();

echo $result;