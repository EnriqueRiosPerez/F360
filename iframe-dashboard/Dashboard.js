let iframe = document.getElementById("Ifram__Chido")


let paginas = {
    "PVA":"https://insighttwo.flex.com/t/LMXR/views/Gdls_PvA_PCB4/PvAAllBuildings?iframeSizedToWindow=true&%3Aembed=y&%3AshowAppBanner=false&%3Adisplay_count=no&%3AshowVizHome=no&%3Aorigin=viz_share_link&%3Arefresh=y#1",
    "Downtime":"https://app.powerbi.com/reportEmbed?reportId=749d4ef5-f0d1-4cec-9497-19dc46b2a691&autoAuth=true&ctid=3f0e69e0-eb38-4eb2-b4ee-52919719d31e",
    "Calida": "Hola"
}

let plantilla = ``;
let keys = Object.keys(paginas)

keys.forEach(element=>{
    plantilla += `<div>
                    <span>${element}</span>
                </div>`

})
console.log(plantilla)
sideMenu.innerHTML = ""
sideMenu.insertAdjacentHTML("afterbegin", plantilla)

let divs = sideMenu.querySelectorAll("DIV")
divs.forEach(element=>{
    element.addEventListener("click",(e)=>{
        let nombre = e.target.children[0].textContent
        let nn = nombre[0]
        // console.log(nombre)
        iframe.src= paginas[nombre]
    })
})
console.log(divs)

function myFunction(e){
    let actul = e.target
    console.log(actul)


}
window.myFunction = myFunction;