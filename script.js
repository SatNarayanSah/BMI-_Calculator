

const submit = document.querySelector("#btn1");
const result = document.querySelector(".value")
const prime = document.querySelector(".prime");
const primeResult = document.querySelector(".primevalue");
const msg = document.querySelector(".category");
let primeValue = 0;
let value = 0;




function bmiCalculator() {
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    let height_m = height * 0.3048;

    if (isNaN(height_m) || isNaN(weight) || height_m === 0 || weight === 0) {
        alert("Invalid input");
        return
    }
    else{
        value = weight / (height_m * height_m);
        primeValue = value / 25;
        primeResult.innerHTML = primeValue.toFixed(2)
        result.innerHTML = value.toFixed(2);
        console.log(value)
    }

    if (value < 16){
        msg.innerHTML = "Severe Thinness"
        msg.style.color = "red"
        return
    }
    else if(value>16 && value < 17){
        msg.innerHTML = "Moderate Thinness"
        msg.style.color = "#D38989"
    }
    else if(value > 17 && value < 18.5){
        msg.innerHTML = "Mid Thinness"
        msg.style.color = "Yellow"
    }
    else if(value > 18.5 && value < 25){
        msg.innerHTML = "Normal"
        msg.style.color = "Green"
    }
    else if(value > 25 && value < 30){
        msg.innerHTML = "Over Weight"
        msg.style.color = "Yellow"
    }
    else if(value > 30 && value < 35){
        msg.innerHTML = "Obese Class I"
        msg.style.color = "#D38989"
    }
    else if(value > 35 && value < 40 ){
        msg.innerHTML = "Obese Class II"
        msg.style.color = "#BD2021"
    }
    else if(value > 40 ){
        msg.innerHTML = "Obese Class III"
        msg.style.color = "Red"
    }
    else{
        msg.innerHTML = ""
    }
    
}



