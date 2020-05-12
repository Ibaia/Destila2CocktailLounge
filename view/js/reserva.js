$(document).ready(function() {
	
	$('#botonReserva').attr('disabled', true);
	
	// Session Check
	
	$.ajax({
		type : "GET",
		url : "../controller/cCheckSession.php",
		dataType : "json", // type of the result

		success : function(sessionData) {

			console.log(sessionData);

			var html = "";			
			
			if(sessionData.tipoUsu==-1){
				$('#navLogOut').hide();
				alert("Debes estar logeado para hacer una reserva, redirigiendo a index");
				window.location.replace("../index.html");
			}else if(sessionData.tipoUsu==0){
				html += '<li class="nav-item"><a class="nav-link" href="vMisReservas.html">Mis Reservas</a></li>'
				$('#navLogOut').show();
			}else if(sessionData.tipoUsu==1){
				html += '<li class="nav-item"><a class="nav-link" href="admin.html">Panel Admin</a></li>'
				$('#navLogOut').show();
			}
			
		$('#navSession').html(html);
		
		
		
		
		//Reserva
		$('#botonReserva').click(function() {
			var idUsuario=sessionData.idUsu;
			var fecha=$('#fecha').val();
			var pack=$('#packSelect').val();
			
	
			var fechaActual=getActualDate();
			
			
			if(fecha==""){
				alert("Elige una fecha");
			}else{
				if(fecha<fechaActual){
					alert("La fecha de la reserva no puede ser anterior a hoy")
				}else{
					//ajax reserva
					$.ajax({
						 type:"GET",
						 data:{'idUsuario':idUsuario, 'fecha':fecha, 'pack':pack},
						 url: "../controller/cInsertReserva.php", 
						 dataType: "text",  //type of the result
						    
						 success: function(sessionData){
							 
							alert("Reservado con exito");		
			 
						},
						 error : function(xhr) {
							 alert("An error occured: " + xhr.status + " " + xhr.statusText);
						}
							 
					});
					
//				location.reload(true);
				}
			}
			
			
			
		});
		
		
		
		
			

		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});
	
	//botonreservaDisable
	$("input").change(function() {
		if($('#nombreForm').val()==""){		
		}else if($('#apellidoForm').val()==""){			
		}else if($('#emailForm').val()==""){			
		}else if($('#telForm').val()==""){			
		}else if($('#dniForm').val()==""){		
		}else if($('#fecha').val()==""){			
		}else{
			$('#botonReserva').attr('disabled', false);
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
				html += '<option value="'+pack.idPack+'">'+pack.nombrePack+'_'+pack.precio+'</option>'			
				
			});
			
			
			html += '</div>'
			$('#packSelect').html(html);

		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});
	
	//precio
	$('#numAsistentes').change(function() {
		var nAsis=0;
		var precAux=0;
		var prec=0;
		var precTot=0;
		
		nAsis=$('#numAsistentes').val();
		precAux=$('#packSelect option:selected').text();
		prec=precAux.substr(precAux.length - 2);
	
		
		precTot= (nAsis * prec);
		$('#precioReserva').html("PRECIO: "+precTot+"€")
	});
	
	$('#packSelect').change(function() {
		var nAsis=0;
		var precAux=0;
		var prec=0;
		var precTot=0;
		
		nAsis=$('#numAsistentes').val();
		precAux=$('#packSelect option:selected').text();
		prec=precAux.substr(precAux.length - 2);
		
		
		precTot= (nAsis * prec);
		$('#precioReserva').html("PRECIO: "+precTot+"€")
	});
	
	
	//LogOut
	$('#logOutLink').click(function(){
	
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
