var miAplicacion = angular.module('myapp', []);
miAplicacion.controller('admin', function ($scope, $http) {

    $http({
        method: "get",
        url: "../controller/cUsuariosAdmin.php",
    }).then(function mySucces(result) {


        $scope.usuarios = result.data;
        console.log($scope.usuarios);

    }), function myError(response) {

        $scope.usuarios = response.statusText;
    }

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
});
