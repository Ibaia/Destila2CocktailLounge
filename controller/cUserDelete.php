<?php
include_once '../model/usuarioModel.php';

$idUsuario= filter_input(INPUT_GET, "idUser");

$usuario= new usuarioModel();

$usuario->userDelete($idUsuario);

echo "Usuario borrado";