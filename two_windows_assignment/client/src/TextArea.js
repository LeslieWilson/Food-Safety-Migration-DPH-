import React from 'react';

const TextArea = (props) =>(
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-input"
      style={props.resize ? null : {resize:'none'}}
      name={props.name}
      rows={props.rows}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder} />

  </div>
);

TextArea.propTypes = {
  title: React.PropTypes.string.isRequired,
  rows: React.PropTypes.number.isRequired
  name: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  resize: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  controlFunc:ReactPropTypes.func.isRequired
};

export default TextArea;
