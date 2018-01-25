import React from 'react';
import SingleInput from '../ComponentContainer/SingleInput'
import TextArea from '../ComponentContainer/TextArea'
import Select from '../ComponentContainer/Select'
import Box1Top from '../InputContainer/Box1Top'
import Box2Top from '../InputContainer/Box2Top'


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
