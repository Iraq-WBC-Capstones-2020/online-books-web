import React from 'react';
import renderer from 'react-test-renderer';
import PaymentTable from './../PaymentTable';

test('PaymentTable snapshot', () => {
  const tree = renderer.create(<PaymentTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
