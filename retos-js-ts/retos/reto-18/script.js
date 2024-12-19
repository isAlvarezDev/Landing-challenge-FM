"use strict";
var challenge18;
(function (challenge18) {
    const regEx = /[^0-9.]/g;
    const porcentage = document.querySelectorAll(".porcentage-number");
    let inputBill = document.querySelector(".input-bill");
    let inputNumberPeople = document.querySelector(".number-people");
    let clickedText;
    let addInputBill;
    const applyNumberFilter = (param) => {
        param.addEventListener("input", () => {
            param.value = param.value.replace(regEx, "");
        });
    };
    applyNumberFilter(inputBill);
    applyNumberFilter(inputNumberPeople);
    const clicked = () => {
        porcentage.forEach(element => {
            element.addEventListener("click", () => {
                var _a;
                porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                element.classList.toggle("porcentage-number-active");
                clickedText = Number((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.replace("%", "")); // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                console.log(clickedText);
                // voy a hacer funcionar el regex aqui
            });
        });
    };
    clicked();
})(challenge18 || (challenge18 = {}));
