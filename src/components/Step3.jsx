import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../helpers';
import { validate } from '../api';

class Step3 extends React.Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    validation: {
      err: false,
      msg: '',
    },
    loading: false,
  }

  onChange = (e) => {
    const username = e.target.value;
    this.setState({ username });
    if (username) {
      this.setState({ loading: true }, () => this.validateInput(username));
    }
  }

  validateInput = debounce((value) => {
    validate(value)
      .then((res) => {
        this.props.onUpdate({ target: { name: 'username', value } });
        this.setState({
          loading: false,
          validation: {
            err: false,
            msg: res,
          },
        });
      })
      .catch((err) => {
        this.props.onUpdate({ target: { name: 'username', value: '' } });
        this.setState({
          loading: false,
          validation: {
            err: true,
            msg: err.toString(),
          },
        });
      });
  }, 1000)

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
            value={this.state.username}
            onChange={this.onChange}
          />
        </label>
        <button
          name="confirmed"
          disabled={this.state.validation.err || !this.state.username || this.state.loading}
          onClick={this.confirm}
        >
          Confirm
        </button>
        {this.state.validation.err && <p>{this.state.validation.msg}</p>}
      </React.Fragment>
    );
  }
}

export default Step3;
