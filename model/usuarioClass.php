<?php

class bebidaClass{
    
    public $idUsuario;
    public $usuario;
    public $nombre;
    public $apellido;
    public $telefono;
    public $dni;
    public $email;
    public $tipo;
    public $pass;
    
    /*ID USUARIO*/
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }

    /*USUARIO*/
    public function getUsuario()
    {
        return $this->usuario;
    }

    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
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

    /*APELLIDO*/
    public function getApellido()
    {
        return $this->apellido;
    }

    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    /*TELEFONO*/
    public function getTelefono()
    {
        return $this->telefono;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    /*DNI*/
    public function getDni()
    {
        return $this->dni;
    }

    public function setDni($dni)
    {
        $this->dni = $dni;
    }

    /*EMAIL*/
    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    /*TIPO USUARIO*/
    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    /*CONTRASEÑA*/
    public function getPass()
    {
        return $this->pass;
    }

    public function setPass($pass)
    {
        $this->pass = $pass;
    }

    /*objesctvars*/
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
}