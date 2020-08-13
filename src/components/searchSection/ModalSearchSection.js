import React from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import SearchSection from '../searchSection/searchSection';
import PropTypes from 'prop-types';

function ModalSearchSection({ modal8, handelModel8 }) {
  return (
    <>
      <MDBModal
        isOpen={modal8}
        toggle={() => handelModel8(true)}
        fullHeight
        position="left"
        size="sm"
        contentClassName="bg-black"
      >
        <MDBModalHeader
          toggle={() => handelModel8(false)}
          className="border-b-0 py-0 mb-3"
        ></MDBModalHeader>
        <MDBModalBody className="bg-black">
          <SearchSection />
        </MDBModalBody>
      </MDBModal>
    </>
  );
}
ModalSearchSection.propTypes = {
  modal8: PropTypes.bool,
  handelModel8: PropTypes.func,
};
export default ModalSearchSection;
