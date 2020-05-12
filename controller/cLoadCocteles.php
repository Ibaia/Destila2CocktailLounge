<?php

include_once ("../model/bebidaModel.php");

$cocteles= new bebidaModel();
$cocteles->setListCocteles();

$listaCoctelesJSON=$cocteles->getListJsonString(); //attributes PRIVATEs or PROTECTED

echo $listaCoctelesJSON;

unset ($cocteles);