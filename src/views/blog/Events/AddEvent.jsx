import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

//import InputMask from 'react-input-mask';

import "react-datepicker/dist/react-datepicker.css";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
//import htmlToDraft from 'html-to-draftjs';
import { Formik } from "formik";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addEvents, uploadCVAPI } from "../../../Services/api";

//import { convertFromRaw } from 'draft-js';

//const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
var BASEDIR = process.env.REACT_APP_BASEDIR;

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    //const contentState = convertFromRaw(content);
    this.state = {
      imageURL: "",
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(content) {
    this.setState({
      editorState: content,
    });
  }

  async addEventAPI(data, setSubmitting) {
    try {
      if (!this.state.imageURL) {
        return;
      }
      const request = {
        ...data,
        image: this.state.imageURL,
        data: JSON.stringify(
          convertToRaw(this.state.editorState.getCurrentContent())
        ),
      };

      const apiResp = await addEvents(request);
      console.log("apiResp :>> ", apiResp);
      this.props.history.push(`${BASEDIR}/crm/events/list`);
    } catch (error) {
      console.log("error :>> ", error);
    }
    setSubmitting(false);
  }

  async uploadImage(e) {
    try {
      let formData = new FormData();
      formData.append("admin", true);
      formData.append("file", e.target.files[0]);
      const uploadCvResponse = await uploadCVAPI(formData);
      const url = uploadCvResponse.data.data;
      this.state.imageURL = url;
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  render() {
    const { editorState } = this.state;
    // const { contentState } = this.state;

    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Add Event</h1>
                </div>
              </div>
              <div className="row margin-0">
                <div className="col-12">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Basic Info</h2>
                    </header>
                    <div className="content-body">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                          <Formik
                            initialValues={{
                              title: "",
                              description: "",
                            }}
                            validate={(values) => {
                              const errors = {};
                              if (!values.title) {
                                errors.title = "Required";
                              }
                              if (!values.description) {
                                errors.description = "Required";
                              }
                              return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                              setSubmitting(true);
                              this.addEventAPI(values, setSubmitting);
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
                                <div className="form-row">
                                  <div className="form-group col-md-12">
                                    <label htmlFor="inputname4">
                                      Event title
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
                                    <label htmlFor="inputname4">
                                      Event description
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputname4"
                                      placeholder=""
                                      name="description"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.description}
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label
                                      className="form-label"
                                      htmlFor="field-1"
                                    >
                                      Event Editor
                                    </label>
                                    <div>
                                      <Editor
                                        editorState={editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        onEditorStateChange={
                                          this.onEditorStateChange
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group col-md-12">
                                    <Label htmlFor="exampleFile">
                                      Featured Image
                                    </Label>
                                    <Input
                                      type="file"
                                      name="file"
                                      id="exampleFile"
                                      multiple={false}
                                      onChange={(e) => {
                                        this.uploadImage(e);
                                      }}
                                    />
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Save
                                </button>
                              </form>
                            )}
                          </Formik>{" "}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AddEvent;
