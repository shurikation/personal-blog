import {ScrollHandler} from "./services/scroll-handler";

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

    this.elemIsScrolled = false;
    this.headerIsFixed = false;
    this.screenWidth = 768;//px

    this.menuHandler();
  }

  menuHandler() {
    this.$button.addEventListener('click', () => {
      this.navbarDisplayToggler();
      this.innerElemsClickHandler();
      this.headerColorToggler(this.white);
    });
  }

  fixingHandler() {
    ScrollHandler.isElemScrolledDown(this.$animationTriggerElem)
        ? this.elemIsScrolled = true
        : this.elemIsScrolled = false;

    if (this.elemIsScrolled && !this.headerIsFixed) this.fixHeader();
    if (!this.elemIsScrolled && this.headerIsFixed) this.unfixHeader();
  }

  fixHeader() {
    this.headerIsFixed = true;

    this.$header.classList.add(this.fixed);
    this.$header.classList.remove(this.unfixed);

    this.$button.style.backgroundColor = this.black;
    this.$logo.style.color = this.black;

    if(this.isNavbarOpen()) {
      this.$button.style.backgroundColor = "transparent";
    }

    this.headerColorToggler(this.white);
    this.linksColorToggler();
  }

  unfixHeader() {
    this.headerIsFixed = false;

    this.$header.classList.remove(this.fixed);

    if (!this.isNavbarOpen()) {
      this.headerColorToggler("transparent");
      this.$header.classList.add(this.unfixed);
      this.$button.style.backgroundColor = null;
      this.$logo.style.color = null;
    }

    this.linksColorToggler();
  }

  navbarDisplayToggler() {
    this.$button.classList.toggle(this.active);
    this.$menu.classList.toggle(this.open);
  }

  headerColorToggler(color) {
    this.$header.style.backgroundColor = color;
    this.$nav.style.backgroundColor = color;

    if (this.isHeaderUnfix()) {
      this.$header.classList.remove(this.unfixed);
    }
  }

  innerElemsClickHandler() {
    if (this.isNavbarOpen()) {
      this.$logo.style.color = this.black;
      this.$button.style.backgroundColor = "transparent";
    }

    if (!this.isNavbarOpen()) {
      this.$button.style.backgroundColor = this.black;
    }
  }

  linksColorToggler() {
    if (this.headerIsFixed && document.documentElement.clientWidth > this.screenWidth) {
      this.$links.forEach(link => link.style.color = this.black);
    }

    if (!this.headerIsFixed) {
      this.$links.forEach(link => link.style.color = null);
    }
  }

  isNavbarOpen() {
    return this.$button.classList.contains(this.active);
  }

  isHeaderUnfix() {
    return this.$header.classList.contains(this.unfixed);
  }
}