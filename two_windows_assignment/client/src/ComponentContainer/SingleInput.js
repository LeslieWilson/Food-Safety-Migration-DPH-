import React from 'react';

const SingleInput = (props)=>(
  <div className="form-group">
  <label className="form-label">{props.title}</label>
  <input
  className={props.className}
  name={props.name}
  type="text"
  value={props.value}
  onChange={props.controlFunc}
  placeholder={props.placeholder} />
  </div>

);


// SingleInput.propTypes = {
//   inputType: React.Proptypes.oneOf(['text','number']).isRequired,
//   title: React.PropTypes.string.isRequired,
//   name: React.PropTypes.string.isRequired,
//   controlFUnc: React.Proptypes.func.isRequired,
//   content: ReactPropTypes.oneOfType([
//     React.PropTypes.string,
//     React.PropTypes.number,
//   ]).isRequired,
//   placeholder: React.PropTypes.string
// };

export default SingleInput;
