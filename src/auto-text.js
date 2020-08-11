export class AutoText {
  constructor(props) {
    this.arrOfLetters = props.text.split("");
    this.$elem = document.querySelector(props.elem);

    this.slowTypingSpeed = 400; //ms
    this.fastTypingSpeed = 100; //ms

    this.slowTypingDistance = 3; //symbols
    this.fastTypingDistance = 6; //symbols

    this.init();
  }

  init() {
    this.textTypingHandler();
  }

  textTypingHandler(speed = this.slowTypingSpeed, distance = this.slowTypingDistance, value = 0) {
    let mainCounter = value;
    let distanceCounter = 0;

    const ID = setInterval(() => {
      this.displaySymbol(this.arrOfLetters[mainCounter]);
      mainCounter++;
      distanceCounter++;

      if (mainCounter >= this.arrOfLetters.length) clearInterval(ID);

      if (distanceCounter >= distance && distance === this.slowTypingDistance) {
        clearInterval(ID);
        this.textTypingHandler(this.fastTypingSpeed, this.fastTypingDistance, mainCounter);
      } else if (distanceCounter >= distance && distance === this.fastTypingDistance) {
        clearInterval(ID);
        this.textTypingHandler(this.slowTypingSpeed, this.slowTypingDistance, mainCounter);
      }
    }, speed);
  }

  displaySymbol(symbol) {
    this.$elem.insertAdjacentText('beforeEnd', symbol);
  }
}