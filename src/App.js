import React from 'react';
import Title from './Component/Title';
import Form from './Component/Form';
import Weather from './Component/Weather';

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Title />
                <Form />
                <Weather />
            </React.Fragment>
        )
    }
}

export default App;
