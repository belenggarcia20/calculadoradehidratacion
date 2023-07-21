let calculadora = document.getElementById("calculadora")

const BOTON = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById("MAN")
const INPUT = document.getElementById("peso");

BOTON.addEventListener("click",()=>{
    
    let peso = INPUT.value;
    if ( peso === ''){
        console.log("error")
    }else if (peso <= 30){
        FLU.innerHTML = holliday(peso) + " cc/h";
    }if (peso > 30){
        FLU.innerHTML=superficieCorporal (peso) 
    }
});
function holliday(peso){
    let rHolliday
    if ( peso <= 10 ){
       rHolliday=(peso * 100)
    }
    else if ( peso <= 20){
        rHolliday=(1000 + (peso - 10)* 50)
    }
    if (peso > 20){
        rHolliday=(1500 + (peso - 20)*20)

    }
    
    return rHolliday
}

function superficieCorporal(peso){
    let superficieCorporal = ((peso *4) +7 ) / (peso + 90)
    return [(superficieCorporal*1500).toFixed(2), (superficieCorporal*2000).toFixed]
}

