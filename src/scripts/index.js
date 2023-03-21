import "regenerator-runtime"; /* for async await transpile */
import "../scripts/component/app-bar.js";
import "../scripts/component/footer-bar.js";
import "../scripts/component/HeroElement.js";
import "../styles/main.css";
import main from "./views/pages/main.js";

document.addEventListener("DOMContentLoaded", main);
