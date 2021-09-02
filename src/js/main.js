"use strict";

import sliders from "./components/sliders";
import accordion from "./components/accordion";
import projectsFilter from "./components/projects-filter";

document.addEventListener("DOMContentLoaded", () => {
    try {
        accordion();
    } catch (err) {}

    try {
        sliders();
    } catch (err) {}

    try {
        projectsFilter();
    } catch (err) {}



    
});
