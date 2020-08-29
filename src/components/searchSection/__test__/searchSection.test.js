import React from 'react';
import renderer from 'react-test-renderer';

import SearchSection from '../searchSection';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

test('searchSection snapshot', () => {
  const store = mockStore({
    myState: 'sample text',
  });
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchSection authors={[]} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
