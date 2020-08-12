import React from 'react';
import renderer from 'react-test-renderer';
import Detailsclient from './../Clients';

test('Clients snapshot', () => {
  const tree = renderer.create(<Detailsclient />).toJSON();
  expect(tree).toMatchSnapshot();
});
