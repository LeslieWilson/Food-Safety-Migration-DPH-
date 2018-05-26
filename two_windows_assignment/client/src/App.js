import React, { Component } from 'react';


import './MainFormTopStyles.css';
import './MainFormMiddleStyles.css';
import './MainFormBottomStyles.css';
import MainFormTop from './FormContainer/MainFormTop';
import MainFormMiddle from './FormContainer/MainFormMiddle';
import MainFormBottom from './FormContainer/MainFormBottom';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">

        <MainFormTop />
        <MainFormMiddle />
        <MainFormBottom />
      </div>
    );
  }
}

export default App;
