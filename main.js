var largoArray= function(){
	var palabras=[];
	var valorMax=0;
	var posicion;
	var objetoRespuesta={};
var datosArray= ["Holaa", "Frase Corta","frase Normalita","Frase muy muy larga" ,"Naaa"];
//console.log(datosArray.length);
for(var indice=0; indice<datosArray.length; indice++){
	palabras[indice]=datosArray[indice].length;
	//console.log(palabras[indice])
	if(palabras[indice]>valorMax){
		valorMax=palabras[indice];
		posicion=indice;
		objetoRespuesta.palabra=datosArray[indice]
		objetoRespuesta.largo= palabras[indice]
	}	
}
return objetoRespuesta;
}
console.log("La frase mas larga es -->"+ largoArray().palabra + " con "+ largoArray().largo );

