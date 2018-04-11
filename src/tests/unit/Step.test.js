import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Step3 from '../../components/Step3';
import Step4 from '../../components/Step4';
import { initialFormState } from '../../store/reducers';

configure({ adapter: new Adapter() });

let state = Object.assign({}, initialFormState);

const onUpdate = (e) => {
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

  state = Object.assign({}, state, payload);
};

describe('Step', () => {
  it('#3 updates state on input', () => {
    const Step3Rendered = shallow(<Step3 onUpdate={onUpdate} data={initialFormState.a} />);
    Step3Rendered
      .find('input#username')
      .simulate('change', { target: { value: 'aaaaaaaaaa', name: 'username' } });
    expect(Step3Rendered.state('username')).toBe('aaaaaaaaaa');
  });

  it('#4 updates state on select change', () => {
    const Step4Rendered = shallow(<Step4 onUpdate={onUpdate} data={initialFormState.c} />);
    Step4Rendered
      .find('select#c')
      .simulate('change', { target: { value: 'C2', name: 'c' } });
    expect(state.c).toBe('C2');
  });
});
