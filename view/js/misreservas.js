
	
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
				html += '<li class="nav-item"><a class="nav-link" href="admin.html">Panel Admin</a></li>'
				$('#navLogOut').show();
			}
			
		$('#navSession').html(html);
		idUser=sessionData.idUsu;
		
		//verreservas
		
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
						html += '<td class="align-middle">'+reserva.idPack+'</td>'
						html += '<td><button class="btn btn-primary mr-3 btn-block botonBorrarMiReserva" name="'+reserva.idReserva+'" >Borrar</button><button class="btn btn-primary btn-block botonUpdateMiReserva" name="'+reserva.idReserva+'">Modificar</button></td>	'
						html += '</tr>'
					
					});

					$('#listaMisReservas').html(html);
					
					

					//Borrar Reserva
					
					$('.botonBorrarMiReserva').click(function(){
						var idReserva="";
						
						idReserva= $(this).attr('name');
						$.ajax({
							type : "GET",
							data : {'idReserva':idReserva},
							url : "../controller/cReservaDelete.php",
							dataType : "text", // type of the result

							success : function(sessionData) {
								alert(sessionData)
								location.reload(true);

							},
							error : function(xhr) {
								alert("An error occured: " + xhr.status + " " + xhr.statusText);
							}
						});
						
					});
					
					
					//Update Reserva
					
					$('.botonUpdateMiReserva').click(function(){
						var idReserva="";
						var fechaReserva="";
						var packReserva="";
						var sessionPack="";
						var idPackInput="";
						
						idReserva= $(this).attr('name');
						packReserva= $(this).parent().prev().text();
						fechaReserva= $(this).parent().prev().prev().text();
						
						$.ajax({
							 type:"GET",
							 data:{'packReserva':packReserva},
							 url: "../controller/cGetIdByPack.php", 
							 dataType: "json",  //type of the result
							    
							 success: function(sessionData){								 
														 
								 $.each(sessionData, function(index, pack) {
									 idPackInput=pack.idPack;		
										
									});
													 
								 $('#idModificar').val(idReserva);
									$('#packSelectModificar option[value="'+idPackInput+'"]').attr("selected",true);
									$('#fechaModificar').val(fechaReserva);
														
									$('#modificarReservaModal').modal('toggle');
									
									$('#updateMiReserva').click(function() {
										var idReservaUpdate=$('#idModificar').val();
										var packReservaUpdate=$('#packSelectModificar').val();
										var fechaReservaUpdate=$('#fechaModificar').val();
										
										
										var fechaActual=getActualDate();
										
										
										if(fechaReservaUpdate==""){
											alert("Elige una fecha");
										}else{
											if(fechaReservaUpdate==fechaReserva){
												//ajax reserva
												$.ajax({
													 type:"GET",
													 data:{'idReserva':idReservaUpdate, 'fecha':fechaReservaUpdate, 'pack':packReservaUpdate},
													 url: "../controller/cUpdateReserva.php", 
													 dataType: "text",  //type of the result
													    
													 success: function(sessionData){
														 
														 alert(sessionData);	
															
														 location.reload(true);
													},
													 error : function(xhr) {
														 alert("An error occured: " + xhr.status + " " + xhr.statusText);
													}
														 
												});
											}else if(fechaReservaUpdate<fechaActual){
												alert("La fecha no puede ser anterior a la fecha actual");
											}else{
												//ajax reserva
												$.ajax({
													 type:"GET",
													 data:{'idReserva':idReservaUpdate, 'fecha':fechaReservaUpdate, 'pack':packReservaUpdate},
													 url: "../controller/cUpdateReserva.php", 
													 dataType: "text",  //type of the result
													    
													 success: function(sessionData){
														 alert(sessionData);	
														
														 location.reload(true);
													},
													 error : function(xhr) {
														 alert("An error occured: " + xhr.status + " " + xhr.statusText);
													}
														 
												});
											}
											
					
										
										}
										
										
										
									});
									
								
									
							},
							 error : function(xhr) {
								 alert("An error occured: " + xhr.status + " " + xhr.statusText);
							}
								 
						});
						
						
						
						
						
					});
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
	
	// Packs
	$.ajax({
		type : "GET",
		url : "../controller/cLoadPacks.php",
		dataType : "json", // type of the result

		success : function(result) {

			console.log(result);

			var html = "";

			

			$.each(result, function(index, pack) {
				html += '<option value="'+pack.idPack+'">'+pack.nombrePack+'</option>'			
				
			});
			
			
			html += '</div>'
			$('#packSelectModificar').html(html);

		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});
	
	
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

//fecha de hoy
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getActualDate() {
    var d = new Date();
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth()+1);
    var year = addZero(d.getFullYear());
    return year + "-" + month + "-" + day;
}
