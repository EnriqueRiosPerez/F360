
const d = document;

let sidebarStatus = false;

d.addEventListener("DOMContentLoaded", (evento) => {
    initApp();
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
