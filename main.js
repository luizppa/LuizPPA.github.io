function exercicio1_1(a){
  var list = "#";
  for (var i = 0; i < a; i++) {
    console.log(list);
    for (var j = 0; j < i; i++) {
      list = list + "#";
    }
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
function exercicio2_1(a, b){
  if(a>b){
    return a;
  }
  else if(b>a){
    return b;
  }
  else {
    return undefyned;
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
    if(string[i]!="a" && string[i]!="e" && string[i]!="i" && string[i]!="o" && string[i]!="u"){
      result = result + string[i];
    }
  }
  return result;
}
