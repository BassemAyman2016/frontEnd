const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

const displayText = document.getElementById("text");


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    displayText.style.zIndex = 2;
    displayText.style.opacity = 1;


});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    displayText.style.zIndex = '-10';
    displayText.style.opacity = 0;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    displayText.style.zIndex = '-10';
    displayText.style.opacity = 0;
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;

    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk;
    displayText.style.zIndex = '-10';
});

displayText.style.zIndex = '-10';
displayText.style.opacity = 0;