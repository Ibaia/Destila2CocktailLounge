<?php

class tipoClass {

    public $idtipo;
    public $nombreTipo;
    
    
    /*ID TIPO*/
    public function getIdTipo()
    {
        return $this->idtipo;
    }
    public function setIdTipo($idtipo)
    {
        $this->idtipo = $idtipo;
    }
    
    /*NOMBRE TIPO*/
    public function getNombreTipo()
    {
        return $this->nombreTipo;
    }
    public function setNombre($nombreTipo)
    {
        $this->nombreTipo = $nombreTipo;
    }
    
    /*objesctvars*/
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}