import React from 'react';
import renderer from 'react-test-renderer';
import ProfilePage from '../ProfilePage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
test('ProfilePage snapshot', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
  }));
  const history = createMemoryHistory();

  const tree = renderer
    .create(
      <Router history={history}>
        <ProfilePage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
