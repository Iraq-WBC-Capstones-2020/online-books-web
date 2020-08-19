import React from 'react';
import renderer from 'react-test-renderer';
import Form from './../Form';

test('Form snapshot', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
