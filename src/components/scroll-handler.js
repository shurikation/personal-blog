import {header} from "../index"

export class ScrollHandler {
  constructor() {
    this.distanceFromBorder = 200;
    this.isScrolling = false;
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.throttleScroll.bind(this));
  }

  //to call 60 times in second / to avoid chatty of the scroll event
  throttleScroll() {
    if (this.isScrolling === false) {
      window.requestAnimationFrame(() => {
        header.fixingHandler();
        this.isScrolling = false;
      });
    }
    this.isScrolling = true;
  }

  static isElemScrolledDown($elem) {
    const elementBoundary = $elem.getBoundingClientRect();
    const bottom = elementBoundary.bottom;
    return (bottom <= 200); //px
  }
}