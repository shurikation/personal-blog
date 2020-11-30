import {ScrollHandler} from "./services/scroll-handler";

export class Header {
  constructor(props) {
    this.$header = document.querySelector(props.header);
    this.$nav = document.querySelector(props.nav);
    this.$links = document.querySelectorAll(props.links);
    this.$logo = document.querySelector(props.logo);
    this.$menu = document.querySelector(props.menu);
    this.$button = document.querySelector(props.button);

    this.active = props.active;
    this.open = props.open;
    this.fixed = props.fixed;
    this.white = props.white;
    this.black = props.black;

    this.distanceScrolled = false;
    this.headerFixed = false;
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
    ScrollHandler.isDistanceScrolled(400)//px
        ? this.distanceScrolled = true
        : this.distanceScrolled = false;

    if (this.distanceScrolled && !this.headerFixed) this.fixHeader();
    if (!this.distanceScrolled && this.headerFixed) this.unfixHeader();
  }

  fixHeader() {
    this.headerFixed = true;

    this.$header.classList.add(this.fixed);

    this.$button.style.backgroundColor = this.black;
    this.$logo.style.color = this.black;

    if(this.isNavbarOpen()) {
      this.$button.style.backgroundColor = "transparent";
    }

    this.headerColorToggler(this.white);
    this.linksColorToggler();
  }

  unfixHeader() {
    this.headerFixed = false;

    this.$header.classList.remove(this.fixed);

    if (!this.isNavbarOpen()) {
      this.headerColorToggler("transparent");
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
    if (this.headerFixed && document.documentElement.clientWidth > this.screenWidth) {
      this.$links.forEach(link => link.style.color = this.black);
    }

    if (!this.headerFixed) {
      this.$links.forEach(link => link.style.color = null);
    }
  }

  isNavbarOpen() {
    return this.$button.classList.contains(this.active);
  }

}