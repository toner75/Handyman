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

        tns({
            container: '.gallery-slider__wrapper',
            items: 3,
            autoplay: false,
            nav: false,
            gutter: 30,
            speed: 300,
            
            controlsContainer: '.gallery-slider__nav',
            prevButton: '.gallery-slider__prev',
            nextButton: '.gallery-slider__next',
        });

        tns({
            container: '.project-slider__wrapper',
            items: 1,
            autoplay: false,
            nav: false,
            speed: 300,
            
            controlsContainer: '.project-slider__nav',
            prevButton: '.project-slider__prev',
            nextButton: '.project-slider__next',
        });
    } catch(err){}
    
});
