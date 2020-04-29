var miAplicacion = angular.module('myapp', []);
miAplicacion.controller('admin', function ($scope, $http) {
	//						Comprobar session
    $http({
        method: "get",
        url: "../controller/cCheckSession.php",
    }).then(function mySucces(result) {
    	sessionData= result.data;    	
    	if(sessionData.tipoUsu==1){
//			USUARIOS
    		//Variables
    		$scope.userForm=true;
    		$scope.cuerpo=true;
    		
    		//Datos usuarios
    	    $http({
    	        method: "get",
    	        url: "../controller/cUsuariosAdmin.php",
    	    }).then(function mySucces(result) {


    	        $scope.usuarios = result.data;
    	        //console.log($scope.usuarios);

    	        $scope.modificarForm= function(usuario){
    	        	$scope.IdUpdate=usuario.idUsuario;
    	        	$scope.nombreUpdate=usuario.nombre;
    	        	$scope.apellidoUpdate=usuario.apellido;
    	        	$scope.usuarioUpdate=usuario.usuario;
    	        	$scope.passUpdate=usuario.pass;
    	        	$scope.telUpdate=usuario.telefono;
    	        	$scope.emailUpdate=usuario.email;
    	        	$scope.dniUpdate=usuario.dni;
    	        	
    	        }
    	        
    	    }), function myError(response) {

    	        $scope.usuarios = response.statusText;
    	    }

    	    //Elimiar usuario
    	    $scope.deleteUser=function(idUser){

    	        //console.log(idUser);
    	        $http({
    	            method: "get",
    	            params: {idUser: idUser},
    	            url: "../controller/cUserDelete.php",
    	        }).then(function mySucces(result) {
    	            respuesta=result.data
    	            alert(respuesta+" con exito, se recargara la pagina a continuacion");


    	            location.reload();
    	        }),function myError(response) {

    	            $scope.usuarios = response.statusText;
    	        }
    	       
    	    }
    	    
    	    //Mostrar el formulario de añadir usuario
    	    $scope.aniadirUsuario=function(){
    	        $http({
    	            method: "get",
    	            params: { nombre : $scope.nombreUsuario,
    	                 	apellido : $scope.apellidoUsuario,
    	                 	usuario : $scope.usuarioUsuario,
    	                 	password : $scope.contrasenaUsuario ,
    	                 	telefono : $scope.telUsuario ,
    	                 	email : $scope.emailUsuario,
    	                 	dni : $scope.dniUsuario},
    	            url: "../controller/cInsertUser.php",
    	        }).then(function mySucces(result) {
    	            respuesta=result.data
    	            alert(respuesta+" con exito, se recargara la pagina a continuacion");


    	            location.reload();
    	        }),function myError(response) {

    	            $scope.usuarios = response.statusText;
    	        }
    	    }
    	    
    	    $scope.ejecutarUpdateUser=function(){
    	        $http({
    	            method: "get",
    	            params: { id : $scope.IdUpdate,
    	            		nombre : $scope.nombreUpdate,
    	                 	apellido : $scope.apellidoUpdate,
    	                 	usuario : $scope.usuarioUpdate,
    	                 	password : $scope.passUpdate ,
    	                 	telefono : $scope.telUpdate ,
    	                 	email : $scope.emailUpdate,
    	                 	dni : $scope.dniUpdate},
    	            url: "../controller/cUpdateUser.php",
    	        }).then(function mySucces(result) {
    	            respuesta=result.data
    	            alert(respuesta+" con exito, se recargara la pagina a continuacion");


    	            location.reload();
    	        }),function myError(response) {

    	            $scope.usuarios = response.statusText;
    	        }
    	    }
//    							Fin USUARIOS
    	    
    	    
//    	 						Reservas
    	    
    		//			Datos reservas
    	    $http({
    	        method: "get",
    	        url: "../controller/cReservasAdmin.php",
    	    }).then(function mySucces(result) {
    	    
    	        $scope.reservas = result.data;
    	        //console.log($scope.reservas);
    	       
    	    }), function myError(response) {

    	        $scope.reservas = response.statusText;
    	    }
    	    
    	    
    	    $scope.deleteReserva=function(idReserva){
    	    	//console.log(idReserva);
    	    	
    	    	$http({
    	            method: "get",
    	            params: {idReserva: idReserva},
    	            url: "../controller/cReservaDelete.php",
    	        }).then(function mySucces(result) {
    	            respuesta=result.data
    	            alert(respuesta+" con exito, se recargara la pagina a continuacion");


    	            location.reload();
    	        }),function myError(response) {

    	            $scope.usuarios = response.statusText;
    	        }
    	    }
    	    
//    				Fin Reservas
    	    
//    				Bebidas
    	    $http({
    	        method: "get",
    	        url: "../controller/cBebidasAdmin.php",
    	    }).then(function mySucces(result) {
    	    
    	        $scope.bebidas = result.data;
    	        //console.log($scope.bebidas);
    	        $scope.modificarBebidaForm= function(bebida){
    	        	
    	        	//console.log(bebida);
    	        	$scope.IdBebidaUpdate=bebida.idBebida;
    	        	$scope.nombreBebidaUpdate=bebida.nombre;
    	        	$scope.descipcionBebidaUpdate=bebida.descripcion;

    	        }
    	       
    	    }), function myError(response) {

    	        $scope.bebidas = response.statusText;
    	    }

    	    //			Update Bebidas
    	    
    	    $scope.ejecutarUpdateBebida= function(){
    	            $http({
    	                method: "get",
    	                params: { id : $scope.IdBebidaUpdate,
    	                		nombre : $scope.nombreBebidaUpdate,
    	                     	descipcion : $scope.descipcionBebidaUpdate},
    	                url: "../controller/cUpdateBebida.php",
    	                
    	            }).then(function mySucces(result) {
    	                respuesta=result.data
    	                alert(respuesta+" con exito, se recargara la pagina a continuacion");


    	                location.reload();
    	            }),function myError(response) {

    	                $scope.usuarios = response.statusText;
    	            }
    	    	
    	    }
    	   
    	    //			Fin Update Bebidas
    	    
    	    //			Fin bebidas
    	}else{
    		window.location.replace("../index.html");
    	}
    		
    }), function myError(response) {

            $scope.usuarios = response.statusText;
    }

});
