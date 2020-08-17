

const validator = {
  isValid: function (numero) {
    //let reverso = numero.toString();
    let reverso = numero.split("").reverse().join("");

    let longitud = reverso.length;
    
    let cifrado = null;
    let cifrado_reverso = null;
    let suma = 0;
     
    for( let i= 1; i <longitud; i +=2){
      cifrado = parseInt(reverso.charAt(i))* 2;
    

      if (cifrado > 9){
        cifrado_reverso = cifrado.toString();
        cifrado = parseInt(cifrado_reverso.charAt(0)) +
        parseInt(cifrado_reverso.charAt(1));
      }
      suma += cifrado;
    }
    for (let x = 0 ; x < longitud; x += 2 ) {
      suma += parseInt(reverso.charAt(x));
    
    }
    if ((suma % 10) == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (numero) {
    let largonumero = numero.length;
    let resultado = "";
    if (largonumero > 4) {
      for (let i = 0; i < numero.length; i++) {
        if (i >= numero.length - 4) {
          resultado += numero[i];
        }
        else {
          resultado += "#";
        }
      }
    }
    else {
      resultado = numero
    }
    return resultado;
  }
}

export default validator;






    // let validador = new Array();
    // for (let i = 0; i < tarjeta.length; i++) {
    //   validador[validador.length] = tarjeta.charCodeAt(i) - 48;
    //   validador.reverse()
    // };
    //   let sum = 0;
    //   for (var i = 0; i < validador.length; i++) {
    //     let tmp = validador[i];
    //     if ((i % 2) != 0) {
    //       tmp *= 2;
    //       if (tmp > 9) {
    //         tmp -= 9;}}
    //     sum += tmp;
    //    }
    //   return ((sum % 10) == 0); 






