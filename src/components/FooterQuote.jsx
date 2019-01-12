import React, { Component } from 'react';
import '../App.css';

class FooterQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentence:['Nėra blogo oro - yra tik bloga apranga','Koks oras, toks laikas, koks tėvas, toks ir vaikas', 'Gražus oras - ir davatką ima noras',
      'Kur miškas tankesnis, ir oras šiltesnis', 'Oras kaip velnio veselios', 'Jei žąsis galvą laiko po sparnu, tai greit speigas užniks',
      'Varlės iš vakaro kurkia – rytui giedrą neša', 'ei per Mykolines sausa – šv. Kalėdos bus šlapios',
      'Sakoma, jei kregždės skraido žemai, palei žemę – lis', 'Jei per Velykas šąla, Naujieji metai bus šilti ir atvirkščiai'],
    };
  }

  setQuote(newQuote) {
    this.setState({
      sentence:'Nope',
    });
  }

  render() {
    const quote = this.state.sentence
    return (
      <div className="Quote">
        <span className='quoteValue'><a>{quote[Math.floor(Math.random() * quote.length)]}</a></span>
        <p>Copyright © 2019 Ana Taurienė - J18/1T</p>
      </div>
    );
  }
   //Random būdu rodoma citata iš šaltinio paleidus psl.
   // showQuote () {
   // }
}

export default FooterQuote;