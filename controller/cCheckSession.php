<?php
session_start();



if (!isset($_SESSION["tipoUsu"])) {
    $resultado=array('username' => "", 'tipoUsu' => -1);
}else{
    $resultado=array('username' => $_SESSION["username"], 'tipoUsu' => $_SESSION["tipoUsu"]);
}

echo json_encode($resultado);