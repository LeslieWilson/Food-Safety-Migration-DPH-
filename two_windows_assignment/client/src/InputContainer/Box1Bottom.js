import React, { Component } from 'react';
import SingleInput from '../ComponentContainer/SingleInput';


class Box1Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
        license: '',
        issued: '',
        expired: ''
           }
           this.handleChange = this.handleChange.bind(this)
         }

         handleChange(event){
           let value = event.target.value
           let name = event.target.name
           this.setState({ [name]: value })
         }

         render(){
           return(
             <div className="Box1Bottom">
               <p>Registration</p>
               <SingleInput
                 title = "License"
                 className = "license"
                 name = "license"
                 value = {this.state.license}
                 controlFunc={this.handleChange}
               />

               <SingleInput
                 title = "Issued"
                 className = "issued"
                 name = "issued"
                 value = {this.state.issued}
                 controlFunc={this.handleChange}
                 placeholder = " / /"
               />

               <SingleInput
                 title = "Expired"
                 className = "expired"
                 name = "expired"
                 value = {this.state.expired}
                 controlFunc={this.handleChange}
                 placeholder = " / /"
               />
             </div>
           )
         }
       }

       export default Box1Bottom
