import React from 'react';
import renderer from 'react-test-renderer';
import Pills from '../Pills';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
test('Pills snapshot', () => {
  const history = createMemoryHistory();
  const tabs = [
    {
      title: 'profilePage.about',
      content: <div>about</div>,
    },
    {
      title: 'profilePage.purchaseHistory',
      content: <div>purchaseHistory</div>,
    },
  ];
  const tree = renderer
    .create(
      <Router history={history}>
        <Pills tabs={tabs} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
