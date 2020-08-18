import React from 'react';
import renderer from 'react-test-renderer';
import PaymentForm from './../PaymentForm/PaymentForm';

test('Clients snapshot', () => {
  const tree = renderer.create(<PaymentForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
