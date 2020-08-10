import {ScrollHandler} from "./scroll-handler";
import {Header} from "./components/header/header.component";

const scrollHandler = new ScrollHandler();

export const header = new Header({
  header: '.main-header',
  nav: '.main-header__nav',
  logo: '.main-header__logo',
  menu: '.menu',
  button: '.header__toggler',
  active: 'toggler--active',
  open: 'menu--opened',
  fixed: 'header--fixed',
  unfixed: 'header--unfixed',
  animationTriggerElem: '.intro__title'
});