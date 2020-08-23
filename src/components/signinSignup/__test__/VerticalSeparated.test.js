import React from 'react';
import renderer from 'react-test-renderer';
import VerticalSeparated from './../VerticalSeparated';

test('VerticalSeparated snapshot', () => {
  const tree = renderer.create(<VerticalSeparated />).toJSON();
  expect(tree).toMatchSnapshot();
});
