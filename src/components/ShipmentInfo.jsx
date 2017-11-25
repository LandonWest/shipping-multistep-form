import React, { Component } from 'react';

class ShipmentInfo extends Component {
  constructor(props) {
    super(props);
    this.getRates = this.getRates.bind(this);
  }

  getRates() {
    alert('getting rates.....');
  }

  render() {
    const to = this.props.toAddress;
    const from = this.props.fromAddress;
    const parcel = this.props.parcel;

    return (
      <div>
        <h1>Shipment Info</h1>
        <div>
          <h2>To</h2>
          <p>
            {to.company}<br/>
            {to.name}<br/>
            {to.street1}<br/>
            {to.street2}<br/>
            {to.city}, {to.state}<br/>
            {to.zip}
          </p>
        </div>
        <div>
          <h2>From</h2>
          <p>
            {from.company}<br/>
            {from.name}<br/>
            {from.street1}<br/>
            {from.street2}<br/>
            {from.city}, {from.state}<br/>
            {from.zip}
          </p>
        </div>
        <div>
          <h2>Parcel</h2>
          <p>
            L: {parcel.length} in<br/>
            W: {parcel.width} in<br/>
            H: {parcel.height} in<br/>
            Weight: {parcel.weight} oz
          </p>
        </div>
        <button onClick={this.props.previousStep}>Previous</button>
        <button onClick={this.getRates}>Get Rates</button>
      </div>
    );
  }
}

export default ShipmentInfo;
