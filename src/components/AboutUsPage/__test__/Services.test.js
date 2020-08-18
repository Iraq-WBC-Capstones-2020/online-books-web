import React from 'react';
import renderer from 'react-test-renderer';
import Services from './../Services';

test('Clients snapshot', () => {
  const tree = renderer.create(<Services />).toJSON();
  expect(tree).toMatchSnapshot();
});
