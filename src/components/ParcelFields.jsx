import React, { Component } from 'react';

class ParcelFields extends Component {
  render() {
    return (
      <div>
        <h2>Parcel</h2>
        <div>
          <label htmlFor="">Length</label>
          <input type="text"
                 className="jsParcel"
                 name="length"
                 value={this.props.parcel.length}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Width</label>
          <input type="text"
                 className="jsParcel"
                 name="width"
                 value={this.props.parcel.width}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Height</label>
          <input type="text"
                 className="jsParcel"
                 name="height"
                 value={this.props.parcel.height}
                 onChange={this.props.handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Weight</label>
          <input type="text"
                 className="jsParcel"
                 name="weight"
                 value={this.props.parcel.weight}
                 onChange={this.props.handleInputChange} />
        </div>
        <button onClick={this.props.previousStep}>Previous</button>
      </div>
    );
  }
}

export default ParcelFields;
