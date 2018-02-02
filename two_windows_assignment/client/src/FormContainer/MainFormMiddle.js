import React from 'react';
import BoxM1 from '../InputContainer/BoxM1';
import BoxM2 from '../InputContainer/BoxM2';
import CheckboxContainer from '../InputContainer/CheckboxContainer';
import SingleInput from '../ComponentContainer/SingleInput';
import Select from '../ComponentContainer/Select'
import TextArea from '../ComponentContainer/TextArea';
const MainFormMiddle = props => {
return(
<div>

 <BoxM1 />
<BoxM2 />

<div className="MainFormMiddle">



<CheckboxContainer />

        </div>
        </div>



)
}

export default MainFormMiddle
