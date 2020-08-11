
export class AutoText {
  constructor(props) {
    this.text = props.text;
    this.$elem = document.querySelector(props.elem);

    this.arrayOfSymbols = this.text.split("");

    this.firstPartOfArray = Math.floor(this.arrayOfSymbols.length / 5);
    this.secondPartOfArray = Math.floor(this.arrayOfSymbols.length) - this.firstPartOfArray;
    this.slowTimeOut = 400;
    this.fastTimeOut = 100;

    this.slowPart();
  }

  slowPart(count) {


   let counter = count || 0;
   console.log(count);

   const ID = setInterval(() => {
     this.showSymbol(this.arrayOfSymbols[counter]);
     counter++;
     if(counter === this.firstPartOfArray) {
       clearInterval(ID);
       this.fastPart(counter);
     } else if (counter >= this.arrayOfSymbols.length) {
       clearInterval(ID);
     }
   }, this.slowTimeOut);


    // arrayOfSymbols.forEach(symbol => {
    //   setInterval(() => console.log(symbol), 2000);
    // });


  }

  showSymbol(symbol) {
    this.$elem.insertAdjacentText('beforeEnd', symbol);
  }

  fastPart(counter) {
    let newCounter = this.firstPartOfArray;
    const ID = setInterval(() => {
      this.showSymbol(this.arrayOfSymbols[newCounter]);
      newCounter++;
      if(newCounter >= this.secondPartOfArray) {
        clearInterval(ID);
        this.slowPart(newCounter);
      }
    }, this.fastTimeOut);
  }

}