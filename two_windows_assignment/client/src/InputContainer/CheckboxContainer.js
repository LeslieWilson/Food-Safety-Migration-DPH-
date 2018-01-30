import React, {Component} from 'react';
import Checkbox from '../ComponentContainer/Checkbox';


const items = [
  'All',
  'Ind',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI'
];

class CheckboxContainer extends Component {
  componentWillMount  = () => {
    this.selectedCheckboxes = new Set();
}

toggleCheckbox = label =>{
  if (this.selectedCheckboxes.has(label)){
    this.selectedCheckb oxes.delete(label);
  } else {

    this.selectedCheckboxes.add(label);
  }
}

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes){
      console.log(checkbox,'is selected.');

    }
  }

  createCheckbox = label => (
    <Checkbox
    label={label}
    handleCheckboxChange={this.toggleCheckbox}
    key={label}
    />

  )

  createCheckboxes = () =>(
    items.map(this.createCheckbox)
  )

render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">

          <form onSubmit={this.handleFormSubmit}>
            {this.createCheckboxes()}

            <button className="btn btn-default" type="submit">Insert</button>
            <button className="btn btn-default" type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}


export default CheckboxContainer;
