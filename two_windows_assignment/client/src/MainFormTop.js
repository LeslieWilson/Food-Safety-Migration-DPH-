import React from 'react';
import SingleInput from './SingleInput'
import TextArea from './TextArea'
import Select from './Select'

const MainFormTop = props => {
return(
  <div>
    <form className="MainFormTop">
      <div className="logoBox">
      <p>WIN</p>
      <h1 className="title" >Add new Parent Corperation, Facility and Registration</h1>
      </div>

      <div className="parentCorp">
        <SingleInput
          title = "Parent Corperation"
          className="input1"
          name="parentCorp"
          controlFunc={this.handleChange}
        />
        </div>

    <div className="boxContainer">

    <div className="stackedFields1">

    <div className="box1">
      <SingleInput
      title = "Corperate Mailing Address"
      className="input2"
      name="corpMailing"
      controlFunc={this.handleChange}
        />
        </div>

      <SingleInput
      title = "City"
      className="input3"
      name="city"
        />

      <SingleInput
      title = "State"
      className="input4"
      name="state"
        />


      <SingleInput
      title="Zip"
      className="input4b"
      name="zip"
        />
    </div>



    <div className="box2">
      <SingleInput
      title= "Parent Corperation Contact"
      className="input5"
      name="parCorContact"
        />

      <SingleInput
      title= "Last name"
      className="input6"
      name="lastnm"
        />

      <SingleInput
      title="First name"
      className="input7"
      name="firstnm"
        />

      <SingleInput
      title="Middle"
      className="input8"
      name="mid"
        />

      <SingleInput
      title="Suffix"
      className="input9"
      name="suf"
        />

      <SingleInput
      title="Title"
      className="input10"
      name="title"
        />

      </div>


      <div className="box3">

      <TextArea
      title="Parent Corperation Comments"
      className="input11"
      name="title"
      />

      </div>


      </div>
      <Select
      title= "Facility Type"
      className="dropdown"
      name="drpdown"
      options = {["kansas","new york"]}
      />

    </form>
  </div>


)
}

export default MainFormTop
