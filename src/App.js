import React from 'react';
import Title from './Component/Title';
import Form from './Component/Form';
import Weather from './Component/Weather';

const API_KEY = "5fd9750c30cc3cac0559b3807c18a8be";

class App extends React.Component {
    getWeather = async() => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`); 
        const data = await api_call.json();
        console.log(data);

    }
    render() {
        return(
            <React.Fragment>
                <Title />
                <Form getWeather={this.getWeather}/>
                <Weather />
                
            </React.Fragment>
        )
    }
}

export default App;
