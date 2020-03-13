<?php

class packClass{
    
    public $idPack;
    public $nombrePack;
    public $precio;
    
    /*ID PACK*/
    public function getIdPack()
    {
        return $this->idPack;
    }
    
    public function setIdPack($idPack)
    {
        $this->idPack = $idPack;
    }
    
    /*NOMBRE PACK*/
    public function getNombrePack()
    {
        return $this->nombrePack;
    }
    
    public function setNombrePack($nombrePack)
    {
        $this->nombrePack = $nombrePack;
    }
    
    /*PRECIO*/
    public function getPrecio()
    {
        return $this->precio;
    }
    
    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return $vars;
    }  
    
}