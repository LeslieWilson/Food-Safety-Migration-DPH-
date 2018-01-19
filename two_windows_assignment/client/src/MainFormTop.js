import React from 'react';

const MainFormTop = props => {
return(
  <div>
    <form className="MainFormTop">
      <div className="logoBox">
      <p>WIN</p>
      <h1 className="title" >Add new Parent Corperation, Facility and Registration</h1>
      </div>

      <div className="parentCorp">
      <label> Parent Corperation
        <input
          className="input1"
          type="text"
        />
        </label>
        </div>

   <div className="boxContainer">
    <div className="stackedFields1">
    <div className="box1">
      <label> Corperate Mailing Address
        <input
          className="input2"
          type= "text"
        />

        <input
          className="input2b"
          type= "text"
        />
      </label>
      </div>

      <label> City
        <input
          className="input3"
          type="text"
        />
      </label>

      <label> State
        <input
        className="input4"
        type="text"
        />
      </label>

      <label> Zip
        <input
        className="input4b"
        type="text"
        />
      </label>
    </div>


    <div className="box2">
      <label> Parent Corperation Contact
        <input
        className="input5"
        type="text"
        />
      </label>

      <label> Last name
        <input
        className="input6"
        type="text"
        />
      </label>

      <label> First name
        <input
        className="input7"
        type="text"
        />
      </label>

      <label> Middle
        <input
        className="input8"
        type="text"
        />
      </label>

      <label> Suffix
        <input
        className="input9"
        type="text"
        />
      </label>

      <label> Title
        <input
        className="input10"
        type="text"
        />
      </label>
      </div>


      <div className="box3">
      <label> Parent Corperation Comments
      <textarea
      className="input11"
      type="text"
      />
      </label>
      </div>



      </div>

      <label> Facility Type
      <select
      className="dropdown"
      />
      </label>
    </form>
  </div>



)
}

export default MainFormTop
