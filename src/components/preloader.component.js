export class Preloader {
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