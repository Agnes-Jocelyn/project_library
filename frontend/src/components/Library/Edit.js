import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal} from "react-bootstrap";

import { edit, hideEdit } from "./../../actioncreators/library";

const Edit = (props) => {
  const [data, setData] = useState({
    title: props.data.title,
    year: props.data.year,
    number: props.data.number,
    status: props.data.status,
  });

  const handleEdit = () => {
    props.edit(data);
  };

  const handleClose = () => {
    props.hideEdit();
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.currentTarget;
    if (type == "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  useEffect(() => {
      setData(props.data)
      console.log(props.data);
      
  }, [props.data]);

  return (
      <Modal show={props.isShowEdit} onHide={handleClose}>
          <Modal.Header closeButton className="bg-dark text-white">
              <Modal.Title>
                  Edit Book
              </Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Year</label>
                <input 
                type="number"
                className="form-control"
                id="year"
                name="year"
                value={data.year}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Number</label>
                <input 
                type="number"
                className="form-control"
                id="number"
                name="number"
                value={data.number}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label for="title">Status</label>
                <input 
                type="text"
                class="form-control"
                id="status"
                name="status"
                value={data.status}
                onChange={handleChange}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          Save
        </button>
        </Modal.Footer>
      </Modal>
  )

};

const mapStateToProps = (state) => {
    return {
        data: state.library.dataEdit,
        isShowEdit : state.library.isShowEdit
    }
}

const mapDispatchToProps = {
    edit, 
    hideEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)