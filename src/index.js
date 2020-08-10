import {ScrollHandler} from "./scroll-handler";
import {Header} from "./components/header/header.component";

const scrollHandler = new ScrollHandler();

export const header = new Header({
  header: '.header',
  headerWrap: '.header__wrapper',
  logo: '.header__logo',
  navbar: '.navbar',
  menuButton: '.header__toggler',
  active: 'toggler--active',
  open: 'navbar--opened',
  animationTriggerElem: '.intro__title',
  fixed: 'header--fixed',
  unfixed: 'header--unfixed'
});