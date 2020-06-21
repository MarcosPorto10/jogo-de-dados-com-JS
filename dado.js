var pontuacao1=10;
var pontuacao2=10;



function ok(){
	if(document.getElementById('nickId').value && document.getElementById("nick1Id").value !="")
{
document.getElementById("jogo").hidden=false;
document.getElementById('n1').innerHTML= document.getElementById('nickId').value;
document.getElementById('n2').innerHTML= document.getElementById('nick1Id').value;
document.getElementById('j1').innerHTML= '10';
document.getElementById('j2').innerHTML= '10';
}else{
	alert ("PREENCHA O NICK");
}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function sorteia() {
var ponto=0;
var ponto1=0;


	var valor_dado = getRandomInt(1, 6);
	var valor_dado1 = getRandomInt(1, 6);


	switch (valor_dado) {
		case 1:
			document.getElementById('img1').src = "dado1.png"; 
			ponto=1;
			break;
		case 2:
			document.getElementById('img1').src = "dado2.png";
			ponto=2;
			break;
		case 3:
			document.getElementById('img1').src = "dado3.png";
			ponto=3;
			break;
		case 4:
			document.getElementById('img1').src = "dado4.png";
			ponto=4;
			break;
		case 5:
			document.getElementById('img1').src = "dado5.png";
			ponto=5;
			break;
		default:
			document.getElementById('img1').src = "dado6.png";
			ponto=6;


	}
	switch (valor_dado1) {
		case 1:
			document.getElementById('img2').src = "dado1.png";
			ponto1=1;
			break;
		case 2:
			document.getElementById('img2').src = "dado2.png";
			ponto1=2;
			break;
		case 3:
			document.getElementById('img2').src = "dado3.png";
			ponto1=3;
			break;
		case 4:
			document.getElementById('img2').src = "dado4.png";
			ponto1=4;
			break;
		case 5:
			document.getElementById('img2').src = "dado5.png";
			ponto1=5;
			break;
		default:
			document.getElementById('img2').src = "dado6.png";
			ponto1=6;
		}

if (ponto>ponto1){
pontuacao2 --;
 document.getElementById("j2").innerHTML=pontuacao2;
}else if(ponto1>ponto){
	pontuacao1 --;
	document.getElementById("j1").innerHTML=pontuacao1;
}else {
document.getElementById("j1").innerHTML=pontuacao1;
document.getElementById("j2").innerHTML=pontuacao2;
}
if (pontuacao1==0){
	pontuacao2++;
	document.getElementById("j1").innerText="VOCE PERDEU";
	document.getElementById("j2").innerText="VOCE GANHOU";
}else if(pontuacao2==0){
	document.getElementById("j1").innerText="VOCE GANHOU";
	document.getElementById('j2').innerText="VOCE PERDEU";
    pontuacao1++;
}
}
function reinicia(){
    pontuacao1=10;
	pontuacao2=10;
	document.getElementById("j1").innerText= pontuacao1;
	document.getElementById('j2').innerText=pontuacao2;
    document.getElementById('img1').src = "dado0.png"; 
	document.getElementById('img2').src = "dado0.png"; 

}









