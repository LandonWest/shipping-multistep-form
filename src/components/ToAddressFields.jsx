import React, { Component } from 'react';

class ToAddressFields extends Component {
  render() {
    return (
      <div>
        <h2>To Address</h2>
        <div>
          <label htmlFor="">Company</label>
          <input type="text"
                 className="jsToAddress"
                 name="company"
                 value={this.props.toAddress.company}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text"
                 className="jsToAddress"
                 name="name"
                 value={this.props.toAddress.name}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Street 1</label>
          <input type="text"
                 className="jsToAddress"
                 name="street1"
                 value={this.props.toAddress.street1}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Street 2</label>
          <input type="text"
                 className="jsToAddress"
                 name="street2"
                 value={this.props.toAddress.street2}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input type="text"
                 className="jsToAddress"
                 name="city"
                 value={this.props.toAddress.city}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">State</label>
          <input type="text"
                 className="jsToAddress"
                 name="state"
                 value={this.props.toAddress.state}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Zip</label>
          <input type="text"
                 className="jsToAddress"
                 name="zip"
                 value={this.props.toAddress.zip}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text"
                 className="jsToAddress"
                 name="phone"
                 value={this.props.toAddress.phone}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text"
                 className="jsToAddress"
                 name="email"
                 value={this.props.toAddress.email}
                 onChange={this.props.handleInputChange} />
        </div>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  }
}

export default ToAddressFields;
