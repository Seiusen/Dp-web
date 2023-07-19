const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider__wrapper').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
    rollSlider();

}

/*window.addEventListener('resize', init);

init();*/

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length ) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.arrow__left').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.arrow__right').addEventListener('click', function(){
    count++;
    if (count >= images.length ) {
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}

function rollSliderAuto(){
    count++;
    if (count >= images.length ) {
        count = 0;
    }
    rollSlider();
}

document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.slider').addEventListener('touchmove', handleTouchMove, false);

const logBlock = document.querySelector('.slider__wrapper');

let x1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    console.log(x1);
}

function handleTouchMove(event) {
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    console.log(x2);

    let xDiff = x2 - x1;

    if(xDiff > 0){
        console.log('right');
        
        
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();

    }
    else {
        console.log('left');

        count++;
        if (count >= images.length ) {
        count = 0;
        }
        rollSlider();

    }    
    x1 = null;
}

/*const blockSize = document.querySelector('.intro');
let height;

function heightRes(){
    console.log('resize');
    
    /*console.log(height + ' test');*/

    /*height = document.querySelector('.intro').offsetHeight;
    width = document.querySelector('.intro').offsetWidth;

    /*console.log(height + ' test1');*/
    
   /*if(width < 1920 && width != 1280) {
        height = 540;
        blockSize.style.height = height + 'px';
        
    }

    else if (width = 1920 && width != 1280) {
        height = 840;
        blockSize.style.height = height + 'px';
    }

    else if(width = 1024){
        height = 600;
        blockSize.style.height = height + 'px';
    }

    console.log(height + ' test2');
    
}

window.addEventListener('resize', heightRes);

heightRes();*/

const blockSize = document.querySelector('.intro');
let height1;
let height2;
let heightall;
function heightRes(){
    height1 = document.querySelector('.header').offsetHeight;
    height2 = document.querySelector('.slider-line img').offsetHeight;
    heightall = height1 + height2;
    blockSize.style.height = heightall + 'px';
}


window.addEventListener('resize', init);

init();

setInterval(rollSliderAuto, 10000);

window.addEventListener('resize', heightRes);
heightRes();


