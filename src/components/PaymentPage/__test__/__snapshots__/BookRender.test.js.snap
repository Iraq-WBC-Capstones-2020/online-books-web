import React from 'react';
import renderer from 'react-test-renderer';
import BooksRender from './../PaymentTable/BooksRender';

test('Clients snapshot', () => {
  const tree = renderer.create(<BooksRender />).toJSON();
  expect(tree).toMatchSnapshot();
});
