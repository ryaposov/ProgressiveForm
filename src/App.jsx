import React from 'react';
import { Provider } from 'react-redux';
import Form from './components/Form';

import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

export default App;
