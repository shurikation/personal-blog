import {ScrollHandler} from "../../scroll-handler";

export class Header {
  constructor(props) {
    this.$header = document.querySelector(props.header);
    this.$nav = document.querySelector(props.nav);
    this.$links = document.querySelectorAll(props.links);
    this.$logo = document.querySelector(props.logo);
    this.$menu = document.querySelector(props.menu);
    this.$button = document.querySelector(props.button);
    this.$animationTriggerElem = document.querySelector(props.animationTriggerElem);
    this.active = props.active;
    this.open = props.open;
    this.fixed = props.fixed;
    this.unfixed = props.unfixed;
    this.white = props.white;
    this.black = props.black;
    this.menuHandler();
  }

  menuHandler() {
    this.$button.addEventListener('click', () => {
      this.buttonAndLogoColorToggler();
      this.headerColorToggler(this.white);
      this.navbarDisplayToggler();
    });
  }

  styleHandler() {
    (ScrollHandler.isElemScrolledDown(this.$animationTriggerElem))
      ? this.headerFixed()
      : this.headerUnfixed()
    }


  buttonAndLogoColorToggler() {
    if (this.isNavbarOpened()) {
      this.headerInnerElemsColorToggler(this.black);
    } else {
      this.$button.style.backgroundColor = "";
      this.$logo.style.color = this.black;
    }
  }

  headerFixed() {
    this.$header.classList.add(this.fixed);
    this.$header.classList.remove(this.unfixed);

    this.headerColorToggler(this.white);

    if (!this.isNavbarOpened()) {
      this.headerInnerElemsColorToggler(this.black);
    }
  }

  headerUnfixed() {
    this.$header.classList.remove(this.fixed);

    if(!this.isNavbarOpened()) {
      this.headerColorToggler("transparent");
      this.headerInnerElemsColorToggler(this.white);
      this.$header.classList.add(this.unfixed);
    }
  }

  navbarDisplayToggler() {
    this.$button.classList.toggle(this.active);
    this.$menu.classList.toggle(this.open);
  }


  headerColorToggler(color) {
    this.$header.style.backgroundColor = color;
    this.$nav.style.backgroundColor = color;

    if(this.isHeaderUnfixed()) {
      this.$header.classList.remove(this.unfixed);
    }
  }

  headerInnerElemsColorToggler(color) {
    this.$button.style.backgroundColor = color;
    this.$logo.style.color = color;

    if(document.documentElement.clientWidth > 768) {
      this.$links.forEach(link => link.style.color = color);
    }
  }

  isNavbarOpened() {
    return this.$button.classList.contains(this.active);
  }

  isHeaderUnfixed() {
    return this.$header.classList.contains(this.unfixed);
  }
}