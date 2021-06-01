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
var i=0;
 
function inicia(){
document.getElementById("btnAdd").addEventListener("click",function(){
for(i=0 ;i<4;i++){
    var imagem = document.createElement("img");
imagem.src = "romance.webp";
imagem.style.width="20%";
imagem.style.height="auto";
imagem.style.float="left";
imagem.style.margin="10px";
document.body.appendChild(imagem);
paragrafo.style.textAlign="center";



}



});
document.getElementById("liAdd").addEventListener("click",function(){
    var lista = document.createElement("li");

    lista.style.textAlign="center";
    var li = document.getElementById("input").value;

    lista.innerHTML=li;
    document.body.appendChild(lista);
});
}


window.addEventListener("load",inicia);

