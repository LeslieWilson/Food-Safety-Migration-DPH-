import React from 'react';
import BoxM1 from '../InputContainer/BoxM1';
import BoxM2 from '../InputContainer/BoxM2';
import CheckboxContainerOne from '../InputContainer/CheckboxContainerOne';
import CheckboxContainerTwo from '../InputContainer/CheckboxContainerTwo';

const MainFormMiddle = props => {
return(
<div className="mid-container">

 <BoxM1 />
 <div className="checkbox-specific-container">
   <p>Schedules</p>
   <div className="checkbox-specific">

    <div className="checkbox-container-container">
      <p className="requested">Requested</p>
      <div className="checkbox-container">
       <CheckboxContainerOne />
       <CheckboxContainerTwo />
      </div>
    </div>

    <BoxM2 />

   </div>
  </div>
</div>



)
}

export default MainFormMiddle
