import React from 'react';
import SingleInput from '../ComponentContainer/SingleInput'
import TextArea from '../ComponentContainer/TextArea'
import Select from '../ComponentContainer/Select'
import Box1Top from '../InputContainer/Box1Top'
import Box2Top from '../InputContainer/Box2Top'
import Box3Top from '../InputContainer/Box3Top'


const MainFormTop = props => {
return(
  <div>
    <form className="MainFormTop">
      <div className="logoBox">
        <p>LOGO</p>
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

        <Box3Top />

    </div>
    </form>
  </div>

  )
}

export default MainFormTop
