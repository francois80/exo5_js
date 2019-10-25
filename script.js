var nb1;
var nb2;

function fVerifNombre(champ){
  nb1 = parseInt(champ.value);
  if(nb1 == ''){
    alert("Veuillez saisir le 1er champ")
    return false;
  }
  else if (nb1 != '' && isNaN(nb1)) {
    alert('Veuillez saisir un nombre à virgule (1)')
    return false;
  }
  else {
    return true;
  }
}


function fVerifNombre2(champ){
  nb2 = parseInt(champ.value);
  if(nb2 == ''){
    alert("Veuillez saisir le 2eme champ")
    return false;
  }
  else if (nb2 != '' && isNaN(nb2)) {
    alert('Veuillez saisir un nombre à virgule (2)')
    return false;
  }
  else {
    return true;
  }
}

function fVerifForm(f){
  var chiffre1ok = fVerifNombre(f.firstNumber);
  var chiffre2ok = fVerifNombre2(f.secondNumber);

  if(chiffre1ok && chiffre2ok){
    alert(nb1 * nb2);
    return true;
  }
    else
    {
      alert("Veuillez remplir correctement tous les champs");
      return false;
    }
  }
