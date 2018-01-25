import React from 'react';
import SingleInput from './SingleInput'
import TextArea from './TextArea'
import Select from './Select'
import Box1Top from './Box1Top'
import Box2Top from './Box2Top'


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


        <Box1Top />

        <Box2Top />



      <div className="box3">

        <TextArea
          title="Parent Corperation Comments"
          className="input11"
          name="title"
        />

    <Select
      title= "Facility Type"
      className="dropdown"
      name="drpdown"
      options = {["kansas","new york"]}
    />

    </div>
    </div>

    </form>
  </div>

  )
}

export default MainFormTop
