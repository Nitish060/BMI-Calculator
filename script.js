document.getElementById('submit').addEventListener('click', getBMI)

function getBMI(){
    let cm = parseInt(document.getElementById('cm').value)
    let kg = parseInt(document.getElementById('kg').value)
    let bmi 
    let newCm = parseFloat(cm/100)
    bmi = kg/(newCm*newCm)
    bmi = bmi.toFixed(1)
    document.getElementById('result').innerHTML = "Your BMI is "+ bmi + " 😊"
}