<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/connect_data.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/usuarioClass.php';

class usuarioModel extends usuarioClass{
    
    private $list=array();
    private $link;
    
    //Conexion
    public function OpenConnect(){
        
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    public function CloseConnect(){
        
        mysqli_close ($this->link);
        
    }
    
    //Link
    public function getLink(){
        
        return $this->link;
    }
    /**
     * @param mysqli $link
     */
    public function setLink($link){
        
        $this->link = $link;
        
    }
    
    //coger la lista
    public function getList(){
        
        return $this->list;
    }
    
    //Crear La lista
    public function setList() {
        
        $this->OpenConnect();
        
        $sql="call spUsuarios()";
        $result=$this->link->query($sql);
        
        while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
            
            $newUser= new usuarioModel();
            $newUser->setIdUsuario($row['idUsuario']);
            $newUser->setUsuario($row['usuario']);
            $newUser->setNombre($row['nombre']);
            $newUser->setApellido($row['apellido']);
            $newUser->setTelefono($row['telefono']);
            $newUser->setDni($row['dni']);
            $newUser->setEmail($row['email']);
            $newUser->setTipo($row['tipo']);
            $newUser->setPass($row['pass']);
            
            //print_r($newUser);
            array_push($this->list, $newUser);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    //Borrar un usuario
    public function userDelete($idUser){
        $this->OpenConnect();
        
        $sql="call spDeleteUser('$idUser')";
        
        $result= $this->link->query($sql);
        
        $this->CloseConnect();
    }
    
    //Añadir un usuario
    public function insertUser() {
        
        $this->OpenConnect();
        
        //Parametros
        $nombre=$this->getNombre();
        $apellido=$this->getApellido();
        $usuario=$this->getUsuario();
        $contrasenia=$this->getPass();
        $numTel=$this->getTelefono();
        $email=$this->getEmail();
        $dni=$this->getDni();
        
        $sql="call spInsertUser('$nombre','$apellido','$usuario','$contrasenia','$numTel','$email','$dni')";
        
        //echo "sql=".$sql;
        $result=$this->link->query($sql);
        
        if ($this->link->affected_rows  >=1){
            return "Insertado";
        } else {
            return "Error al insertar";
        }
        $this->CloseConnect();
    }
    
    //Update usuario
    public function updateUser() {
        
        $this->OpenConnect();
        
        //Parametros
        $id=$this->getIdUsuario();
        $nombre=$this->getNombre();
        $apellido=$this->getApellido();
        $usuario=$this->getUsuario();
        $contrasenia=$this->getPass();
        $numTel=$this->getTelefono();
        $email=$this->getEmail();
        $dni=$this->getDni();
        
        $sql="call spUpdateUser('$id','$nombre','$apellido','$usuario','$contrasenia','$numTel','$email','$dni')";
        
        //echo "sql=".$sql;
        $result=$this->link->query($sql);
        
        if ($this->link->affected_rows  >=1){
            return "Modificado";
        } else {
            return "Error al modificar";
        }
        $this->CloseConnect();
    }
    
    public function getListString(){
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = $object->getObjectVars();
            
            array_push($arr, $vars);
        }
        return json_encode($arr, JSON_FORCE_OBJECT);
        //JSON_FORCE_OBJECT fuerza a lo que se reciba pase a objeto
    }
    
    
}