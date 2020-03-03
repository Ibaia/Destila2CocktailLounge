$(document).ready(function() {
	// Packs
	$.ajax({
		type : "GET",
		url : "../controller/cLoadPacks.php",
		dataType : "json", // type of the result

		success : function(result) {

			console.log(result);

			var html = "";

			html += '<h2 class="text-white text-center pt-5 pb-5">NUESTROS PACKS</h2>'
			html += '<div class="row">'	

			$.each(result, function(index, pack) {
				html += '<div class="col-sm-4 col-12 border border-light p-3">'
				html += '<h5 class="text-white text-center">&bull;'+pack.nombrePack+'</h5>'
				html += '<p class="text-white text-center">&#8227;<i>Precio: '+pack.precio+'€</i></p>'
				html += '</div>'
			});
			
			
			html += '</div>'
			$('#loadPacks').html(html);

		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

	// Bebidas
	$.ajax({
		type : "GET",
		url : "../controller/cLoadBebidas.php",
		dataType : "json", // type of the result

		success : function(result) {

			console.log(result);
			
			var html = "";

			html += '<h2 class="text-white text-center pt-5 pb-5">NUESTRAS BEBIDAS</h2>'
			html += '<div class="row">'	

			$.each(result, function(index, bebida) {
				html += '<div class="row">'
				html += '<div class="col-12 col-sm-3">'
				html += '<img class="imgIndex shadow-sm" src="'+bebida.img+'">'
				html += '</div>'
				html += '<div class="col-sm-9 col-12">'
				html += '<h4 class="text-white">'+bebida.nombre+'</h4>'
				html += '<p class="text-white">'+bebida.descripcion+'</p>'
				html += '</div>'
				html += '</div>'	
				html += '<br>'
			});
			
			
			html += '</div>'
			$('#loadBebidas').html(html);
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

	// Cocteles
	$.ajax({
		type : "GET",
		url : "../controller/cLoadCocteles.php",
		dataType : "json", // type of the result

		success : function(result) {

			console.log(result);
			
			var html = "";

			html += '<h2 class="text-white text-center pt-5 pb-5">NUESTROS COCTELES</h2>'
			html += '<div class="row">'	

			$.each(result, function(index, bebida) {
				html += '<div class="row">'		
				html += '<div class="col-sm-9 col-12">'
				html += '<h4 class="text-white">'+bebida.nombre+'</h4>'
				html += '<p class="text-white">'+bebida.descripcion+'</p>'
				html += '</div>'
				html += '<div class="col-12 col-sm-3">'
				html += '<img class="imgIndex shadow-sm" src="'+bebida.img+'">'
				html += '</div>'
				html += '</div>'	
				html += '<br>'
			});
			
			
			html += '</div>'
			$('#loadCocteles').html(html);
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

});