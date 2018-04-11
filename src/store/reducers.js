import { combineReducers } from 'redux';
import { UPDATE_FIELD, SUBMIT_FORM } from './actions';

export const initialFormState = {
  a: [],
  b: '',
  username: '',
  c: '',
  confirmed: 0,
};

const initialSubmitState = {
  response: {},
  error: false,
};

function form(state = initialFormState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, action.field);
    default:
      return state;
  }
}

function submit(state = initialSubmitState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return Object.assign({}, state, action.response);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  form,
  submit,
});

export default rootReducer;
