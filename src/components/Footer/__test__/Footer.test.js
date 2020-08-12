import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './../Footer';
import { useTranslation } from 'react-i18next';
test('Footer snapshot', () => {
  useTranslation().t = jest.fn().mockImplementation((key) => {
    if (key === 'footer.tagsList') {
      return ['Shop', 'Books', 'Online', 'Read', 'Knowledge'];
    }
    return key;
  });
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
