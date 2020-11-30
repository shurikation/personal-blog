import {header} from "../../index"

export class ScrollHandler {
  constructor() {
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

  static isDistanceScrolled(scrolledDistance) {
    return window.pageYOffset >= scrolledDistance;//px
  }
}