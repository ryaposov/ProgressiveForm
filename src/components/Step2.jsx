import React from 'react';
import PropTypes from 'prop-types';

const Step2 = ({ onUpdate, data }) => (
  <React.Fragment>
    <legend>Step 2:</legend>
    <button
      name="b1"
      disabled={data == 'b1'}
      onClick={onUpdate}
    >
      B1
    </button>
    <button
      name="b2"
      disabled={data == 'b2'}
      onClick={onUpdate}
    >
      B2
    </button>
  </React.Fragment>
);

Step2.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default Step2;
