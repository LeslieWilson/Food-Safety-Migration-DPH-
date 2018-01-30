import React, { Component } from 'react';

import TextArea from '../ComponentContainer/TextArea';


class Box3Top extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'title'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value})
  }

  render (){
    console.log(this.state.city)
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
