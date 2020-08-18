import React from 'react';
import renderer from 'react-test-renderer';
import VerticalSeparated from './../VerticalSeparated';

test('Clients snapshot', () => {
  const tree = renderer.create(<VerticalSeparated />).toJSON();
  expect(tree).toMatchSnapshot();
});
