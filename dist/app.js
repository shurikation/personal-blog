/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "header", function() { return /* binding */ header; });

// CONCATENATED MODULE: ./src/components/preloader/preloader.component.js
class Preloader {
  constructor() {
   this.init();
  }

  init() {
    window.onload = () => {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    };
  }
}
// CONCATENATED MODULE: ./src/components/scroll-handler.js


class scroll_handler_ScrollHandler {
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
// CONCATENATED MODULE: ./src/components/header/header.component.js


class header_component_Header {
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
    scroll_handler_ScrollHandler.isElemScrolledDown(this.$animationTriggerElem)
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
// CONCATENATED MODULE: ./src/components/intro/auto-typer.js
class AutoTyper {
  constructor(props) {
    this.chars = null;
    this.ruChars = props.ruText.split("");
    this.engChars = props.engText.split("");

    this.languageToggle = false;

    this.$elem = document.querySelector(props.elem);

    this.slowTypingSpeed = 400;//ms
    this.fastTypingSpeed = 100;//ms

    this.pause = 2000;//ms
    this.removingSpeed = 75;//ms

    this.slowTypingLength = 3;//symbols
    this.fastTypingLength = 6;//symbols

    this.init();
  }

  init() {

    this.languageSwitch();
    this.typeText();
  }

  languageSwitch() {
    !this.languageToggle
        ? this.chars = this.ruChars
        : this.chars = this.engChars;
  }

  typeText(speed = this.slowTypingSpeed, distance = this.slowTypingLength, value = 0,) {
    let symbolCounter = value;
    let distanceCounter = 0;

    const ID = setInterval(() => {
      this.addChar(this.chars[symbolCounter]);

      symbolCounter++;
      distanceCounter++;

      if (symbolCounter < this.chars.length // Когда весь текст напечатается
          // мы не сможем зайти сюда и снова запустить функцию, даже если счетчик длины пройдет по условию.
          && distanceCounter >= distance // Если мы набрали букв больше или равным числу, которое установлено на данной скорости
          && this.slowTypingLength === distance) { // ...и если текущая дистанция/скорость - медленная
        // тогда мы должны остановить интервал, вызвать рукурсивно фун-ю, и передать в нее другой тип дистанции.
        clearInterval(ID);
        this.typeText(this.fastTypingSpeed, this.fastTypingLength, symbolCounter);

      } else if (symbolCounter < this.chars.length
          && distanceCounter >= distance
          && this.fastTypingLength === distance) {
        clearInterval(ID);
        this.typeText(this.slowTypingSpeed, this.slowTypingLength, symbolCounter);
      }

      if (symbolCounter >= this.chars.length) {
        this.languageToggle = !this.languageToggle;
        clearInterval(ID);
        setTimeout(() => this.removeText(), this.pause);
      }
    }, speed);
  }

  addChar(symbol) {
    this.$elem.insertAdjacentText('beforeEnd', symbol);
  }

  removeText() {
    let counter = this.chars.length;
    const ID = setInterval(() => {
      counter--;
      if (counter <= 0) {
        clearInterval(ID);
        setTimeout(() => this.init(), this.pause);
      }

      this.deleteChar();
    }, this.removingSpeed);
  }

  deleteChar() {
    this.$elem.lastChild.remove();
  }

}
// CONCATENATED MODULE: ./src/index.js





const preloader = new Preloader();
const scrollHandler = new scroll_handler_ScrollHandler();

const header = new header_component_Header({
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
  const autoTyper = new AutoTyper({
    ruText: "фронтенд-разработчик",
    engText: "front-end developer",
    elem: ".intro__subtitle--autoText"
  });
}







/***/ })
/******/ ]);