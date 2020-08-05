import React from 'react';
import renderer from 'react-test-renderer';
import AuthorPage from '../AuthorPage';

test('AuthorPage snapshot', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
  }));
  const tree = renderer.create(<AuthorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
