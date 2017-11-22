import React, { Component } from 'react';
import '../App.css';
import ToAddressFields from './ToAddressFields';
import FromAddressFields from './FromAddressFields';
import ParcelFields from './ParcelFields';
import ShipmentInfo from './ShipmentInfo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
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
        company: 'Easy Post',
        name: 'Swag Department',
        street1: '417 Montgomery',
        street2: 'Floor 5',
        city: 'San Francisco',
        state: 'CA',
        zip: '94101',
        phone: '',
        email: 'support@easypost.com',
      },
      parcel: {
        length: '',
        width: '',
        height: '',
        weight: '',
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
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
      jsParcel: () => {
        const parcel = {...this.state.parcel};
        parcel[name] = e.target.value;
        this.setState({parcel});
      }
    }

    map[parent]();
  }

  nextStep() {
    let current = this.state.step;
    this.setState({ step: ++current });
    console.log("moving to step: " + this.state.step);
  }

  previousStep() {
    let current = this.state.step;
    this.setState({ step: --current });
    console.log("moving to step: " + this.state.step);
  }

  render() {
    if (this.state.step === 1) {
      return (
        <ToAddressFields toAddress={this.state.toAddress}
                         handleInputChange={this.handleInputChange}
                         nextStep={this.nextStep} />
      );
    } else if (this.state.step === 2) {
      return (
        <FromAddressFields fromAddress={this.state.fromAddress}
                           handleInputChange={this.handleInputChange}
                           previousStep={this.previousStep}
                           nextStep={this.nextStep} />
      );
    } else if (this.state.step === 3) {
      return (
        <ParcelFields parcel={this.state.parcel}
                      handleInputChange={this.handleInputChange}
                      previousStep={this.previousStep}
                      nextStep={this.nextStep} />
      );
    } else {
      return (
        <ShipmentInfo toAddress={this.state.toAddress}
                      fromAddress={this.state.fromAddress}
                      parcel={this.state.parcel}
                      previousStep={this.previousStep} />
      );
    }
  }
}

export default App;
