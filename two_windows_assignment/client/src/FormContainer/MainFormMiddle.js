import React from 'react';
import BoxM1 from '../InputContainer/BoxM1';
import CheckboxContainer from '../InputContainer/CheckboxContainer';
import SingleInput from '../ComponentContainer/SingleInput';
import Select from '../ComponentContainer/Select'
import TextArea from '../ComponentContainer/TextArea';
const MainFormMiddle = props => {
return(
<div>

 <BoxM1 />

<div className="MainFormMiddle">

<div className="boxM3">

<p>Schedules</p>
<p>Requested</p>


<TextArea
title="Specific"
className="inputM11"
/>

</div>


<CheckboxContainer />

        </div>
        </div>



)
}

export default MainFormMiddle
