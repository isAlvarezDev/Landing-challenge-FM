namespace challenge18 {
    
    const regEx = /[^0-9.]/g;
    
    const porcentage = document.querySelectorAll(".porcentage-number") as NodeListOf<HTMLParagraphElement>
    let inputBill = document.querySelector(".input-bill") as HTMLInputElement
    let inputNumberPeople = document.querySelector(".number-people") as HTMLInputElement
    
    let clickedText: number
    let addInputBill: number 
    
    const applyNumberFilter = (param: HTMLInputElement): void =>{
        param.addEventListener("input", ()=>{
            param.value = param.value.replace(regEx, "")
        })
    }

    applyNumberFilter(inputBill)
    applyNumberFilter(inputNumberPeople)


    const clicked = () =>{

        porcentage.forEach(element => {
            element.addEventListener("click", ()=> {
                porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                element.classList.toggle("porcentage-number-active")
                clickedText = Number(element.textContent?.replace("%", "")) // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                console.log(clickedText)

                // voy a hacer funcionar el regex aqui

            })
        });
    }


    clicked()
}
