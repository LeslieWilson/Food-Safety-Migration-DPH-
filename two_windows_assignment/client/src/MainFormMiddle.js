import React from 'react';

const MainFormMiddle = props => {
return(
<div>
  <form className="MainFormMiddle">
      <div className="TopMid">
      <label> DBA
        <input
          className="inputM1"
          type="text"
        />
        </label>

<label> STATUS
<select
className="inputM2dropdown"
/>
</label>
        </div>


        <div className="MidMid">
        <div className="boxM1">
          <label> Facility Address
            <input
              className="inputM3"
              type= "text"
            />

            <input
              className="input3b"
              type= "text"
            />
          </label>
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

<label> All
<checkbox
className="inputCHECK1"
/>
</label>

<label> Ind
<checkbox
className="inputCHECK2"
/>
</label>

<label> I
<checkbox
className="inputCHECK2"
/>
</label>

<label> II
<checkbox
className="inputCHECK3"
/>
</label>

<label> III
<checkbox
className="inputCHECK4"
/>
</label>

<label> IV
<checkbox
className="inputCHECK5"
/>
</label>

<label> V
<checkbox
className="inputCHECK6"
/>
</label>

<label> VI
<button
className="inputCHECK7"
type="checkbox"></button>

</label>

<label> Specific
<textarea
className="inputM11"
/>
</label>

<label>
<button
className="buttonM1"
type="submit">Insert</button>
</label>

<label>
<button
className="buttonM2"
type="submit">Delete</button>
</label>
</div>


        </form>
        </div>



)
}

export default MainFormMiddle
