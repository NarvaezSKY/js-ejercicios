const dinero = 10000;
const facTotal = 10000;
const tarjeta = true;
const tarCredito = true;
const cheque= true


if (dinero>=facTotal){
    console.log("si te alcanza")
}

else if (dinero>=tarjeta){
    console.log("paga con tarjeta")
}

else if (dinero>=tarCredito){
    console.log("tarjeta de credito")
}

else if (cheque){
    console.log("puedo pagar por el cheque jajs")
}

else{
    console.log("que")
}
