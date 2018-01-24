import React, {Component} from 'react';
import SingleInput from './SingleInput';
//
// const items = [
//
//   'Facility Address'
//   'City'
//   'State'
//   'Zip'
//   'Country'
//   'Phone'
//   'Fax'
//   'Email'
//
// ];

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }



  handleFormSubmit() {
    //submit logic goes here
  }

  handleClearForm() {
    //clear form logic goes here
  }

  render() {
    return(
      <form className="container" onSubmit={this.handleFormSubmit}>
      <h5>Parent Corperation</h5>
      <SingleInput className="input1"/>
      <input
      type="submit"
      className="btn btn-primary float-left"
      value = "Submit"/>
      <button
      className="btn btn-link float-left"
      onClick={this.handleClearForm}>Clear Form</button>
      </form>
    );
  }
}

export default FormContainer;
