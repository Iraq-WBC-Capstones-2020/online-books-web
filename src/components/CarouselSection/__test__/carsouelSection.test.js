import React from 'react';
import renderer from 'react-test-renderer';
import CarouselSection from '../CarouselSection';

test('CarouselSection snapshot', () => {
  const tree = renderer.create(<CarouselSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
