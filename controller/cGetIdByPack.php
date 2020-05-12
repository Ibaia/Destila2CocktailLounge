<?php
include_once '../model/packModel.php';

$nombrePack= filter_input(INPUT_GET, "packReserva");

$packs= new packModel;

$packs->getIdByNamePack($nombrePack);

$packsList=$packs->getListJsonString();

echo $packsList;