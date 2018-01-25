import React, { Component } from 'react';
import SingleInput from './SingleInput';


class Box1Top extends Component {
  constructor(props) {
    super(props);
}

render() {
  return(

    <div className="box1">

      <SingleInput
      title = "Corperate Mailing Address"
      className="input2"
      name="corpMailing"
      controlFunc={this.handleChange}
        />

      <SingleInput
      title="City"
      className="input3"
      name="city"
      controlFunc={this.handleChange}
        />

      <SingleInput
      title = "State"
      className="input4"
      name="state"
      controlFunc={this.handleChange}
        />

      <SingleInput
      title="Zip"
      className="input4b"
      name="zip"
      controlFunc={this.handleChange}
        />

    </div>
  );
}
}

export default Box1Top
