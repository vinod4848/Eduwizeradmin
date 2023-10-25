import React from "react";
import { Row, Col, Label, Input } from "reactstrap";

import InputMask from "react-input-mask";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Formik } from "formik";
import {
  addTestimonial,
  getTestimonialById,
  updateTestimonial,
} from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
class AddEditTestimonialsListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      testimonialData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      console.log("call api to get the about Testimonials using id", id);
      this.getTestimonialForEdit(id);
    } else {
      this.setState({
        ...this.state,
        testimonialData: {
          name: "",
          title: "",
          rating: 5,
          date: "",
          description: "",
        },
      });
    }
  }

  async getTestimonialForEdit(id) {
    let testimonialResp = await getTestimonialById(id);
    testimonialResp =
      testimonialResp.data &&
      testimonialResp.data.data &&
      testimonialResp.data.data[0];
    this.setState({
      ...this.state,
      id,
      testimonialData: {
        name: testimonialResp.name,
        title: testimonialResp.title,
        rating: testimonialResp.rating,
        date: testimonialResp.date,
        description: testimonialResp.description,
      },
    });
    console.log("testimonialResp", testimonialResp);
  }

  async callTheApiToSaveTestimonialsListing(body) {
    if (this.state.id) {
      console.log("call update about testimonials api: ", this.state.id, body);
      body.testimonialId = this.state.id;
      await updateTestimonial(body);
    } else {
      console.log("call add about testimonials api: ", this.state.id);
      await addTestimonial(body);
    }
    this.props.history.push(`${BASEDIR}/crm/testimonials/list`);
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Testimonials</h1>
                </div>
              </div>
              {this.state.testimonialData && (
                <Formik
                  initialValues={this.state.testimonialData}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Required";
                    }
                    // if (!values.title) {
                    //   errors.title = "Required";
                    // }
                    if (!values.rating) {
                      errors.rating = "Required";
                    }
                    if (!values.date) {
                      errors.date = "Required";
                    }
                    if (!values.description) {
                      errors.description = "Required";
                    }
                    console.log("errors", errors);
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("vivekkk", values);
                    //   callLogin(values, setSubmitting);
                    this.callTheApiToSaveTestimonialsListing(values);
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
                                        <label htmlFor="inputname5">
                                          Title
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname5"
                                          placeholder=""
                                          name="title"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.title}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname6">
                                          Rating
                                        </label>
                                        <input
                                          type="number"
                                          min={0}
                                          max={5}
                                          maxLength={1}
                                          className="form-control"
                                          id="inputname6"
                                          placeholder=""
                                          name="rating"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.rating}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname7">Date</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname7"
                                          placeholder=""
                                          name="date"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.date}
                                        />
                                      </div>
                                      <div className="form-group col-md-12">
                                        <label htmlFor="inputname8">
                                          Description
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname8"
                                          placeholder=""
                                          name="description"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.description}
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

export default AddEditTestimonialsListings;
