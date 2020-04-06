
window.addEventListener("DOMContentLoaded", function () {
    'use script';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(startIndex) {
        for (let i = startIndex; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide")
        }
    }

    hideTabContent(1);

    function showTabContent(index) {
        if (tabContent[index].classList.contains("hide")) {
            tabContent[index].classList.add("show");
            tabContent[index].classList.remove("hide");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});