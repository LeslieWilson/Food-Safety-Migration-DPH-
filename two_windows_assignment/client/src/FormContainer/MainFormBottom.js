import React from 'react';
import Box1Bottom from '../InputContainer/Box1Bottom';
import Box2Bottom from '../InputContainer/Box2Bottom';
import Box3Bottom from '../InputContainer/Box3Bottom';

const MainFormBottom = props => {
  return(
    <div className="bottom-container-container">
      <div className="bottom-container">
        <Box1Bottom />
        <Box2Bottom />
        <Box3Bottom />
      </div>
      <input className="placeholder-input" placeholder="change license number"/>
      <button className="placeholder">Save</button>
      <button className="placeholder">Reprint Renewal</button>
      <button className="placeholder">Print Record</button>
      <button className="placeholder">Print Certificate</button>
      <button className="placeholder">Cancel</button>

    </div>

  )
}

export default MainFormBottom
