import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from './../contactForm';

test('ContactForm snapshot', () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
