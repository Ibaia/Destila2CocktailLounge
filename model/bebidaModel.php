<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/connect_data.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Destila2CocktailLounge/model/bebidaClass.php';

class bebidaModel extends bebidaClass{
    
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
        $sql="call spBebidas()";
        $result= $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $bebida= new bebidaModel;
            $bebida->setIdBebida($row["idBebida"]);
            $bebida->setNombre($row["nombre"]);
            $bebida->setDescripcion($row["descripcion"]);
            $bebida->setImg($row["img"]);
            $bebida->settipo($row["nombreTipo"]);

            array_push($this->list, $bebida);
        }
        mysqli_free_result($result);
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