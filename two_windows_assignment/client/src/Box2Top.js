import React, { Component } from 'react';
import SingleInput from './SingleInput';


class Box2Top extends Component {
  constructor(props) {
    super(props);
}

render() {
  return(

<div className="box2">

  <SingleInput
    title= "Parent Corperation Contact"
    className="input5"
    name="parCorContact"
    controlFunc={this.handleChange}
  />

  <SingleInput
    title= "Last name"
    className="input6"
    name="lastnm"
    controlFunc={this.handleChange}
  />

  <SingleInput
    title="First name"
    className="input7"
    name="firstnm"
    controlFunc={this.handleChange}
  />

  <SingleInput
    title="Middle"
    className="input8"
    name="mid"
    controlFunc={this.handleChange}
  />

  <SingleInput
    title="Suffix"
    className="input9"
    name="suf"
    controlFunc={this.handleChange}
  />

  <SingleInput
    title="Title"
    className="input10"
    name="title"
    controlFunc={this.handleChange}
  />

</div>

    );
  }
}
export default Box2Top
