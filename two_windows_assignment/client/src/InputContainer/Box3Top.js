import React, { Component } from 'react';
import Select from '../ComponentContainer/Select'
import TextArea from '../ComponentContainer/TextArea'


class Box3Top extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
<div className="box3">

<TextArea
  title="Parent Corperation Comments"
  className="input11"
  name="title"
/>



</div>

    );
  }
}


export default Box3Top
