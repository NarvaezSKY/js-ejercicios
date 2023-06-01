let numero=(prompt("numero"))

if (numero%numero!==0){
    console.log("no es valido")
}

else{
    let i;

    for(i=0;i<=numero;i++){

        console.log(i)

        if(i%5==0 && i%3==0){
        console.log(`${i} ping pong`)
        continue
        }
        else if (i%3==0){
        console.log(`${i} ping`)
        continue;
        }

        else if (i%5==0){
        console.log(`${i} pong`)
        continue
        }
    }


}




