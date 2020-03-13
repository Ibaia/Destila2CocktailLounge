<?php

include_once ("../model/packModel.php");

$packs= new packModel();
$packs->setList();

$listaPacksJSON=$packs->getListJsonString(); //attributes PRIVATEs or PROTECTED

echo $listaPacksJSON;

unset ($packs);