import React from 'react';
import renderer from 'react-test-renderer';
import BooksRender from './../PaymentTable/BooksRender';

test('BookRender snapshot', () => {
  const tree = renderer.create(<BooksRender />).toJSON();
  expect(tree).toMatchSnapshot();
});
