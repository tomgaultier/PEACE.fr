var fondEcran = document.querySelector("#fond_ecran");
var fanArt = document.querySelector("#fan_art");
var croquis = document.querySelector("#croquis");



function showFond(){
	fondEcran.style.display = "flex";
	fanArt.style.display = "none";
	croquis.style.display = "none";
	
}

function showFanArt(){
	fondEcran.style.display = "none";
	fanArt.style.display = "flex";
	croquis.style.display = "none";
}

function showCroquis(){
	fondEcran.style.display = "none";
	fanArt.style.display = "none";
	croquis.style.display = "flex";
}

showFanArt();