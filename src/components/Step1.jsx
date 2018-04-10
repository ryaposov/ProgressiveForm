import React from 'react';
import PropTypes from 'prop-types';

const Step1 = ({ onUpdate, data }) => {
  const checked = name => Boolean(data.indexOf(name) > -1);

  return (
    <React.Fragment>
      <legend>Step 1:</legend>
      <label htmlFor="a1">
        A1
        <input
          type="checkbox"
          id="a1"
          name="a1"
          checked={checked('a1')}
          onChange={onUpdate}
        />
      </label>
      <label htmlFor="a2">
        A2
        <input
          type="checkbox"
          id="a2"
          name="a2"
          checked={checked('a2')}
          onChange={onUpdate}
        />
      </label>
    </React.Fragment>
  );
};

Step1.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Step1;
