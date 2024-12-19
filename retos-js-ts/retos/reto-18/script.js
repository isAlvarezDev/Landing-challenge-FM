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
    // este es un boton de prueba
    reset.addEventListener("click", () => {
        console.log("Este es el valor del dinero: ", addInputBill);
        console.log("Esta es la cantidad de personas: ", addInpuNumberPeople);
    });
    const clicked = () => {
        porcentage.forEach(element => {
            element.addEventListener("click", () => {
                var _a;
                porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                element.classList.toggle("porcentage-number-active");
                clickedText = Number((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.replace("%", "")); // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                console.log(clickedText);
            });
        });
    };
    clicked();
})(challenge18 || (challenge18 = {}));
let number = 142.55;
let person = 5;
let porcentag1 = 15;
let result;
console.log(number);
console.log(person);
const match = () => {
    let division = Number((number / person));
    console.log("valor a pagar sin interes: ", division);
    let porcentageOperation = Number((((number * porcentag1) / 100) / person).toFixed(2));
    console.log("porcentaje del valor total dividido entre las personas a pagar: ", porcentageOperation);
    result = division + porcentageOperation;
    console.log(result);
    return [porcentageOperation, result];
};
console.log(match());
let resultado1 = match()[0];
let resultado2 = match()[1];
resultado1;
resultado2;
