console.log("hello");

//MOUSEOVER//
function mOver(obj) {
  obj.innerHTML = "KIMETSU NO YABA";
}

function mOut(obj) {
  obj.innerHTML = "DEMON SLAYER";
}

// FIM MOUSEOVER

// SCROLL com BoTAO STOP

const myScrol = setInterval(scrol);



function scrol(){
    
    window.scrollBy(0,0.5);
}

function stop(){
    clearInterval(myScrol);
}

//FIM SCROL

// ALTERAÇÃO DE FUNDO COM BoTÃO STOP

var background = new Array(); 
background[0] = "img2.jpeg";
background[1] = "img3.jpeg";
background[2] = "img4.jpeg";
background[3] = "img5.jpeg";
background[4] = "img6.jpeg";
background[5] = "img7.jpeg";
background[6] = "img8.jpeg";

var numberGen =Math.floor(Math.random()*6);
document.body.style.background='url('+background[numberGen]+')';

function fundo(){
   location.reload();
}

//fim do fundo

// botao revelar spoiler NAO FUNCIONA NAO PERCEBO PORQUE
// o objetivo seria desbloquear a secção ao carregar

function alert() {
  var x = document.getElementById("myDIV");
  if (x.style.display = "none") {
    x.style.display = "block";
  } else {
    x.style.display === "none";
  }
}

//FIM DO QUE NAO FUNCIONA 
// MOUSEMOVE






