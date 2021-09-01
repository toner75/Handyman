"use strict";

import sliders from "./components/sliders";
import accordion from "./components/accordion";
import serviceTabs from "./components/service-tabs";

document.addEventListener("DOMContentLoaded", () => {
    try {
        accordion();
    } catch (err) {}

    try {
        serviceTabs();
    } catch (err) {}

    try {
        sliders();
    } catch (err) {}



    
});
