import React from 'react';
import Title from './Component/Title';
import Form from './Component/Form';
import Weather from './Component/Weather';

const API_KEY = "5fd9750c30cc3cac0559b3807c18a8be";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        dedscription: undefined,
        error: undefined,
    }
    getWeather = async(e) => {
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                dedscription: undefined,
                error: "Please Enter the Value",
            });
        }
    }
    render() {
        return(
            <React.Fragment>
                <Title />
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
            </React.Fragment>
        )
    }
}

export default App;
