"use strict";
var challenge18;
(function (challenge18) {
    const regEx = /[^0-9.]/g;
    const porcentage = document.querySelectorAll(".porcentage-number");
    const inputBill = document.querySelector(".input-bill");
    const inputNumberPeople = document.querySelector(".number-people");
    const reset = document.querySelector(".reset");
    let clickedText;
    let addInputBill = 0;
    let addInpuNumberPeople = 0;
    inputBill.addEventListener("input", () => {
        inputBill.value = inputBill.value.replace(regEx, "");
        addInputBill = Number(inputBill.value);
        console.log(addInputBill);
    });
    inputNumberPeople.addEventListener("input", () => {
        inputNumberPeople.value = inputNumberPeople.value.replace(regEx, "");
        addInpuNumberPeople = Number(inputNumberPeople.value);
        console.log(addInpuNumberPeople);
    });
    // funcion para hacer operacion matematica
    const match = (number, person, porcentage) => {
        let division = Number((number / person));
        let porcentageOperation = Number((((number * porcentage) / 100) / person).toFixed(2));
        let result = division + porcentageOperation;
        return [porcentageOperation, result];
    };
    const clicked = () => {
        porcentage.forEach(element => {
            element.addEventListener("click", () => {
                var _a;
                porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                element.classList.toggle("porcentage-number-active");
                clickedText = Number((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.replace("%", "")); // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                console.log(clickedText);
                let [tipAmount, total] = match(addInputBill, addInpuNumberPeople, clickedText); //desestructure el array que devuelve la funcion para hacer un solo llamado
                console.log(tipAmount);
                console.log(total);
            });
        });
    };
    clicked();
})(challenge18 || (challenge18 = {}));
