import React, { Component } from 'react';
import '../App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class BodyTemperature extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.renderDropdownButton = this.renderDropdownButton.bind(this);
    this.state = {
      URL: "https://api.openweathermap.org/data/2.5/weather?q=",
      KEY: "&appid=f4e2f84fb05dea2b5285002404731822",
      city: 'Prague',
      country:'cz',
      temp: '',
      humidity:'',
      pressure:'',
      dropdownOpen: false,
      bgColor: "",
      value:'',    
    };
  }     
 
  
render() {
  const elementColor = this.state.bgColor;
  return (
    <div className="Temp">
      <input onChange={(e)=> this.setCity(e.target.value)} className='city' placeholder='Įrašykite miestą'/>
      <input onChange={(e)=> this.setCountry(e.target.value)} className='country' placeholder='Įrašykite šalies kodą'/>
      <button className='btn btn-primary btn-sm' onClick={()=>{this.fetchTemperature()}}><p>Rodyti</p></button>
        <ButtonDropdown className='SelectBtn' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Pasirinkite</DropdownToggle>
          <DropdownMenu onClick={(e)=> this.setValue(e.target.value)}>
            <DropdownItem value='Kaunas,lt' onClick={()=>{this.fetchTemperatureSel()}}>Kaunas</DropdownItem>
            <DropdownItem value="Vilnius,lt" onClick={()=>{this.fetchTemperatureSel()}}>Vilnius</DropdownItem>
            <DropdownItem value="London,uk" onClick={()=>{this.fetchTemperatureSel()}}>London</DropdownItem>
            <DropdownItem value="Lisbon,por" onClick={()=>{this.fetchTemperatureSel()}}>Lisbon</DropdownItem>
            <DropdownItem value="Viena,aus" onClick={()=>{this.fetchTemperatureSel()}}>Viena</DropdownItem>
            <DropdownItem value="Berlin,ger" onClick={()=>{this.fetchTemperatureSel()}}>Berlin</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      <span className='Info'>
        <p className='tempValue'style={{backgroundColor: elementColor}}>{this.state.temp}°C</p>
        <p className='humidityValue'>{this.state.humidity}%</p>
        <p className='pressureValue'>{this.state.pressure}Bar</p>
      </span>
    </div>
  );
}

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

  changeBgColor(temp){
    const bgColor = temp > 0 ? "#ec5f27": "#4167b8";
    this.setState({
      bgColor
    })
  }

  renderDropdownButton() {
    return (
      <div>
        <DropdownMenu>
          <DropdownItem >Kaunas</DropdownItem>
          <DropdownItem >Vilnius</DropdownItem>
          <DropdownItem >London</DropdownItem>
          <DropdownItem >Lisbon</DropdownItem>
          <DropdownItem >Viena</DropdownItem>
          <DropdownItem >Berlin</DropdownItem>
        </DropdownMenu>
      </div>
    )
  } 

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
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
        const temp =  this.normalizeTemperature(data.main.temp).toFixed(1);
        this.changeBgColor(temp);
        this.setState({
            temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure
        })
    });
  }
    
  setValue(DropdownItemValue){
    console.log(DropdownItemValue)
    this.setState({
      value: DropdownItemValue,
    });
  }


  fetchTemperatureSel = () => {
    const totalUrl = this.state.URL + this.state.value + this.state.KEY;
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
      const temp =  this.normalizeTemperature(data.main.temp).toFixed(1);
      this.changeBgColor(temp);
      this.setState({
          temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure
      })
    });
  } 
}
export default BodyTemperature;

