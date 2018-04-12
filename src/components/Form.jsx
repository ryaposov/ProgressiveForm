import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateField, submitForm } from '../store/actions';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Steps = [
  {
    key: 'a',
    Component: Step1,
  },
  {
    key: 'b',
    Component: Step2,
  },
  {
    key: 'username',
    Component: Step3,
  },
  {
    key: 'c',
    Component: Step4,
  },
];

class Form extends React.Component {
  static propTypes = {
    updateField: PropTypes.func.isRequired,
    form: PropTypes.shape({
      a: PropTypes.array,
      b: PropTypes.string,
      username: PropTypes.string,
      confirmed: PropTypes.int,
      c: PropTypes.string,
    }).isRequired,
    submit: PropTypes.shape({
      error: PropTypes.boolean,
      response: PropTypes.object,
    }).isRequired,
    submitForm: PropTypes.func.isRequired,
  };

  // Main function to update
  // all fields in the form
  onUpdate = (e) => {
    let payload = {};

    switch (e.target.name) {
      case 'a1':
      case 'a2': {
        const value = [].concat(this.props.form.a);
        const exists = value.indexOf(e.target.name);

        value.splice(exists, exists > -1 ? 1 : 0);
        if (exists < 0) value.push(e.target.name);

        payload = { a: value };
        break;
      }
      case 'b1':
      case 'b2':
        payload = { b: e.target.name };
        break;
      case 'username':
      case 'confirmed':
      case 'c':
        payload = { [e.target.name]: e.target.value };
        break;
      default:
    }

    this.props.updateField(payload);
  }

  // Call API on form submit
  formSubmit = (e) => {
    this.props.submitForm(this.props.form);
    e.preventDefault();
  }

  // Rules for form fields to be valid
  rulesValid = (start = 0, end = 0) => {
    const rulesSet = [
      this.stepData(0).length, // At least one item in array needed
      this.stepData(1).length, // Selected button name as string
      this.stepData(2).trim().length && this.props.form.confirmed,
      // Username shouldn't be empty
      // Confirm should be clicked
      this.stepData(3).length, // Select should have a value
    ];

    return rulesSet.slice(start, end).every(rule => (rule));
  }

  // Style for each form step
  stepStyle = i => (this.rulesValid(0, i) ? null : { display: 'none' })

  // Step data
  stepData = i => (this.props.form[Object.keys(this.props.form)[i]])

  render() {
    return (
      <form name="mainForm">
        {Steps.map((Step, i) => (
          <fieldset key={Step.key} style={this.stepStyle(i)}>
            <Step.Component data={this.stepData(i)} onUpdate={this.onUpdate} />
          </fieldset>
        ))}
        <button disabled={!this.rulesValid(0, 4)} onClick={this.formSubmit}>Submit</button>
        {this.props.submit.error && <p>{this.props.submit.response.msg}</p>}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    submit: state.submit,
  };
}

export default connect(mapStateToProps, { updateField, submitForm })(Form);
