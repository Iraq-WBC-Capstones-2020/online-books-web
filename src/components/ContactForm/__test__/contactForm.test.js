import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from './../contactForm';

test('Clients snapshot', () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
