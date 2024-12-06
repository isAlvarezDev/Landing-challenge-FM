interface Data {
    url: string,
    imgUrl: string,
    name: string,
    description: string
}

const main = document.querySelector(".main") as HTMLDivElement

fetch("data.json")
.then((response) => response.json())
.then((data: Data[])=>{
    data.forEach((item) => {
        let url = item.url
        let imgUrl = item.imgUrl
        let name = item.name
        let description = item.description
        main.innerHTML += `
        <div class="container-challenge">
                <a href="${url}" class="a-challenge">
                    <div class="img-challenge">
                        <img class="pick-challenge" src="${imgUrl}" alt="">
                    </div>
                    <div class="text-container">
                        <h4 class="title-challenge">${name}</h4>
                        <p class="p-challenge">${description}</p>
                    </div>
                </a>
            </div>
        `
    });
})
.catch(error =>{
    console.error("se producjo un error", error)
})