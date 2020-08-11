import React from 'react';
import renderer from 'react-test-renderer';
import PurchaseHistory from '../PurchaseHistory';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
test('PurchaseHistory snapshot', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
  }));
  const history = createMemoryHistory();

  const tree = renderer
    .create(
      <Router history={history}>
        <PurchaseHistory />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
