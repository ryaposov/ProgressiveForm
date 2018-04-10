import React from 'react';
import PropTypes from 'prop-types';

class Step3 extends React.Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired,
  };

  confirm = (e) => {
    e.target.value = 1;
    this.props.onUpdate(e);

    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <legend>Step 3:</legend>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={this.props.data}
            onChange={this.props.onUpdate}
          />
        </label>
        <button
          name="confirmed"
          disabled={!this.props.data.length}
          onClick={this.confirm}
        >
          Confirm
        </button>
      </React.Fragment>
    );
  }
}

export default Step3;
