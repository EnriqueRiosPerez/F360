
import { Template__Nav__HTML, Function_Create_Nav } from "./General_Template_Nav_Menu.js" 
import {ShowItemNav,revisarClase,ShowSubItemNav} from "./General_Interactivity_Module.js"
const d = document;



let sidebarStatus = false;
//variable de menu
let sideMenu = document.getElementById("sideMenu__Container")
//variables para el submenu
let side_nav 
let side_nav_Li_Elements 

//varibles del sub sub menu
let sub_side_nav_Li_Elements

d.addEventListener("DOMContentLoaded",async  (evento) => {

    initApp();
    Function_Create_Nav(Template__Nav__HTML, sideMenu).then(res=>{
        
        side_nav = document.getElementById("Ul_Menu")
        side_nav_Li_Elements = side_nav.querySelectorAll("li.Menu__Item")
        side_nav_Li_Elements.forEach(li=>{
            li.addEventListener("click", ShowItemNav)
        })
    })
});

const initApp = () => {
    addSidebarControlsListeners();
}

const addSidebarControlsListeners = () => {
    const $sidebarBtn = d.querySelector(".sidebar-btn");
    toggleSidebar($sidebarBtn);
}

const toggleSidebar = (sidebarBtn) => {

    sidebarBtn.addEventListener("click", (event) => {
        if (sidebarStatus) {
            sidebarStatus = false;
            sidebarBtn.style.marginLeft = '0';
            d.getElementById('sideMenu').style.marginLeft = '-250px';
            d.querySelector('.body__menu').style.marginLeft = '0';
        }
        else {
            sidebarStatus = true;
            sidebarBtn.style.marginLeft = '250px';
            d.getElementById('sideMenu').style.marginLeft = '0';
            d.querySelector('.body__menu').style.marginLeft = '250px';
        }
    });
}



// let iframe = document.getElementById("Ifram__Chido")


// let paginas = {
//     "PVA":"https://insighttwo.flex.com/t/LMXR/views/Gdls_PvA_PCB4/PvAAllBuildings?iframeSizedToWindow=true&%3Aembed=y&%3AshowAppBanner=false&%3Adisplay_count=no&%3AshowVizHome=no&%3Aorigin=viz_share_link&%3Arefresh=y#1",
//     "Downtime":"https://app.powerbi.com/reportEmbed?reportId=749d4ef5-f0d1-4cec-9497-19dc46b2a691&autoAuth=true&ctid=3f0e69e0-eb38-4eb2-b4ee-52919719d31e",
//     "Calida": "Hola"
// }

// let plantilla = ``;
// let keys = Object.keys(paginas)

// keys.forEach(element=>{
//     plantilla += `<div>
//                     <span>${element}</span>
//                 </div>`

// })
// console.log(plantilla)
// sideMenu.innerHTML = ""
// sideMenu.insertAdjacentHTML("afterbegin", plantilla)

// let divs = sideMenu.querySelectorAll("DIV")
// divs.forEach(element=>{
//     element.addEventListener("click",(e)=>{
//         let nombre = e.target.children[0].textContent
//         let nn = nombre[0]
//         // console.log(nombre)
//         iframe.src= paginas[nombre]
//     })
// })
// console.log(divs)

// function myFunction(e){
//     let actul = e.target
//     console.log(actul)


// }
// window.myFunction = myFunction;