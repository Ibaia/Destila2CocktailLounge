<?php
include_once '../model/bebidaModel.php';

$bebida= new bebidaModel;

$bebida->setList();

$bebidaList=$bebida->getListString();

echo $bebidaList;