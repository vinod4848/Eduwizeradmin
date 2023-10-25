import { Formik } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Input, Label, Row } from "reactstrap";
import {
  addFeaturedList,
  getFeaturedListById,
  updateFeaturedList,
  uploadCVAPI,
} from "../../../Services/api";
import UploadFile from "./UploadFile.jsx";
import UploadYouTubeVideo from "./UploadYouTubeVideo.jsx";
var BASEDIR = process.env.REACT_APP_BASEDIR;

class AddFeaturedListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      featuredListingData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      console.log("call api to get the about featured listing using id", id);
      this.getFeaturedListingForEdit(id);
    } else {
      this.setState({
        ...this.state,
        featuredListingData: {
          url: "",
          fileType: "",
        },
      });
    }
  }

  async getFeaturedListingForEdit(id) {
    let featuredListingResp = await getFeaturedListById(id);
    featuredListingResp =
      featuredListingResp.data &&
      featuredListingResp.data.data &&
      featuredListingResp.data.data[0];
    this.setState({
      ...this.state,
      id,
      featuredListingData: {
        fileType: featuredListingResp.fileType,
        url: featuredListingResp.url,
      },
    });
    console.log("featuredListingResp", featuredListingResp);
  }

  async callTheApiToSaveTheFeaturedListing(body) {
    if (this.state.id) {
      console.log("call update featured listing api: ", this.state.id);
      body.featuredListId = this.state.id;
      await updateFeaturedList(body);
    } else {
      console.log("call add featured listing api: ", this.state.id);
      await addFeaturedList(body);
    }
    console.log("body", body);
    this.props.history.push(`${BASEDIR}/crm/featured-listings/list`);
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Add A Featured Listing</h1>
                </div>
              </div>
              {this.state.featuredListingData && (
               <Formik
               initialValues={this.state.featuredListingData}
               validate={(values) => {
                 const errors = {};
                 if (!values.url) {
                   errors.url = "Required";
                 }
                 console.log("errors", errors);
                 return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                 setSubmitting(true);
                 console.log("vivekkk", values);
                 this.callTheApiToSaveTheFeaturedListing(values);
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
                           <h2 className="title float-left">Edit information</h2>
                         </header>
                         <div className="content-body">
                           <div className="row">
                             <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                               <form onSubmit={handleSubmit}>
                                 <div className="form-row">
                                   <div className="form-group col-md-12">
                                     {/* Use the UploadFile component for image uploads */}
                                     <UploadFile
                                       accept={".png, .jpg, .jpeg, video/*"}
                                       editData={{
                                         url: values.url,
                                         fileType: values.fileType,
                                       }}
                                       uploadFileProp={(file, url, fileType) => {
                                         setFieldValue("url", url);
                                         setFieldValue("fileType", fileType);
                                       }}
                                     ></UploadFile>
             
                                     {/* Use the UploadYouTubeVideo component for YouTube video uploads */}
                                     <UploadYouTubeVideo
                                       editData={{
                                         url: values.url,
                                         fileType: values.fileType,
                                       }}
                                       uploadVideoProp={(file, url, fileType) => {
                                         setFieldValue("url", url);
                                         setFieldValue("fileType", fileType);
                                       }}
                                     ></UploadYouTubeVideo>
                                   </div>
                                 </div>
                                 <button type="submit" className="btn btn-primary">
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

export default AddFeaturedListings;
