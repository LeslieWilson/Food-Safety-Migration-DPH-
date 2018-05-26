import React, { Component } from 'react';
import SingleInput from '../ComponentContainer/SingleInput';


class Box2Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnm:'',
      lastnm:'',
      mid:'',
      suf:'',
      title:'',
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
  let value = event.target.value
  let name = event.target.name
  this.setState({ [name]: value})
}


render() {
  console.log(this.state.city)
  return(

<div className="box2">

  <h2 className="input5">Parent Corperation Contact</h2>


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
  
  <div className="suffix-title">
    <SingleInput
      title="Suffix"
      className="input9"
      name="suf"
      controlFunc={this.handleChange}
    />

<<<<<<< HEAD
    <SingleInput
      title="Title"
      className="input10"
      name="title"
      controlFunc={this.handleChange}
    />
  </div>
=======
  <div className="suffix-title">
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
>>>>>>> d2f4aaf886da01d5298791bb0a8520fb1c5fdcfa

</div>

    );
  }
}
export default Box2Top
