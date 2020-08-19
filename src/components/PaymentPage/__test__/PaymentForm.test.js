import React from 'react';
import renderer from 'react-test-renderer';
import PaymentForm from './../PaymentForm/PaymentForm';

test('PaymentForm snapshot', () => {
  const tree = renderer.create(<PaymentForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
