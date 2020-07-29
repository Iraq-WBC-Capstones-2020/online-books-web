import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function AuthorPage() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="7" md="8" sm="9" size="12"><div style={{ backgroundColor: "yellow" }}>.col-md-7</div></MDBCol>
                <MDBCol lg="5" md="4" sm="3" size="12"><div style={{ backgroundColor: "blue" }}>.col-md-5</div></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
