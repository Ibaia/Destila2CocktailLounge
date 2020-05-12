<?php
include_once '../model/usuarioModel.php';

$login = new usuarioModel();
$login->setList();

//Nombre
$nombre=filter_input(INPUT_GET, 'nombre');
$login->setNombre($nombre);

//Apellido
$apellido=filter_input(INPUT_GET, 'apellido');
$login->setApellido($apellido);

//Usuario
$usuario=filter_input(INPUT_GET, 'usuario');
$login->setUsuario($usuario);

//Contraseï¿½a
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

$result=$login->insertUser();


echo $result;
echo "contraseña ".$contrasenia;

//print_r($login->getList());
/*
echo "nombre ".$nombre;
echo "apellido ".$apellido;
echo "usu ".$usuario;
echo "contraseña ".$contrasenia;
echo "tel ".$telefono;
echo "email ".$email;
echo "dni ".$dni;*/

/*
$existe=false;
//Comprobar que exista
foreach ($login->getList() as $usu) {
    if ($usuario==$usu.$usuario) {
        $existe=true;
    }
}
if (!$existe) {
    //Ejecuta el insert
    $result=$login->insertUser();
}else {
    $result="Usuario existente";
}*/