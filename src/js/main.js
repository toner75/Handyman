"use strict";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";


document.addEventListener('DOMContentLoaded', () => {
    console.log('js start');

    try {
        
        tns({
            container: '.slider__wrapper',
            items: 1,
            autoplay: true,
            nav: false,
            autoplayButtonOutput: false,
            speed: 300,
            autoplayTimeout: 3500,
            controlsContainer: '.slider__nav',
            prevButton: '.slider__prev',
            nextButton: '.slider__next',
        });
    } catch(err){}
    
});
