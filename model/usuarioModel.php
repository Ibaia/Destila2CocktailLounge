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
    
    
    
    
    
}