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
					 
					 alert(sessionData);
					 
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