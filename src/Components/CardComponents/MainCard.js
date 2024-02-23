import React from 'react'
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRipple,
    MDBRow,
  } from "mdb-react-ui-kit";
    
function MainCard() {
  return (<MDBContainer className="py-5">
  <MDBRow className="gx-5">
    <MDBCol md="6" className="mb-4">
      <MDBRipple
        className="bg-image hover-overlay ripple shadow-2-strong "
        rippleTag="div"
        rippleColor="light"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/25/Call_of_Duty_Black_Ops_-_Teaser_Logo.jpg"
          className="w-100"
          alt=''
        />
        <a href="google.com">
          <div
            className="mask"
            style={{ backgroundColor: "pink" }}
          ></div>
        </a>
      </MDBRipple>
    </MDBCol>
    <MDBCol md="6" className="mb-4">
      <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
        News of the day
      </span>
      <h4>
        <strong>Facilis consequatur eligendi</strong>
      </h4>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur eligendi quisquam doloremque vero ex debitis veritatis
        placeat unde animi laborum sapiente illo possimus, commodi
        dignissimos obcaecati illum maiores corporis.
      </p>
      {/*Button*/}
      <MDBBtn style={{}}>Read More</MDBBtn>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default MainCard