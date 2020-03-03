/* <h2>Nuestros packs</h2>
            <div class="row">
              <div class="col-12 col-sm-3">
                <img class="imgIndex shadow-sm" src="img/fuegovalyrio.jpg">
              </div>
              <div class=" col-sm-9 col-12">
                <h4>pack 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi consequuntur aliquam ad iusto reiciendis qui architecto animi aspernatur perferendis! A vel modi aut tempora explicabo? Enim blanditiis adipisci totam?</p>
              </div>
            </div> */

$( document ).ready(function() {
    //Packs
	$.ajax({
       	type:"GET",
       	url: "../controller/cLoadPacks.php", 
    	dataType: "json",  // type of the result
       	
    	success: function(result){  
       		
       		console.log(result);
     	},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
  	});
	
	//Bebidas
	$.ajax({
       	type:"GET",
       	url: "../controller/cLoadBebidas.php", 
    	dataType: "json",  // type of the result
       	
    	success: function(result){  
       		
       		console.log(result);
     	},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
  	});
	
	//Cocteles
	$.ajax({
       	type:"GET",
       	url: "../controller/cLoadCocteles.php", 
    	dataType: "json",  // type of the result
       	
    	success: function(result){  
       		
       		console.log(result);
     	},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
  	});
	
});