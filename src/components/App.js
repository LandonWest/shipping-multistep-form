import React, { Component } from 'react';
import '../App.css';
import ToAddressFields from './ToAddressFields';

class App extends Component {
  constructor() {
    super();

    this.state = {
      toAddress: {
        company: '',
        name: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const toAddress = {...this.state.toAddress};
    toAddress[name] = e.target.value;

    this.setState({toAddress});
  }

  render() {
    return <ToAddressFields toAddress={this.state.toAddress}
                            handleInputChange={this.handleInputChange}/>;
  }
}

export default App;
