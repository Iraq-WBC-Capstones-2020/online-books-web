import React, { Suspense } from 'react';
import PaymentForm from './componenets/paymentForm/PaymentForm';

function App() {
  return (
    <Suspense>
      <div>
        <PaymentForm />
      </div>
    </Suspense>
  );
}

export default App;
