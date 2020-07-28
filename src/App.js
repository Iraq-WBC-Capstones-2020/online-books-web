import React, { Suspense } from 'react';
import Spinner from './componenets/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <h1>Online Books</h1>
      </div>
    </Suspense>
  );
}

export default App;
