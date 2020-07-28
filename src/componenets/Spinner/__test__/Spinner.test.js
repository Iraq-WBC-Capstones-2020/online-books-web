import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './../Spinner';

test('renders spinner', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner />, div);
});
