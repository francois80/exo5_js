function fAffiche(){
  var nb1 = document.getElementById("firstNumber").value;
  var nb2 = document.getElementById("secondNumber").value;
  if(nb1 == "" || nb2 == ""){
    alert("Veuillez saisir un nombre à virgule")
  }
  else{
    var result = Math.trunc(parseFloat(nb1)) * Math.trunc(parseFloat(nb2));
    alert(result);
  }
 }
