import React, { Component } from 'react';
import TextArea from '../ComponentContainer/TextArea';



class BoxM2 extends Component {
  constructor (props) {
    super (props);
    this.state = {
      spec:'',

    }

  this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
  let value = event.target.value
  let name = event.target.name
  this.setState({ [name]: value})
}

render(){
  console.log(this.state.city)
  return(


    <div className="BoxM2">

    <p>Schedules</p>
    <p>Requested</p>


    <TextArea
    title="Specific"
    className="inputM11"
    name="spec"
    controlFunc={this.handleChange}
    />

    </div>


  )
}
}


export default BoxM2
