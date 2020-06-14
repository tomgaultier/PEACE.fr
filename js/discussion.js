var scan = [];
var anime = [];
var theorie = [];
var autres = [];

//variable des tableau pouvant être appelé dans toutes les fonctions
var MessageScan = document.querySelector("#MessageScan");
var MessageAnime = document.querySelector("#MessageAnime");
var MessageTheorie = document.querySelector("#MessageTheorie");
var MessageAutres = document.querySelector("#MessageAutres");

var ButtonScan = document.querySelector("#ButtonScan");
var ButtonAnime = document.querySelector("#ButtonAnime");
var ButtonTheorie = document.querySelector("#ButtonTheorie");
var ButtonAutres = document.querySelector("#ButtonAutres");
			
//bouton ajouter un message
var ajout = document.getElementById('ajout');
var annule = document.getElementById('annule');		

var nb_messageScan = 0;

//position de la page dans le tableau des tâches
let place = 0;

function annuler(){
				
	let message = document.forms.formulaire.elements.message;
	let nom = document.forms.formulaire.elements.nom;	
	message.value = "";
	nom.value= "";
}


			
			
			
function ajouterScan(){	
	let message = document.forms.formulaire.elements.message.value;
	let nom = document.forms.formulaire.elements.nom.value;
	if( (document.forms.formulaire.reportValidity() == true) && (message != "") && (nom != "")){
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		td1.textContent = "par " + nom + " : ";
		tr.appendChild(td1);
		td2.textContent = message;
		tr.appendChild(td2);
		MessageScan.appendChild(tr,0);
		annuler();
		save("scan.json",MessageScan);
		
	}			
}

function ajouterAnime(){	
	let message = document.forms.formulaire.elements.message.value;
	let nom = document.forms.formulaire.elements.nom.value;
	if( (document.forms.formulaire.reportValidity() == true) && (message != "") && (nom != "")){
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		td1.textContent = "par " + nom + " : ";
		tr.appendChild(td1);
		td2.textContent = message;
		tr.appendChild(td2);
		MessageAnime.appendChild(tr,0);
		annuler();
		save("anime.json",MessageAnime);
	}			
}


function ajouterTheorie(){	
	let message = document.forms.formulaire.elements.message.value;
	let nom = document.forms.formulaire.elements.nom.value;
	if( (document.forms.formulaire.reportValidity() == true) && (message != "") && (nom != "")){
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		td1.textContent = "par " + nom + " : ";
		tr.appendChild(td1);
		td2.textContent = message;
		tr.appendChild(td2);
		MessageTheorie.appendChild(tr,0);
		annuler();
		save("theorie.json",MessageTheorie);
	}		
}


function ajouterAutres(){		
	let message = document.forms.formulaire.elements.message.value;
	let nom = document.forms.formulaire.elements.nom.value;
	if( (document.forms.formulaire.reportValidity() == true) && (message != "") && (nom != "")){
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		td1.textContent = "par " + nom + " : ";
		tr.appendChild(td1);
		td2.textContent = message;
		tr.appendChild(td2);
		MessageAutres.appendChild(tr,0);
		annuler();
		save("autres.json",MessageAutres);
	}			
}
		
//afficher les utilisateurs et masquer les tâches
function showScan(){
	MessageScan.style.display = "table";
	MessageAnime.style.display = "none";
	MessageTheorie.style.display = "none";
	MessageAutres.style.display = "none";
	
	ButtonScan.style.display = "table";
	ButtonAnime.style.display = "none";
	ButtonTheorie.style.display = "none";
	ButtonAutres.style.display = "none";
}
			
//A l'inverse, affiche les tâches et masque les utilisateurs
function showAnime(){
	MessageScan.style.display = "none";
	MessageAnime.style.display = "table";
	MessageTheorie.style.display = "none";
	MessageAutres.style.display = "none";
	
	ButtonScan.style.display = "none";
	ButtonAnime.style.display = "table";
	ButtonTheorie.style.display = "none";
	ButtonAutres.style.display = "none";
}
			
