import React from 'react';
import CheckboxContainer from '../InputContainer/CheckboxContainer';
import SingleInput from '../ComponentContainer/SingleInput';
import Select from '../ComponentContainer/Select'
const MainFormMiddle = props => {
return(
<div>

<form className="MainFormMiddle">
    <div className="TopMid">

    <Select
    title= "Facility Type"
    className="dropdown"
    name="drpdown"
    options = {["kansas","new york"]}
    />

      <SingleInput
      title="DBA"
          className="inputM1"
          name="dba"
          controlFunc={this.handleChange}
        />


<SingleInput
title="STATUS"
className="inputM2dropdown"
name="m2drop"
controlFunc={this.handleChange}
/>
        </div>


        <div className="MidMid">
        <div className="boxM1">


        <SingleInput
        title="Facility Address"
        className="inputM3"
        type="text"
            />

            <SingleInput
              className="input3b"
              type= "text"
            />
          </div>


<label> City
<input
className="inputM4"
type="text"
/>
</label>

<label> State
<input
className="inputM5"
type="text"
/>
</label>

<label> Zip
<input
className="inputM6"
type="text"
/>
</label>

<label> Country
<select
className="inputM7"
/>
</label>

<label> Phone
<input
className="inputM7"
type="text"
placeholder="( )-"
/>
</label>

<label> Fax
<input
className="inputM8"
type="text"
placeholder ="( )-"
/>
</label>
</div>

<div className="boxM2">
<label> Facility Comments
<textarea
className="inputM9"
type="text"
/>
</label>

<label> Email
<input
className="inputM10"
type="text"
/>
</label>
</div>

<div className="boxM3">
<p>Schedules</p>
<p>Requested</p>



<label> Specific
<textarea
className="inputM11"
/>
</label>

</div>


<CheckboxContainer />

        </form>
        </div>



)
}

export default MainFormMiddle
