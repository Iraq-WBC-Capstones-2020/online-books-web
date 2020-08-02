import React from 'react';
import './paymentTable.scss';
import { MDBContainer,MDBRow,MDBCol,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default function PaymentTable(){
    const books =  [{
          title:"book1",
          copies: 1 ,
          price : "$",
        },
        {
          title:"book2",
          copies: 1 ,
          price : "$",
        },
        {
          title:"book3",
          copies: 1 ,
          price : "$",
        }
      ];
      const paymentTable = {
        booksOrder : 'Your Books Order',
        books :'Books',
        copies :'Copies',
        price :'Price',
        total :'Total',
      }
        
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="4">
        <div className="text-center">
   <p className="h5 mt-5 gray-text">{paymentTable.booksOrder}</p>
   <hr className="border-4 my-3 mx-5 bg-primary"></hr>
   </div>
    <MDBTable >
      <MDBTableHead  >
        <tr>
          <th></th>
          <th>{paymentTable.books}</th>
          <th>{paymentTable.copies}</th>
          <th>{paymentTable.price}</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {books.map(book=>{
          return (
            <tr>
            <td ><input type="checkbox"/></td>
            <td>{book.title}</td>
            <td>{book.copies}</td>
            <td>{book.price}</td>
            </tr>
              )
        })}
        <tr>
            <td></td>
            <td><p className ="h6">{paymentTable.total}</p></td>
            <td>{books.copies}</td>
            <td>{books.price}</td>
            </tr>
      </MDBTableBody>
    </MDBTable>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
}