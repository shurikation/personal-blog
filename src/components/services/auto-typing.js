export class AutoTyping {
  constructor(props) {
    this.chars = null;
    this.ruChars = props.ruText.split("");
    this.engChars = props.engText.split("");

    this.languageToggle = false;

    this.$elem = document.querySelector(props.elem);

    this.slowTypingSpeed = 400;//ms
    this.fastTypingSpeed = 100;//ms

    this.slowTypingLength = 3;//symbols
    this.fastTypingLength = 6;//symbols

    this.pause = 2000;//ms

    this.removingSpeed = 75;//ms

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
