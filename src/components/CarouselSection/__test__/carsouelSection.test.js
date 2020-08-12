import React from 'react';
import renderer from 'react-test-renderer';
import CarsouelSection from '../carsouelSection';

test('CarsoulSection snapshot', () => {
  const tree = renderer.create(<CarsouelSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
