import React from 'react';
import renderer from 'react-test-renderer';
import BookPage from './../BookPage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { HashRouter } from 'react-router-dom';
test('BookPage snapshot', () => {
  const book = {
    id: '8rUj3F4ArUpPJSVMOORC',
    name: 'The Water Cure',
    type: 'Fiction',
    price: 15000,
    dis_count: null,
    cover: 'https://lithub.com/wp-content/uploads/2019/01/81SBy9jbbHL.jpg',
    have_audio: true,
    description:
      'There is a house on an island, alone by the sea. Inside live three girls, Grace, Lia and Sky, with their parents Mother and King. Outside, beyond the sea and the horizon, there is a “toxin‑filled world”. To understand what toxins are, and indeed for their knowledge of everything else, the girls have always deferred to King. Their world is complete. And then, one day, he is gone.',
    audio_ref:
      'https://firebasestorage.googleapis.com/v0/b/bookszone-49e46.appspot.com/o/toyshop_harrison_cs_64kb.mp3?alt=media&token=7dc02842-a4fe-4d38-81c4-488195e72a64',
    author_id: 'ZKhfB8jcxaGKaeOUaUyR',
    author_name: 'Sophie Mackintosh',
    released_date: firebase.firestore.Timestamp.fromMillis(1000000),
    views: '22k',
    rating: 2.5,
    ref: null,
    tags: 'Magic',
  };
  const tree = renderer
    .create(
      <HashRouter>
        <BookPage book={book} />
      </HashRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
