import React, { Component } from 'react';
import '../App.css';
import ToAddressFields from './ToAddressFields';
import FromAddressFields from './FromAddressFields';

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
      },
      fromAddress: {
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
    const parent = e.target.className

    const map = {
      jsToAddress: () => {
        const toAddress = {...this.state.toAddress}
        toAddress[name] = e.target.value
        this.setState({toAddress});
      },
      jsFromAddress: () => {
        const fromAddress = {...this.state.fromAddress}
        fromAddress[name] = e.target.value
        this.setState({fromAddress});
      },
    }

    map[parent]();
  }

  render() {
    return (
      <div>
      <ToAddressFields toAddress={this.state.toAddress}
                       handleInputChange={this.handleInputChange}/>
      <FromAddressFields fromAddress={this.state.fromAddress}
                       handleInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
