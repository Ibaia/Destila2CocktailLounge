<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/connect_data.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/packClass.php';

class packModel extends packClass{
    
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
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $sql = "CALL selectAllPacks()"; // SQL sententzia - sentencia SQL
        
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la información solicitada a la bbdd
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new packClass();
            
            $new->setIdPack($row['idPack']);
            $new->setNombrePack($row['nombrePack']);
            $new->setPrecio($row['precio']);
                    
            array_push($this->list, $new);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        
    }
    
    function getListJsonString() {
        
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    
    
    
}