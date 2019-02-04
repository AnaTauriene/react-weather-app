import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import BodyTemperature from './components/BodyTemperature';
import FooterQuote from './components/FooterQuote';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<div>
    <Header/>,
    <BodyTemperature/>,
    <FooterQuote/>,
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
