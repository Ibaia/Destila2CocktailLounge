<?php
include_once '../model/usuarioModel.php';

$login = new usuarioModel();
$login->setList();

//Id
$id=filter_input(INPUT_GET, 'id');
$login->setIdUsuario($id);

//Nombre
$nombre=filter_input(INPUT_GET, 'nombre');
$login->setNombre($nombre);

//Apellido
$apellido=filter_input(INPUT_GET, 'apellido');
$login->setApellido($apellido);

//Usuario
$usuario=filter_input(INPUT_GET, 'usuario');
$login->setUsuario($usuario);

//Contrase�a
$contrasenia=filter_input(INPUT_GET, 'password');
$login->setPass($contrasenia);

//Telefono
$telefono=filter_input(INPUT_GET, 'telefono');
$login->setTelefono($telefono);

//Email
$email=filter_input(INPUT_GET, 'email');
$login->setEmail($email);

//DNI
$dni=filter_input(INPUT_GET, 'dni');
$login->setDni($dni);

//echo $id, $nombre, $apellido, $usuario, $contrasenia, $telefono, $email, $dni;

$result=$login->updateUser();

echo $result;
