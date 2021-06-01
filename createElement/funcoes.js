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


    var circulo = document.getElementById("circulo");
 
    var tempo=Math.floor(Math.random()*10)+1;


    switch(tempo){

        case 0:
            alert("parabéns");
            break;

        case 1:
            alert("Girou com força");
            circulo.style.animation="girar 2s linear";
     
            break;
        case 2 :
            circulo.style.animation="girar2 4s linear";
            break;
        case 3:
            circulo.style.animation="girar3 5s linear";
            break;
        case 4:
            circulo.style.animation="girar4 5s linear";
            break;
        case 5:
            circulo.style.animation="girar2 6s linear";
            break;
        case 6:
            circulo.style.animation="girar3 8s linear";
            break;
        case 8:
            circulo.style.animation="girar4 4s linear";
            break;
        case 9:
            circulo.style.animation="girar2 4s linear";
            break;
        case 10:
            circulo.style.animation="girar4 4s linear";
        default:
            break;
    }
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
    lista.innerHTML=li;

    var random =Math.floor(Math.random() * 10) + 1; 
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


