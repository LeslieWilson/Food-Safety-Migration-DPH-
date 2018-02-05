import React from 'react';
import SingleInput from '../ComponentContainer/SingleInput'
import Select from '../ComponentContainer/Select'
import Box1Top from '../InputContainer/Box1Top'
import Box2Top from '../InputContainer/Box2Top'
import Box3Top from '../InputContainer/Box3Top'



const MainFormTop = props => {
return(

  <div>
    <form className="MainFormTop">
      <div className="logoBox">
        <p>WINLOGO</p>
        <h1 className="title" >Add new Parent Corperation, Facility and Registration</h1>
        <p>LOGOmin</p>
        <p>LOGOmax</p>
        <p>LOGOX</p>
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

    <Select
        title="Facility Type"
        name="facility-type"
        options={["some", "random", "options"]}
      />
      <div className="dba-status">
        <SingleInput
          title="DBA"
          className="dba"
        />

        <Select
          title="Status"
          className="status"
          options={["some", "random", "options"]}
        />
      </div>

      </form>
    </div>

    )
  }

  export default MainFormTop
