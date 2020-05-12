<?php
session_start();



if (!isset($_SESSION["tipoUsu"])) {
    $resultado=array('idUsu' => -1, 'username' => "", 'tipoUsu' => -1);
}else{
    $resultado=array('idUsu' => $_SESSION["idUsuario"], 'username' => $_SESSION["username"], 'tipoUsu' => $_SESSION["tipoUsu"]);
}

echo json_encode($resultado);