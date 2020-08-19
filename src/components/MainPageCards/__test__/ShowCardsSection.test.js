import React from 'react';
import renderer from 'react-test-renderer';
import ShowCardsSection from './../ShowCardsSection';

test('ShowCardsSection snapshot', () => {
  const tree = renderer.create(<ShowCardsSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
