//-------------------------javascript parte 1---------------------------------//
function exercicio1_1(a){
  var list = "";
  for (var i = 0; i <= a; i++) {
    for (var j = 0; j < i; j++) {
      list = list.concat(" #");
    }
    console.log(list);
    list="";
  }
}
function exercicio1_3(){
  for (var i = 0; i < 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
      console.log(i+" Fizz Buzz");
    }
    else if (i%3 == 0 && i%5 != 0) {
      console.log(i+" Fizz");
    }
    else if (i%3 != 0 && i%5 == 0) {
      console.log(i+" Buzz");
    }
    else {
      console.log(i);
    }
  }
}
//-----------------------javascript parte 2-----------------------------------//
function exercicio2_1(a, b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else {
    return undefined;
  }
}
function exercicio2_2(a, b){
  if(a>b){
    return b;
  }
  else if(b>a){
    return a;
  }
  else {
    return undefyned;
  }
}
function exercicio2_3(num, mod){
  if(num % mod == 0){
    return true;
  }
  else return false;
}
function exercicio2_4(func, string){
  var result = func(string);
  return result;
}
function func(string){
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if(string[i]!="a" && string[i]!="e" && string[i]!="i" && string[i]!="o" && string[i]!="u" && string[i]!="A" && string[i]!="E" && string[i]!="I" && string[i]!="O" && string[i]!="U"){
      result = result + string[i];
    }
  }
  return result;
}
//---------------------javascript estruturas de dados-------------------------//
function exercicio3_1(arrayList){
  var newArray = [];
  var j = 0;
  for (var i = arrayList.length-1; i >= 0;  i--) {
    newArray.push(arrayList[i]);
    j++;
  }
  return newArray;
}
function exercicio3_2(obj1, obj2){
  if (obj1 === obj2){
    return true;
  }
  else return false;
}

function exercicio3_3(texto){
  var registro = [];
  var node = document.createElement("P");
  registro.push(Date()+": "+texto);
  node = document.createTextNode(registro);
  document.getElementById("diario").appendChild(document.createElement("BR"));
  document.getElementById("diario").appendChild(node);
}
//--------------------javascript funções de alta ordem------------------------//
function exercicio4_1(arrays){
  var result = [];
  for (var i = 0; i < arrays.length; i++) {
    for (var j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}
//-------------------javascript exercicios de revisão-------------------------//
function exercicio5_1(param, vet, insert){
  return param(insert, vet);
}
function crescente(insert, vet){
  var done = false;
  if (vet[vet.length-1] < insert || vet[vet.length-1] == insert) {
    vet[vet.length] = insert;
    done = true;
  }
  for(var i = vet.length; i > 0; i--){
    if(done==false){
      if(vet[i-1] < insert || vet[i-1] == insert && insert < vet[i]){
        vet[i] = insert;
        done = true;
      }
      else{
        vet[i] = vet[i-1];
      }
    }
  }
  if(done==false){
    vet[0] = insert;
  }
  return vet;
}
function decrescente(insert, vet) {
  var done = false;
  if (vet[vet.length-1] > insert || vet[vet.length-1] == insert) {
    vet[vet.length] = insert;
    done = true;
  }
  for(var i = vet.length; i > 0; i--){
    if(done==false){
      if(vet[i-1] > insert || vet[i-1] == insert && insert > vet[i]){
        vet[i] = insert;
        done = true;
      }
      else{
        vet[i] = vet[i-1];
      }
    }
  }
  if(done==false){
    vet[0] = insert;
  }
  return vet;
}
function pares_impares(insert, vet){
  if(insert%2 == 0){
    for (var i = vet.length; i > 0; i--) {
      vet[i] = vet[i-1];
    }
    vet[0] = insert;
  }
  else {
    vet[vet.length] = insert;
  }
  return vet;
}
//-----------------------------javascript DOM---------------------------------//
function exercicio6_1(){
  var pics = document.getElementsByTagName("img");
  for(var i = 0; i < pics.length; i ++){
    pics[i].src = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/018/062/2fa4810.jpg";
  }
}
function exercicio6_11(){
  var divs = document.getElementsByTagName("div");
  for(var i = 0; i < divs.length; i ++){
    divs[i].classList.add("foto-do-jao");
  }
}
function exercicio6_2() {
  var pics = document.getElementsByTagName("img");
  var text;
  for(var i = 0; i < pics.length; i ++){
    text = pics[i].alt;
    pics[i].tagName = "p"
    pics.innerHTML = text;
  }
}
