import React from 'react';
import './i18n';
import BookPagewithLogin from './components/bookPageWithLogin.js';
import BookPageWithOutLogin from './components/bookPageWithoutLogin';
import AudioPage from './pages/BookPage/AudioSectionParagraph';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <BookPageWithOutLogin />
      <BookPagewithLogin />
      <AudioPage />
      <Footer />
    </div>
  );
}

export default App;
