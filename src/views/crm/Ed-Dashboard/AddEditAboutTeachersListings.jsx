import React from "react";
import { Row, Col, Label, Input } from "reactstrap";

import InputMask from "react-input-mask";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Formik } from "formik";
import UploadFile from "./UploadFile";
import {
  addTeacher,
  getTeacherById,
  updateTeacher,
} from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
class AddEditAboutTeachersListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      teacherData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      console.log("call api to get the about teachers using id", id);
      this.getTeacherForEdit(id);
    } else {
      this.setState({
        ...this.state,
        teacherData: {
          name: "",
          position: "",
          location: "",
          country: "",
          url: "",
          linkedIn: "",
          fileType: "",
        },
        
      });
     
    }
    
  }
 
  async getTeacherForEdit(id) {
    let teacherResp = await getTeacherById(id);
    teacherResp =
      teacherResp.data && teacherResp.data.data && teacherResp.data.data[0];
    this.setState({
      ...this.state,
      id,
      teacherData: {
        country: teacherResp.country,
        fileType: teacherResp.fileType,
        location: teacherResp.location,
        name: teacherResp.name,
        position: teacherResp.position,
        linkedIn: teacherResp.linkedIn,
        url: teacherResp.url,
      },
    });
    console.log("teacherResp", teacherResp);
  }

  async callTheApiToSaveAboutTeachersListing(body) {
    if (this.state.id) {
      console.log("call update about teachers api: ", this.state.id, body);
      body.teacherId = this.state.id;
      await updateTeacher(body);
    } else {
      console.log("call add about teachers api: ", this.state.id);
      await addTeacher(body);
    }
    this.props.history.push(`${BASEDIR}/crm/about-teachers/list`);
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">
                    Add / Edit About Teachers / Lecturers / Administrators
                    Listing
                  </h1>
                </div>
              </div>
              {this.state.teacherData && (
                <Formik
                  initialValues={this.state.teacherData}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Required";
                    }
                    if (!values.position) {
                      errors.position = "Required";
                    }
                    if (!values.location) {
                      errors.location = "Required";
                    }
                    if (!values.country) {
                      errors.country = "Required";
                    }
                    if (!values.url) {
                      errors.url = "Required";
                    }
                    console.log("errors", errors);
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("vivekkk", values);
                    //   callLogin(values, setSubmitting);
                    this.callTheApiToSaveAboutTeachersListing(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row margin-0">
                        <div className="col-12">
                          <section className="box ">
                            <header className="panel_header">
                              <h2 className="title float-left">
                                Edit information
                              </h2>
                            </header>
                            <div className="content-body">
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                                  <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname4">Name</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname4"
                                          placeholder=""
                                          name="name"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.name}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname4">
                                          Position
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname5"
                                          placeholder=""
                                          name="position"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.position}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname4">
                                          Location
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname6"
                                          placeholder=""
                                          name="location"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.location}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname4">
                                          Country
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname7"
                                          placeholder=""
                                          name="country"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.country}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <UploadFile
                                          accept={".png, .jpg, .jpeg"}
                                          editData={{
                                            url: values.url,
                                            fileType: values.fileType,
                                          }}
                                          uploadFileProp={(
                                            file,
                                            url,
                                            fileType
                                          ) => {
                                            setFieldValue("url", url);
                                            setFieldValue("fileType", fileType);
                                          }}
                                        ></UploadFile>
                                      </div>
                                       <div className="form-group col-md-12">
                                        <label htmlFor="inputname8">
                                          LinkedIn URL
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname8"
                                          placeholder="LinkedIn url"
                                          name="linkedIn"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.linkedIn}
                                        />
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      {this.state.id ? "Update" : "Save"}
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AddEditAboutTeachersListings;
