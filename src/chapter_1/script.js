'use strict';

let doc = document;

let menu = doc.querySelector(".menu"),
    title = doc.querySelector("#title"),
    adv = doc.querySelector(".adv"),
    prom = doc.querySelector(".prompt"),
    itemNew = doc.createElement("li");

let children = menu.children;
children[1].before(children[2]);

itemNew.classList.add("menu-item");
itemNew.textContent = "Пятый пункт";
menu.append(itemNew);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let apple = prompt("отношение к технике apple ", '');
prom.textContent = apple;