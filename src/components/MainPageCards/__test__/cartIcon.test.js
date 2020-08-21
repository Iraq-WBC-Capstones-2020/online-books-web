import React from 'react';
import renderer from 'react-test-renderer';
import CartIcon from './../cartIcon';

test('cartIcon snapshot', () => {
  const tree = renderer.create(<CartIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
