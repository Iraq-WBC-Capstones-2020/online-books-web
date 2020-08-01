import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './../Spinner';

test('Spinner snapshot', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
