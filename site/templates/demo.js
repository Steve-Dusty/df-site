'use strict';

const tabElements = document.querySelectorAll(".tab");
const hiddenElements = document.querySelectorAll(".help");

const clickHandler = event => {
    for (const item of hiddenElements) {
        item.classList.remove("active");
    }

    hiddenElements[event.target.dataset.index].classList.add("active");
}

tabElements.forEach(item => item.addEventListener("click", clickHandler));


