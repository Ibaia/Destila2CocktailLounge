$(document).ready(function() {
	// Session Check
	
	$.ajax({
		type : "GET",
		url : "./controller/cCheckSession.php",
		dataType : "json", // type of the result

		success : function(sessionData) {

			console.log(sessionData);

			var html = "";			
			
			if(sessionData.tipoUsu==-1){
				$('#navLogOut').hide();
				html += '<li class="nav-item"><a class="nav-link modalLoginLink" href="javascript:void(0);" data-toggle="modal" data-target="#modalLogin">Login</a></li>'
				html += '<li class="nav-item"><a class="nav-link modalRegisterLink" href="javascript:void(0);" data-toggle="modal" data-target="#modalRegister">Register</a></li>'
			}else if(sessionData.tipoUsu==0){
				html += '<li class="nav-item"><a class="nav-link" href="view/vMisReservas.html">Mis Reservas</a></li>'
				$('#navLogOut').show();
			}else if(sessionData.tipoUsu==1){
				html += '<li class="nav-item"><a class="nav-link" href="view/admin.html">Panel Admin</a></li>'
				$('#navLogOut').show();
			}
			
		$('#navSession').html(html);

		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});
	
	
	//LOGIN
	$('#btnLogin').click(function(){
		var usu=$('#usuario').val();
		var pass=$('#pass').val();
		
		
		
		if (usu=="") {
			alert("Rellena el usuario")
		}else if (pass==""){
			alert("Rellena la contraseña")
		}else{
			/* Comprobar usu y contraseña*/
			$.ajax({
				 type:"GET",
				 data:{'usuario':usu, 'pass':pass},
				 url: "./controller/cLogin.php", 
				 dataType: "json",  //type of the result
				    
				 success: function(sessionData){
					 
					 var html = "";			
						
						if(sessionData.tipoUsu==-1){
							$('#navLogOut').hide();
							html += '<li class="nav-item"><a class="nav-link modalLoginLink" href="javascript:void(0);" data-toggle="modal" data-target="#modalLogin">Login</a></li>'
							html += '<li class="nav-item"><a class="nav-link modalRegisterLink" href="javascript:void(0);" data-toggle="modal" data-target="#modalRegister">Register</a></li>'
						}else if(sessionData.tipoUsu==0){
							html += '<li class="nav-item"><a class="nav-link" href="view/vMisReservas.html">Mis Reservas</a></li>'
							$('#navLogOut').show();
						}else if(sessionData.tipoUsu==1){
							html += '<li class="nav-item"><a class="nav-link" href="view/admin.html">Panel Admin</a></li>'
							$('#navLogOut').show();
						}else{
							 alert(sessionData);
							 
						}
						
					$('#navSession').html(html);
					
					
	 
				},
				 error : function(xhr) {
					 alert("An error occured: " + xhr.status + " " + xhr.statusText);
				}
					 
			});
			location.reload(true);
		}
	});
	
	
	//REGISTER
	$('#btnRegister').click(function(){
		var nombre=$('#nombre').val();
		var apellido=$('#apellido').val();
		var usu=$('#usureg').val();
		var pass=$('#passreg').val();
		var numtel=$('#numtel').val();
		var email=$('#email').val();
		var dni=$('#dni').val();
		
		
		
		if (usu=="") {
			alert("Rellena el usuario")
		}else if (pass==""){
			alert("Rellena la contraseña")
		}else{
			/* Comprobar usu y contraseña*/
			$.ajax({
				 type:"GET",
				 data:{'nombre':nombre, 'apellido':apellido, 'usuario':usu, 'password':pass, 'telefono':numtel, 'email':email, 'dni':dni},
				 url: "./controller/cInsertUser.php", 
				 dataType: "json",  //type of the result
				    
				 success: function(sessionData){
					 
					alert("Registrado con exito");
					
					
					
	 
				},
				 error : function(xhr) {
					 alert("An error occured: " + xhr.status + " " + xhr.statusText);
				}
					 
			});
			location.reload(true);
		}
	});
	
	
	
	
	//LogOut
	$('.logOutLink').click(function(){
	
		$.ajax({
			type:"GET",
			url: "./controller/cLogOut.php", 
			datatype: "text",  //type of the result
	   	
			success: function(result){  				
				location.reload(true);
			},
			error : function(xhr) {
				alert("An error occured: " + xhr.status + " " + xhr.statusText);
			}
		});
		
		
	});

});
