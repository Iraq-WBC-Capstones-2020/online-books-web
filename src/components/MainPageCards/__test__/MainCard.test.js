import React from 'react';
import renderer from 'react-test-renderer';
import Cards from './../MainCard';

test('MainCard snapshot', () => {
  const tree = renderer.create(<Cards />).toJSON();
  expect(tree).toMatchSnapshot();
});
