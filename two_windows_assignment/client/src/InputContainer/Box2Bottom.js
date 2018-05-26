import React, { Component } from 'react';

class Box2Bottom extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className = "Box2Bottom">
        <p>Transactions</p>
        <div className = "button-container">
          <button className="transactions" type="submit">Add</button>
          <button className="transactions" type="submit">Reuse</button>
          <button className="transactions" type="submit">Delete</button>
        </div>
      </div>
    )
  }
}

export default Box2Bottom
