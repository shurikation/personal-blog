import {header} from "../../index"

export class ScrollHandler {
  constructor() {
    this.distanceFromBorder = 200;//px
    this.isScrolling = false;
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.throttleScroll.bind(this));
  }

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