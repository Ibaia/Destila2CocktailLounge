<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/connect_data.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/reservasClass.php';

class reservasModel extends reservasClass{
    
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
        
        $sql="CALL spReservas()";
        //echo $sql;
        
        $result= $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $reservas= new reservasModel;
            $reservas->setIdReserva($row["idReserva"]);
            $reservas->setFecha($row["fecha"]);
            $reservas->setIdUsuario($row["usuario"]);
            $reservas->setPack($row["nombrePack"]);        
            
            array_push($this->list, $reservas);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    //Crear La lista usuario
    public function setListUsu($idUser) {
       
        $userid=$idUser;
        
        $this->OpenConnect();
        
        $sql="CALL spReservasUsu('$userid')";
        //echo $sql;
        
        $result= $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $reservas= new reservasModel;
            $reservas->setIdReserva($row["idReserva"]);
            $reservas->setFecha($row["fecha"]);
            $reservas->setIdUsuario($row["idUsuario"]);      
            $reservas->setPack($row["nombrePack"]);   
            
            array_push($this->list, $reservas);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    // Crear Una reserva
    public function insertReserva(){
        
        $this->OpenConnect();
        
        //Parametros
        $fecha=$this->getFecha();
        $idUsu=$this->getIdUsuario();
        $pack=$this->getPack();
        
        $sql= "call spInsertReserva('$fecha', '$idUsu', '$pack')";
        echo $sql;
        
        $result=$this->link->query($sql);
        
        if ($this->link->affected_rows  >=1){
            return "Insertado";
        } else {
            return "Error al insertar";
        }
        $this->CloseConnect();
    }
    
    
    
    //Borrar reserva
    public function reservaDelete($idReserva) {
        $this->OpenConnect();
            
        $sql="call spDeleteReserva('$idReserva')";
            
        $result= $this->link->query($sql);
            
        $this->CloseConnect();
    }
    
    public function getListString(){
        
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = $object->getObjectVars();
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    
    
    
}