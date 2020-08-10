import {ScrollHandler} from "../../scroll-handler";

export class Header {
  constructor(props) {
    this.$header = document.querySelector(props.header);
    this.$headerWrap = document.querySelector(props.headerWrap);
    this.$logo = document.querySelector(props.logo);
    this.$navbar = document.querySelector(props.navbar);
    this.$menuButton = document.querySelector(props.menuButton);
    this.$animationTriggerElem = document.querySelector(props.animationTriggerElem);
    this.active = props.active;
    this.open = props.open;
    this.fixed = props.fixed;
    this.unfixed = props.unfixed;
    this.menuHandler();
  }

  menuHandler() {
    this.$menuButton.addEventListener('click', () => {
      this.buttonAndLogoColorToggler();
      this.headerColorToggler("white");
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
      this.menuButtonAndLogoColorToggler("black");
    } else {
      this.$menuButton.style.backgroundColor = "";
      this.$logo.style.color = "black";
    }
  }

  headerFixed() {
    this.$header.classList.add(this.fixed);
    this.$header.classList.remove(this.unfixed);

    this.headerColorToggler("white");

    if (!this.isNavbarOpened()) {
      this.menuButtonAndLogoColorToggler("black");
    }
  }

  headerUnfixed() {
    this.$header.classList.remove(this.fixed);

    if(!this.isNavbarOpened()) {
      this.headerColorToggler("transparent");
      this.menuButtonAndLogoColorToggler("white");
      this.$header.classList.add(this.unfixed);
    }
  }

  navbarDisplayToggler() {
    this.$menuButton.classList.toggle(this.active);
    this.$navbar.classList.toggle(this.open);
  }

  menuButtonAndLogoColorToggler(color) {
    this.$menuButton.style.backgroundColor = color;
    this.$logo.style.color = color;
  }

  headerColorToggler(color) {
    this.$header.style.backgroundColor = color;
    this.$headerWrap.style.backgroundColor = color;

    if(this.isHeaderUnfixed()) {
      this.$header.classList.remove(this.unfixed);
    }
  }

  isNavbarOpened() {
    return this.$menuButton.classList.contains(this.active);
  }

  isHeaderUnfixed() {
    return this.$header.classList.contains(this.unfixed);
  }
}