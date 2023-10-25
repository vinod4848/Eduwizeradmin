import React from "react";
import { Row, Col, Label, Input } from "reactstrap";

import InputMask from "react-input-mask";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Formik } from "formik";
import UploadFile from "./UploadFile";
import {
  addAwardsAndRecognition,
  getAwardsAndRecognitionById,
  updateAwardsAndRecognition,
} from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
class AddEditAwardsAndRecognitionsListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      awardsAndRecognitionData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      console.log(
        "call api to get the about AwardsAndRecognitions using id",
        id
      );
      this.getAwardsAndRecognitionForEdit(id);
    } else {
      this.setState({
        ...this.state,
        awardsAndRecognitionData: {
          title: "",
          url: "",
          fileType: "",
        },
      });
    }
  }

  async getAwardsAndRecognitionForEdit(id) {
    let awardsAndRecognitionResp = await getAwardsAndRecognitionById(id);
    awardsAndRecognitionResp =
      awardsAndRecognitionResp.data &&
      awardsAndRecognitionResp.data.data &&
      awardsAndRecognitionResp.data.data[0];
    this.setState({
      ...this.state,
      id,
      awardsAndRecognitionData: {
        title: awardsAndRecognitionResp.title,
        fileType: awardsAndRecognitionResp.fileType,
        url: awardsAndRecognitionResp.url,
      },
    });
    console.log("awardsAndRecognitionResp", awardsAndRecognitionResp);
  }

  async callTheApiToSaveAwardsAndRecognitionsListing(body) {
    if (this.state.id) {
      console.log(
        "call update about AwardsAndRecognitions api: ",
        this.state.id,
        body
      );
      body.awardsAndRecognitionId = this.state.id;
      await updateAwardsAndRecognition(body);
    } else {
      console.log("call add about AwardsAndRecognitions api: ", this.state.id);
      await addAwardsAndRecognition(body);
    }
    this.props.history.push(`${BASEDIR}/crm/awards-and-recognitions/list`);
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Awards And Recognitions</h1>
                </div>
              </div>
              {this.state.awardsAndRecognitionData && (
                <Formik
                  initialValues={this.state.awardsAndRecognitionData}
                  validate={(values) => {
                    const errors = {};
                    if (!values.title) {
                      errors.title = "Required";
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
                    this.callTheApiToSaveAwardsAndRecognitionsListing(values);
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
                                        <label htmlFor="inputname4">
                                          Title
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputname4"
                                          placeholder=""
                                          name="title"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.title}
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

export default AddEditAwardsAndRecognitionsListings;
