<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/usuarioModel.php';

$login = new usuarioModel();
$login->setList();

$usuarios=$login->getList();

$user=filter_input(INPUT_GET, 'usuario');
$userContr=filter_input(INPUT_GET, 'pass');

$resultado="Usuario o Contrasena incorrectos";

foreach ($usuarios as $object){
    
    //     echo " Contrasena ".$object->getContrasena();
    //     echo " USuario ". $object->getUsuario();
    //     print_r( $object);
    
    if ($object->getUsuario()==$user && $object->getPass()==$userContr) {
        
        $_SESSION["username"]= $object->getUsuario();
        $_SESSION["tipoUsu"]=$object->getTipo();
        $_SESSION['idUsuario']=$object->getIdUsuario();
        
        $resultado=array('username' => $_SESSION["username"], 'tipoUsu' => $_SESSION["tipoUsu"], 'id'=> $_SESSION['idUsuario']);
        
    }
}

echo json_encode($resultado);