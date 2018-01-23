import React, {Component} from 'react';
import SingleInput from './SingleInput';
import TextArea from './TextArea';
import Select from './Select';

const items = [

  'Facility Address'
  'City'
  'State'
  'Zip'
  'Country'
  'Phone'
  'Fax'
  'Email'

];

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount() {
    fetch('./fake_db.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        name:data.name,
        place:data.place,
        address:data.address,
        description:data.description
      });
    });
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
    <SingleInput />
    <input
    type="submit"
    className="btn btn-primary float-left"
    value = "Submit"/>
    <button
    className="btn btn-link float-left"
    onClick={this.handleClearForm}>Clear Form</button>
  )
}
