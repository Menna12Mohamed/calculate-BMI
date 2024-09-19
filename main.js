
var heightInput = document.querySelector(".height");
var weightInput = document.querySelector(".weight");
var calculateButton = document.querySelector(".calculate");
var resultDiv = document.querySelector(".result");
var BMI, height, weight;

calculateButton.addEventListener("click", function () {
    height = heightInput.value;
    weight = weightInput.value;
    BMI = height / ((weight / 100) ** 2);
    resultDiv.innerText = BMI;

    if (!validateWeight() && !validateHeight()) {
        resultDiv.innerHTML = `please enter valid number`;
        return;
    }

    var category = "";

    if (BMI < 18.5) {
        category = "Underweight";
    } else if (BMI > 18.5 && BMI < 24.9) {
        category = "Healthy Weight";
    } else if (BMI > 25.0 && BMI < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultDiv.innerHTML = "Your BMI is " + BMI.toFixed(2) + " (" + category + ")";
});







function validateWeight() {
    var regexWeight = /^[0-9]{1,3}$/

    if (regexWeight.test(weightInput.value)) {
        if (weightInput.classList.contains('is-invalid')) {
            weightInput.classList.replace('is-invalid', 'is-valid')
        }
        return true;
    }
    else {
        weightInput.classList.add('is-invalid')
        return false
    }
}
function validateHeight() {
    var regexHeight= /^[0-9]{1,3}$/

    if (regexHeight.test(heightInput.value)) {
        if (heightInput.classList.contains('is-invalid')) {
            heightInput.classList.replace('is-invalid', 'is-valid')
        }
        return true;
    }
    else {
        heightInput.classList.add('is-invalid')
        return false
    }
}

















