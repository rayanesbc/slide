import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
// console.log(slide);

// slide.changeSlide(3);
// slide.activePrevSlide();

slide.addArrow(".prev", ".next");
console.log(slide);
