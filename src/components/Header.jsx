import React, { Component } from 'react';
import '../App.css';
//import logo from './logo.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSnowflake} from '@fortawesome/free-solid-svg-icons';
import {faTemperatureLow} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';
library.add(faSnowflake)
library.add(faTemperatureLow)
library.add(faSun)

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = { tai objektas, kuris lemia, kaip šis komponentas daro ir elgiasi};
  }

   render() {
    return (
      <div className="logo">
        {/* <img src={logo}></img> */}
 	  	    <FontAwesomeIcon className="one" icon="snowflake"/>
	 	     	<FontAwesomeIcon className="two" icon="temperature-low"/>
          <FontAwesomeIcon className="three" icon="sun"/>
      </div>
    );
  }
}

export default Header;

