import React from 'react';
import PropTypes from 'prop-types';

const Step4 = ({ onUpdate }) => (
  <React.Fragment>
    <legend>Step 3:</legend>
    <label htmlFor="c">
      <select id="c" name="c" onChange={onUpdate}>
        <option value="">No value</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="C3">C3</option>
      </select>
    </label>
  </React.Fragment>
);

Step4.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default Step4;
