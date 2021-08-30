"use strict";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";


document.addEventListener('DOMContentLoaded', () => {
    console.log('js start');

    try {
        tns({
            container: '#slider-clients__wrapper',
            items: 1,
            autoplay: true,
            nav: false,
            autoplayButtonOutput: false,
            speed: 300,
            autoplayTimeout: 3500,
            controlsContainer: '#slider-clients__nav',
            prevButton: '#slider-clients__prev',
            nextButton: '#slider-clients__next',
        });

        tns({
            container: '#slider-gallery__wrapper',
            items: 3,
            autoplay: false,
            nav: false,
            gutter: 30,
            speed: 300,
            
            controlsContainer: '#slider-gallery__nav',
            prevButton: '#slider-gallery__prev',
            nextButton: '#slider-gallery__next',
        });

        tns({
            container: '#slider-project__wrapper',
            items: 1,
            autoplay: false,
            nav: false,
            speed: 300,
            
            controlsContainer: '#slider-project__nav',
            prevButton: '#slider-project__prev',
            nextButton: '#slider-project__next',
        });
    } catch(err){}
    
});
