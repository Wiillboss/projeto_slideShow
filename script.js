let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width =
    `${sliderWidth * totalSliders}px`;
document.querySelector('.slider--controls').style.width =
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }
    updateMargin();

}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSliders - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

window.onload = function () {

    let totalSliders = document.querySelectorAll('.slider--item').length;
    let currentSlide = 0;

    let slider = document.querySelector('.slider');
    let sliderWidth = slider.clientWidth;

    document.querySelector('.slider--width').style.width =
        `${sliderWidth * totalSliders}px`;

    document.querySelector('.slider--controls').style.width =
        `${sliderWidth}px`;

    document.querySelector('.slider--controls').style.height =
        `${slider.clientHeight}px`;

    function updateMargin() {
        let newMargin = (currentSlide * sliderWidth);
        document.querySelector('.slider--width').style.marginLeft =
            `-${newMargin}px`;
    }

    function goPrev() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSliders - 1;
        }
        updateMargin();
    }

    function goNext() {
        currentSlide++;
        if (currentSlide > (totalSliders - 1)) {
            currentSlide = 0;
        }
        updateMargin();
    }

    let timer = setInterval(goNext, 5000);

    window.addEventListener('resize', () => {
        sliderWidth = slider.clientWidth;

        document.querySelector('.slider--width').style.width =
            `${sliderWidth * totalSliders}px`;

        document.querySelector('.slider--controls').style.width =
            `${sliderWidth}px`;

        document.querySelector('.slider--controls').style.height =
            `${slider.clientHeight}px`;

        updateMargin();
    });

};

setInterval(goNext, 5000);