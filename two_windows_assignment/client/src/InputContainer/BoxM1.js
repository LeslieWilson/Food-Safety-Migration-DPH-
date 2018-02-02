import React, { Component } from 'react';
import TextArea from '../ComponentContainer/TextArea';
import SingleInput from '../ComponentContainer/SingleInput';


class BoxM1 extends Component {
  constructor (props) {
    super (props);
    this.state = {
      facilAdd:'',
      facilAdd2:'',
      city:'',
      state:'',
      zip2:'',
      country:'',
      phone:'',
      fax:'',


    }

    this.handleChange = this.handleChange.bind(this)
  }


handleChange(event){
  let value = event.target.value
  let name = event.target.name
  this.setState({ [name]: value})

}


render(){
  console.log(this.state.city)
  return(

    <div className="MidMid">
    <div className="boxM1">


    <SingleInput
    title="Facility Address"
    className="inputM3"
    name="facilAdd"
    type="text"
    controlFunc={this.handleChange}
        />

        <SingleInput
          className="input3b"
          name="facilAdd2"
          type= "text"
          controlFunc={this.handleChange}
        />

      </div>

    <SingleInput
    title="City"
    className="inputM4"
    name="city"
    type="text"
    controlFunc={this.handleChange}
    />


    <SingleInput
    title="State"
    className="inputM5"
    name="state"
    type="text"
    controlFunc={this.handleChange}
    />


    <SingleInput
    title="Zip"
    className="inputM6"
    name = "zip2"
    type="text"
    controlFunc={this.handleChange}
    />


    <SingleInput
    title="Country"
    className="inputM7"
    name="country"
    type="text"
    controlFunc={this.handleChange}
    />


    <SingleInput
    title="Phone"
    className="inputM7"
    name="phone"
    type="text"
    placeholder="( )-"
    controlFunc={this.handleChange}
    />


    <SingleInput
    title="Fax"
    className="inputM8"
    name="fax"
    type="text"
    placeholder ="( )-"
    controlFunc={this.handleChange}
    />
    </div>

  )
}
}

export default BoxM1
