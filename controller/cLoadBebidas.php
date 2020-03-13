<?php

include_once ("../model/bebidaModel.php");

$bebidas= new bebidaModel();
$bebidas->setListLicores();

$listaBebidasJSON=$bebidas->getListJsonString(); //attributes PRIVATEs or PROTECTED

echo $listaBebidasJSON;

unset ($bebidas);