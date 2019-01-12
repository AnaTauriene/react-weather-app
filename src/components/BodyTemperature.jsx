import React, { Component } from 'react';
import '../App.css';


class BodyTemperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      URL: "https://api.openweathermap.org/data/2.5/weather?q=",
      KEY: "&appid=f4e2f84fb05dea2b5285002404731822",
      city: 'Prague',
      country:'cz',
      temp: '',
    };
  }
  // setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
  setCity(inputCity) {
    const formattedCity = inputCity.slice(0, 1).toUpperCase() +
       inputCity.slice(1).toLowerCase();
    this.setState({
        city: formattedCity
      });
  }

  setCountry(inputCountry) {
    this.setState({
        country: inputCountry
      });
  }

  render() {
    return (
      <div className="Temp">
        <input onChange={(e)=> this.setCity(e.target.value)} className='city' placeholder='Įrašykite miestą'  data-toggle="dropdown"/>
        <input onChange={(e)=> this.setCountry(e.target.value)} className='country' placeholder='Įrašykite šalies kodą' data-toggle="dropdown"/>
        <button className='btn btn-primary btn-sm' onClick={this.fetchTemperature}><p>Rodyti</p></button>
        <p className='tempValue'>{this.state.temp}°C</p>
      </div>
    );
  }
  
  generateUrl = () => {
      return this.state.URL + this.state.city + "," +
        this.state.country + this.state.KEY;
  }

  normalizeTemperature(tempInKelvin) {
    return Math.round((tempInKelvin - 273.15) * 100) / 100;
  }

fetchTemperature = () => {
    const totalUrl = this.generateUrl();
    fetch(totalUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
  .then(data => {
      console.log(data.main);

      this.setState({
          temp: this.normalizeTemperature(data.main.temp)
      })
    });
    }
}

export default BodyTemperature;

