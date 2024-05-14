const eni =document.getElementById("eni");
const uzunu = document.getElementById("uzunu");
const btnPerimetr=document.getElementById("perimetr");
const btnSahe =document.getElementById("sahe");

btnPerimetr.addEventListener("click",function(){
    let hesabla =2*(Number(eni.value)+Number(uzunu.value));
    netice.innerHTML=hesabla;
    eni.value="";
    uzunu.value=" ";
})
btnSahe.addEventListener("click",function(){
    let hesabla =(Number(uzunu.value)*Number(uzunu.value));
    netice.innerHTML=hesabla;
    eni.value="";
    uzunu.value=" ";
})