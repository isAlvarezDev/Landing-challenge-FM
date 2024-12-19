namespace challenge18 {
    
    const regEx = /[^0-9.]/g;
    
    const porcentage = document.querySelectorAll(".porcentage-number") as NodeListOf<HTMLParagraphElement>
    const inputBill = document.querySelector(".input-bill") as HTMLInputElement
    const inputNumberPeople = document.querySelector(".number-people") as HTMLInputElement
    const reset = document.querySelector(".reset") as HTMLParagraphElement
    
    let clickedText: number
    
    let addInputBill: number = 0
    let addInpuNumberPeople: number = 0

    inputBill.addEventListener("input", ()=>{
        inputBill.value = inputBill.value.replace(regEx, "")
        addInputBill = Number(inputBill.value)
        console.log(addInputBill)
    })

    inputNumberPeople.addEventListener("input", ()=>{
        inputNumberPeople.value = inputNumberPeople.value.replace(regEx, "")
        addInpuNumberPeople = Number(inputNumberPeople.value)
        console.log(addInpuNumberPeople)
    })


    // este es un boton de prueba
    reset.addEventListener("click", ()=>{
        console.log("Este es el valor del dinero: ",addInputBill)
        console.log("Esta es la cantidad de personas: ", addInpuNumberPeople)
    })


    const clicked = () =>{

        porcentage.forEach(element => {
            element.addEventListener("click", ()=> {
                porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                element.classList.toggle("porcentage-number-active")
                clickedText = Number(element.textContent?.replace("%", "")) // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                console.log(clickedText)

            })
        });
        
    }


    clicked()
}