function showTheorie(){
	MessageScan.style.display = "none";
	MessageAnime.style.display = "none";
	MessageTheorie.style.display = "table";
	MessageAutres.style.display = "none";
	
	ButtonScan.style.display = "none";
	ButtonAnime.style.display = "none";
	ButtonTheorie.style.display = "table";
	ButtonAutres.style.display = "none";
}

function showAutres(){
	MessageScan.style.display = "none";
	MessageAnime.style.display = "none";
	MessageTheorie.style.display = "none";
	MessageAutres.style.display = "table";
	
	ButtonScan.style.display = "none";
	ButtonAnime.style.display = "none";
	ButtonTheorie.style.display = "none";
	ButtonAutres.style.display = "table";

}



function creerLigne(name,texte,tab){
	let tr = document.createElement("tr");
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	td1.textContent = name;
	tr.appendChild(td1);
	td2.textContent = texte;
	tr.appendChild(td2);
	tab.appendChild(tr);
}


//récupération des données stockées dans le json, et création du tableau
function load(fichier,tab){
	var fromJSON = localStorage.getItem(fichier);
	if(fromJSON != ""){
		var obj = JSON.parse(fromJSON);
		if(obj != null){
			for(let i = 0; i < obj.length; i++){
				creerLigne(obj[i]["name"],obj[i]["texte"],tab);
			}
		}
	}
}

//on récupère toute les lignes du tableau voulu et on enregistre les données dans un tableau stocké dans un json.
function save(fichier,tab){
	
	let lignes = tab.rows;
	
	for(let i = lignes.length-1; i >=4; i--){
		var id = {name : lignes[i].cells[0].innerText,texte :lignes[i].cells[1].innerText};
		scan.push(id);
	}
	
	var toJSON = JSON.stringify(scan);
	localStorage.setItem(fichier,toJSON);
}

function getScan(){
	fetch( 'https://raw.githubusercontent.com/tomgaultier/Peace/master/scan.json' )
		.then(response => response.json())
			.then(function (data) {
						//data devient un tableau comportant les 200 informations liés aux 200 id du site
				console.log('data',data);
				
					for(var i = data.length-1; i >= 0; i--){
						creerLigne("par "+data[i]["pseudo"]+" : ",data[i]["message"],MessageScan);
					}
			}
		)
}

function getAnime(){
	fetch( 'https://raw.githubusercontent.com/tomgaultier/Peace/master/anime.json' )
		.then(response => response.json())
			.then(function (data) {
						//data devient un tableau comportant les 200 informations liés aux 200 id du site
				console.log('data',data);
				
					for(var i = data.length-1; i >= 0; i--){
						creerLigne("par "+data[i]["pseudo"]+" : ",data[i]["message"],MessageAnime);
					}
			}
		)
}

function getTheorie(){
	fetch( 'https://raw.githubusercontent.com/tomgaultier/Peace/master/theorie.json' )
		.then(response => response.json())
			.then(function (data) {
						//data devient un tableau comportant les 200 informations liés aux 200 id du site
				console.log('data',data);
				
					for(var i = data.length-1; i >= 0; i--){
						creerLigne("par "+data[i]["pseudo"]+" : ",data[i]["message"],MessageTheorie);
					}
			}
		)
}

function getAutres(){
	fetch( 'https://raw.githubusercontent.com/tomgaultier/Peace/master/autres.json' )
		.then(response => response.json())
			.then(function (data) {
						//data devient un tableau comportant les 200 informations liés aux 200 id du site
				console.log('data',data);
				
					for(var i = data.length-1; i >= 0; i--){
						creerLigne("par "+data[i]["pseudo"]+" : ",data[i]["message"],MessageAutres);
					}
			}
		)
}

getScan();
getAnime();
getTheorie();
getAutres();

//on arrive sur la rubrique anime, pour éviter les spoils
showAnime();
//on charge les données enregistrées
load("scan.json",MessageScan);
load("anime.json",MessageAnime);
load("theorie.json",MessageTheorie);
load("autres.json",MessageAutres);
