"use strict";
const contInfoGrid = document.querySelector(".container-info-grid");
fetch("./data.json")
    .then(response => response.json())
    .then((data) => {
    data.forEach(element => {
        let title = element.title;
        let classes = element.class;
        let dailyCurrent = element.timeframes.daily.current.toString();
        let dailyprevious = element.timeframes.daily.previous.toString();
        contInfoGrid.innerHTML += `
            <div class="container-card-outside ${classes}">
                <div class="container-card-inside">
                    <div class="header-card">
                    <p class="title">${title}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </div>
                    <p class="hours">${dailyCurrent}hrs</p>
                    <p class="last">Last day - ${dailyprevious}hrs</p>
                </div>
            </div>
            `;
    });
    const daily = document.querySelector(".daily");
    const hours = document.querySelectorAll(".hours");
    const last = document.querySelector(".last");
})
    .catch((error) => {
    console.error("tenemos un error", error);
});
