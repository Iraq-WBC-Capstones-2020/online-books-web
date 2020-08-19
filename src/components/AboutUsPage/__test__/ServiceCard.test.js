import React from 'react';
import renderer from 'react-test-renderer';
import ServiceCard from './../ServiceCard';

test('ServiceCard snapshot', () => {
  const tree = renderer.create(<ServiceCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
