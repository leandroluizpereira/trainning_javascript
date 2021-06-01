/*document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
*/
/*
window.addEventListener("load",function(){

})
*/
function girar(){

     var ponteiro = document.getElementById("ponteiro");
    var circulo = document.getElementById("circulo");
 
    var tempo=Math.floor(Math.random()*10)+1;


    switch(tempo){

        case 0:
            alert("parabéns");
            break;

        case 1:
            alert("Girou com força");
            circulo.style.animation="girar5 2s linear";
            ponteiro.style.animation="virar 1s infinite";
     
            break;
        case 2 :
            alert("caso 2");
            circulo.style.animation="girar2 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 3:
            alert("caso 3");
            circulo.style.animation="girar3 5s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 4:
            alert("caso 4");
            circulo.style.animation="girar4 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 5:
            alert("caso 5");
            circulo.style.animation="girar2 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 6:
            alert("caso 6");
            circulo.style.animation="girar3 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 7:
            alert("caso 7");
            circulo.style.animation="girar4 3s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 8:
            alert("caso 8");
            circulo.style.animation="girar4 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 9:
            alert("caso 9");
            circulo.style.animation="girar2 2s linear";
            ponteiro.style.animation="virar 1s infinite";
            break;
        case 10:
            alert("caso 10");
            circulo.style.animation="girar4 2s linear";
            ponteiro.style.animation="virar 2s linear";
        default:
            break;
    }
    ponteiro.style.animation="virar 2s linear";
}
   /* window.open('index.html','_self');*/




var i=0;
 
function inicia(){

    /* Adicionar imagem 
document.getElementById("btnAdd").addEventListener("click",function(){
for(i=0 ;i<4;i++){
    var imagem = document.createElement("img");
imagem.src = "romance.webp";
imagem.style.width="20%";
imagem.style.height="auto";
imagem.style.float="left";
imagem.style.margin="10px";
document.body.appendChild(imagem);
}

});
*/





document.getElementById("liAdd").addEventListener("click",function(){

    
    var lista = document.createElement("li");
    lista.style.textAlign="center";
    var li = document.getElementById("input").value;
   

    var random =Math.floor(Math.random() * li) + 1; 
    lista.innerHTML=random;
    switch(random){
        case  1: 
            lista.style.color="red";
            break;
        case 2 :
            lista.style.color="blue";
            break;
        case 3:
            lista.style.color="gray";
            break;
            case 4:
                lista.style.color="green";
                break;
        default:
           break;
    }

    document.body.appendChild(lista);


});
}
window.addEventListener("load",inicia);


