import React from 'react';
import { MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
export default function VerticalSeparated() {
  return (
    <div class="mt-5 flex flex-col content-center h-auto">
      <div class="text-center">
        <div className="w-0 verline inline-block"></div>
      </div>
      <div className="h-20 text-center">
        <span className="h-20 w-20 bg-gray-100 inline-block rounded-full orr">
          or
        </span>
      </div>
      <div class="text-center">
        <div className="w-0 verline inline-block"></div>
      </div>
    </div>
  );
}
