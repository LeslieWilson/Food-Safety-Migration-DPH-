import React, { Component } from 'react';
import TextArea from '../ComponentContainer/TextArea';
import SingleInput from '../ComponentContainer/SingleInput';
import Select from '../ComponentContainer/Select';


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
      email:'',
      facilityComments:''
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


      <div className="boxM1-container">
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

          <div className="city-state">
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
          </div>

          <div className ="zip-country">
            <SingleInput
            title="Zip"
            className="inputM6"
            name = "zip2"
            type="text"
            controlFunc={this.handleChange}
            />

            <Select
            title="Country"
            className="inputM7"
            name="country"
            type="text"
            controlFunc={this.handleChange}
            options={["A", "bunch", "of", "country", "names"]}
            placeholder="USA"
            />
          </div>

        </div>

        <div className="facility-comments-container">

          <TextArea
          title="Facility Comments"
          className="facility-comments"
          name="facilityComments"
          controlFunc={this.handleChange}
          />

        </div>


      </div>

      <div className="phone-fax">
        <SingleInput
        title="Phone"
        className="inputM10"
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

        <SingleInput
        title="Email"
        className="inputM9"
        name="email"
        controlFunc={this.handleChange}
        />
      </div>

    </div>

  )
}
}

export default BoxM1
