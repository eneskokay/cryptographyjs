

const alphabet = "7pQnDS9C yPNA*/3t&U1ofFjöM½Ts6+cÇLvĞ0EIKibğw?Ok^45üÜ%l$HarŞm{=)gdh#GJ<£u(R>[ZV]Y}qİş.8Bz2ıÖçWe,!";

let plaintext = "";

function start() {
function Y(n) { 
let d = plaintext[n];
let result = {};
result.undefinedboolean = true;
result.value = d;
for (i in alphabet) {
  if (d == alphabet[i]) {
    result.order = i;
    result.value = alphabet[i];
    result.undefinedboolean = false;
}
}
return result;
}

let al  = alphabet.length;
let pl  = plaintext.length;


function X(n) { 
  let t = plaintext.length;
  if (n == 1) {
    n += t/2;
  }
  n = new BigNumber(n);  
  t = new BigNumber(t);

  let result = n.multipliedBy(t);
  result = result.dividedBy(4);
  // result = Math.round(result);
  result = BigNumber(result);
  return result;
  }



  let result = "";
  let son = "";

  let alpha2 = alphabet+alphabet;

  for (d = 0; d < pl; d++) {
  let ydef = Y(d);
  let xdef = X(d);
  let yorder = ydef.order;
  Number(yorder);
  let Z = xdef.plus(yorder);

  let c = 0;
  let k = 0;

  if (ydef.undefinedboolean == true) {

    result += ydef.value;

  }

  else {
      for (k = 0; k <= xdef; k++){
        c += 1;
        if (c == al) {
            c = 0;
        }
      }
    }

for (let i = c; i <= alpha2.length; i++) {
  if (alpha2[i] == plaintext[d]) {
    let sonuc = i - c;
    result += alphabet[sonuc];
    break
  }
}

  }
  console.log(result);
  return result;

}