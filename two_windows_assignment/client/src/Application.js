import React {Componant} from 'react';
import Checkbox from './Checkboxes';

const items =[
  'All',
  'Ind',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI'
];

class Application extends Componant {
  componentWillMount  = () => {
    this.selectedCheckboxes = new Set();
}

toggleCheckbox = label =>{
  if (this.selectedCheckboxes.has(label)){
    this.selectedCheckboxes.delete(label);
  } else {

    this.selectedCheckboxes.add(label);
  }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkboxes of this. selectedCheckboxes){
      console.log(checkboxes,'is selected.');

    }
  }

  create Checkbox = label =>(
    <Checkboxes
    label ={label}
    handleCheckBoxChange={this.toggleCheckbox}
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


export default Application;





  }
}
