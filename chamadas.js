window.onload=function(){
	var a = document.getElementById('bntpiramide3');
	var b=document.getElementById('bntpiramide2');
	var c=document.getElementById('bntpiramide1');
	a.onclick=function(){
		geral();
      return false;
	}
	a.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		}
	b.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		}	
	c.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		
		}	
			
}
 
geral = function(){
	var chamada = new XMLHttpRequest();
	chamada.open('GET', 'home.php', true);
	chamada.send(null);
	chamada.onreadystatechange = function(){

		if ( this.readyState == 4 && this.status == 200 ) {
        var div = document.getElementById('intro');
         div.innerHTML = this.responseText;
		}
	};
	
	
};

$(document).ready(function(){
 $("#bntpiramide3").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "Google/Google.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});


$(document).ready(function(){
 $("#bntpiramide2").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "Facebook/Facebook.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});


$(document).ready(function(){
 $("#bntpiramide1").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "parceiros/parceiros.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});


$(window).load(function() { 
 $.ajax({ 
type: "GET", 
url: "padrinhos/padrinhos.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 

});



function caller(n){
	
	switch(n){
	case 0: t="home.php " ;break;
	case 1: t=" partnership.php" ;break;
	
	}
	
  httpreq=new XMLHttpRequest();	
 	
	  httpreq.onreadystatechange=function(){
		  
		
		if(httpreq.readyState==3){
			  document.getElementById('intro').innerHTML=httpreq.responseText;
		  
		   
			
		  } 
	
		function browserVer4Detect()

{

  if(navigator.appVersion.substring(0,1) < 4)

    URLStr = "1.html";

  else

    URLStr = "2.html";

  window.location = URLStr;

}



		  
		  }
	
	  httpreq.open("GET",t,true)
	  httpreq.send(null)
	
	}
	
	function ft(){
		var id="bntindex";
		
		if(document.getElementById('bntindex')){  
			  document.getElementById('FotoPerfil').innerHTML="<img src=image/perfil-Alan.png />";
		} 
			  
		
		}