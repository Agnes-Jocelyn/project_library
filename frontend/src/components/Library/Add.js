import React, { useState } from "react";
import { connect } from "react-redux";
import './Style.css'
import {Formik, Form} from 'formik'

import {add} from './../../actioncreators/library'


const Add = (props) => {
  const [data, setData] = useState({
    title: "",
    year: "",
    status: "",
    number: "",
  });

  const handleAdd = () => {
    props.add(data);
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

  return (
    <div>
      <div className="container">
        <div className="col-sm-6">
          <div className="card" style={{ width: "30rem" }}>
              <h4>Add Book</h4>
            <div className="form-group">
                <label for="title">Title</label>
                <input 
                type="text"
                class="form-control"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="title">Year</label>
                <input 
                type="number"
                class="form-control"
                id="year"
                name="year"
                value={data.year}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="title">Number</label>
                <input 
                type="number"
                class="form-control"
                id="number"
                name="number"
                value={data.number}
                onChange={handleChange}/>
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
        <button type="button" class="btn btn-outline-info" onClick={handleAdd}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {add};

export default connect(null, mapDispatchToProps)(Add);