<?php

class bebidaClass{
    
    public $idBebida;
    public $nombre;
    public $descripcion;
    public $img;
    public $tipo;

    /*ID BEBIDA*/
    public function getIdBebida()
    {
        return $this->idBebida;
    }
    public function setIdBebida($idBebida)
    {
        $this->idBebida = $idBebida;
    }

    /*NOMBRE*/
    public function getNombre()
    {
        return $this->nombre;
    }
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /*DESCRIPCION*/
    public function getDescripcion()
    {
        return $this->descripcion;
    }
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }
    
    /*IMAGEN*/
    public function getImg()
    {
        return $this->img;
    }
    public function setImg($img)
    {
        $this->img = $img;
    }

    /*TIPO*/
    public function getTipo()
    {
        return $this->tipo;
    }
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }
    
    /*objesctvars*/
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
}