<?php

class reservasClass{
    
    public $idReserva;
    public $fecha;
    public $idUsuario;
    public $idPack;
    
    /*ID RESERVA*/
    public function getIdReserva()
    {
        return $this->idReserva;
    }
    
    public function setIdReserva($idReserva)
    {
        $this->idReserva = $idReserva;
    }
    
    /*FECHA*/
    public function getFecha()
    {
        return $this->fecha;
    }
    
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }
    
    /*ID USUARIO*/
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }
    
    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }
    
    /*ID PACK*/
    public function getPack()
    {
        return $this->idUsuario;
    }
    
    public function setPack($idPack)
    {
        $this->idPack = $idPack;
    }
    
    /*objesctvars*/
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}