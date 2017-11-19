import React, { Component } from 'react';

class ToAddressFields extends Component {
  render() {
    return (
      <div>
        <h2>To Address</h2>
        <div>
          <label htmlFor="">Company</label>
            <input type="text"
              name="to_company" />
        </div>
        <div>
          <label htmlFor="">Name</label>
            <input type="text"
              name="to_name" />
        </div>
        <div>
          <label htmlFor="">Street 1</label>
            <input type="text"
              name="to_street1" />
        </div>
        <div>
          <label htmlFor="">Street 2</label>
            <input type="text"
              name="to_street2" />
        </div>
        <div>
          <label htmlFor="">City</label>
            <input type="text"
              name="to_city" />
        </div>
        <div>
          <label htmlFor="">State</label>
            <input type="text"
              name="to_state" />
        </div>
        <div>
          <label htmlFor="">Zip</label>
            <input type="text"
              name="to_zip" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
            <input type="text"
              name="to_phone" />
        </div>
        <div>
          <label htmlFor="">Email</label>
            <input type="text"
              name="to_email" />
        </div>
        <button>Next</button>
      </div>
    );
  }
}

export default ToAddressFields;
