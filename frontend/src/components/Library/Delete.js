import React from "react";
import { connect } from "react-redux";
import { Modal, ModalTitle, ModalBody } from "react-bootstrap";

import { deleteData, hideDelete } from "./../../actioncreators/library";

const Delete = (props) => {
  const handleDelete = () => {
    props.deleteData(props._id);
  };

  const handleClose = () => {
    props.hideDelete();
  };

  return (
    <Modal show={props.isShowDelete} onHide={handleClose}>
      <Modal.Header closeButton className="bg-danger text-white">
        <Modal.Title>Delete Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this book ?</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          No
        </button>
        <button className="btn btn-primary" onClick={handleDelete}>
          Yes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowDelete: state.library.isShowDelete,
    data: state.library.deletedata,
  };
};

const mapDispatchToProps = { deleteData, hideDelete };

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
