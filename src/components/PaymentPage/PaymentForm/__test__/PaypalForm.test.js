import React from 'react';
import renderer from 'react-test-renderer';
import PaypalForm from './../PaypalForm';

test('PaypalForm snapshot', () => {
  const tree = renderer.create(<PaypalForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
