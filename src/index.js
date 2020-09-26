import {Preloader} from "./components/preloader.component";
import {ScrollHandler} from "./components/services/scroll-handler";
import {Header} from "./components/header.component";
import {CharTyping} from "./components/services/char-typing";

const preloader = new Preloader();
const scrollHandler = new ScrollHandler();

export const header = new Header({
  header: '.main-header',
  nav: '.main-header__nav',
  logo: '.main-header__logo',
  menu: '.menu',
  links: '.menu__link',
  button: '.header__toggler',
  active: 'toggler--active',
  open: 'menu--opened',
  fixed: 'header--fixed',
  unfixed: 'header--unfixed',
  black: "#1e1e1e",
  white: "#fff",
  animationTriggerElem: '.about__title'
});


if (document.querySelector('.main-page')) {
  const autoTyper = new CharTyping({
    ruText: "фронтенд-разработчик",
    engText: "front-end developer",
    elem: ".intro__subtitle--autoText"
  });
}





