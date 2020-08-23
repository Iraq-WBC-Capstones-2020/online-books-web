import React from 'react';
import renderer from 'react-test-renderer';
import AuthorComponenet from '../AuthorComponent';

test('AuthorPage snapshot', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
  }));
  const author = {
    name: 'Ann Druyan',
    avatar: 'https://via.placeholder.com/300x600',
    socialMedia: [
      { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com' },
      {
        name: 'Facebook',
        icon: 'facebook-square',
        link: 'https://www.facebook.com',
      },
      {
        name: 'Twitter',
        icon: 'twitter-square',
        link: 'https://www.twitter.com',
      },
    ],
    bio:
      'Ann Druyan is an Emmy and Peabody Award-winning writer and producer who has dedicated her life to science. In 1980, Ann, alongside late husband Carl Sagan, wrote the 1980 original COSMOS: A Personal Voyage — which was a 13-part television event on PBS. COSMOS is still one of the most-watched programs in the history of PBS and its airing was a major moment for science-themed television.',
  };
  const tree = renderer.create(<AuthorComponenet author={author} />).toJSON();
  expect(tree).toMatchSnapshot();
});
