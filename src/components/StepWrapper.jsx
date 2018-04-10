import React from 'react';
import PropTypes from 'prop-types';

const StepWrapper = ({ style, children }) => (
  <fieldset style={style}>
    {children}
  </fieldset>
);

StepWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StepWrapper;
