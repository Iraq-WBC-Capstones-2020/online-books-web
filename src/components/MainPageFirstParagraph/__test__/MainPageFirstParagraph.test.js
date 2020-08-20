import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './../MainPageFirstParagraph';

test('MainPageFirstParagraph snapshot', () => {
  const tree = renderer.create(<Paragraph />).toJSON();
  expect(tree).toMatchSnapshot();
});
