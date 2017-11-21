import React, { Component } from 'react';

class FromAddressFields extends Component {
  render() {
    return (
      <div>
        <h2>From Address</h2>
        <div>
          <label htmlFor="">Company</label>
          <input type="text"
                 className="jsFromAddress"
                 name="company"
                 value={this.props.fromAddress.company}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text"
                 className="jsFromAddress"
                 name="name"
                 value={this.props.fromAddress.name}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Street 1</label>
          <input type="text"
                 className="jsFromAddress"
                 name="street1"
                 value={this.props.fromAddress.street1}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Street 2</label>
            <input type="text"
                 className="jsFromAddress"
                   name="street2"
                   value={this.props.fromAddress.street2}
                   onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input type="text"
                 className="jsFromAddress"
                 name="city"
                 value={this.props.fromAddress.city}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">State</label>
          <input type="text"
                 className="jsFromAddress"
                 name="state"
                 value={this.props.fromAddress.state}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Zip</label>
          <input type="text"
                 className="jsFromAddress"
                 name="zip"
                 value={this.props.fromAddress.zip}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text"
                 className="jsFromAddress"
                 name="phone"
                 value={this.props.fromAddress.phone}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text"
                 className="jsFromAddress"
                 name="email"
                 value={this.props.fromAddress.email}
                 onChange={this.props.handleInputChange} />
        </div>
        <button onClick={this.props.previousStep}>Previous</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  }
}

export default FromAddressFields;
