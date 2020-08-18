import React from 'react';
import renderer from 'react-test-renderer';
import Form from './../Form';

test('Clients snapshot', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
