import * as api from '../api';

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export function updateFieldCall(field) {
  return {
    type: UPDATE_FIELD,
    field,
  };
}

export function submitFormCall(response) {
  return {
    type: SUBMIT_FORM,
    response,
  };
}

export function updateField(field) {
  return dispatch => dispatch(updateFieldCall(field));
}

export function submitForm(data) {
  return (dispatch) => {
    return api.submit(data)
      .then(response => dispatch(submitFormCall({
        error: false,
        response: {
          msg: 'ok',
          body: response
        },
      })))
      .catch(err => dispatch(submitFormCall({
        error: true,
        response: {
          msg: err.toString()
        }
      })))
  };
}
