import React, { Suspense } from 'react';
import PaymentForm from './componenets/paymentForm/PaymentForm';
import Spinner from './componenets/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <h1>Online Books</h1>
        <PaymentForm />
      </div>
    </Suspense>
  );
}

export default App;
