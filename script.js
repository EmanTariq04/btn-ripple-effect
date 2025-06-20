const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
    console.log(e.pageX = btnEl.offsetLeft);
})
