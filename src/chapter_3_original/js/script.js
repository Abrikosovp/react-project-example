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

    // Timer

    let deadline = '2020-06-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.now(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function zeroTime(time) {
                if (time <= 9) {
                    return '0-' + time;
                }
                return time;
            }


            hours.textContent = zeroTime(t.hours);
            minutes.textContent = zeroTime(t.minutes);
            seconds.textContent = zeroTime(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }


    setClock('timer', deadline);
});