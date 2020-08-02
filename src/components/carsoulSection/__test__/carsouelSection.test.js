import React from 'react';
import renderer from 'react-test-renderer';
import CarsoulSection from './../carsoulSection';

test('CarsoulSection snapshot', () => {
  const tree = renderer.create(<CarsoulSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
