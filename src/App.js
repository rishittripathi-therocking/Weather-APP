import React from 'react';
import Title from './Component/Title';
import Form from './Component/Form';

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Title />
                <Form />
            </React.Fragment>
        )
    }
}

export default App;
