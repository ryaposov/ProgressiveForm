import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Form from '../../components/Form';
import configureStore from '../../store';
import { updateField } from '../../store/actions';

configure({ adapter: new Adapter() });

describe('updateField', () => {
  let store, wrapper;

  beforeEach(() => {
    store = configureStore();
    wrapper = mount(<Provider store={store}><Form /></Provider>);
  });

  it('dispatch changes state correctly', () => {
    store.dispatch(updateField({ a: ['A1'] }));
    expect(JSON.stringify(store.getState().form.a))
      .toBe(JSON.stringify(['A1']));
  });
});
