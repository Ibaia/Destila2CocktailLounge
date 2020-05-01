
	
$(document).ready(function() {
	// Session Check
	

	
	$.ajax({
		type : "GET",
		url : "../controller/cCheckSession.php",
		dataType : "json", // type of the result

		success : function(sessionData) {

			console.log(sessionData);
			
			var idUser=-1;

			var html = "";			
			
			if(sessionData.tipoUsu==-1){
				window.location.replace("../index.html");
			}else if(sessionData.tipoUsu==0){
				
				$('#navLogOut').show();
			}else if(sessionData.tipoUsu==1){
				html += '<li class="nav-item"><a class="nav-link" href="view/admin.html">Panel Admin</a></li>'
				$('#navLogOut').show();
			}
			
		$('#navSession').html(html);
		idUser=sessionData.idUsu;
		
		$.ajax({
			 type:"GET",
			 data:{'idUsuario':idUser},
				url: "../controller/cReservasUsuario.php", 
			 dataType: "json",  //type of the result
			    
			 success: function(result){
				 
				 console.log(result);
					
					var html ="";
					
					$.each(result, function(index, reserva) {
						html += '<tr>'
						html += '<td class="align-middle">'+reserva.fecha+'</td>'
						html += '<td class="align-middle">'+reserva.idPack+'<td>'
						html += '<td><button class="btn btn-primary mr-3 btn-block" name="'+reserva.idReserva+'" id="botonBorrarMiReserva">Borrar</button><button class="btn btn-primary btn-block" id="botonUpdateMiReserva">Modificar</button></td>	'
						html += '</tr>'
					
					});

					$('#listaMisReservas').html(html);
			},
			 error : function(xhr) {
				 alert("An error occured: " + xhr.status + " " + xhr.statusText);
			}
				 
		});
		
		
		
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});
	
	//verreservas

	
	
	//LogOut
	$('.logOutLink').click(function(){
	
		$.ajax({
			type:"GET",
			url: "../controller/cLogOut.php", 
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
