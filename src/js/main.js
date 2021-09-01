"use strict";

import sliders from "./components/sliders";
import accordion from "./components/accordion";

document.addEventListener("DOMContentLoaded", () => {
    try {
        sliders();
    } catch (err) {}

    try {
        accordion();
    } catch (err) {}
});
