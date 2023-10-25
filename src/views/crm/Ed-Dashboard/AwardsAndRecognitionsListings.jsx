import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
// import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  deleteAwardsAndRecognition,
  getAwardsAndRecognitions,
} from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
// const header = [
//   { title: "ID", prop: "id", sortable: true, filterable: true },
//   { title: "Name", prop: "name", sortable: true, filterable: true },
//   { title: "Company", prop: "company", sortable: true, filterable: true },
//   { title: "Email", prop: "email", sortable: true, filterable: true },
//   { title: "Phone", prop: "phone", sortable: true, filterable: true },
//   { title: "Added on", prop: "date", sortable: true, filterable: true },
// ];

const awardsAndRecognitions = [
  {
    title: "Dr John Harrison",
    url: "/assets/images/png/john_harrison.jpeg",
    fileType: "image/jpeg",
  },
  {
    title: "Dr Vishal Varia",
    url: "/assets/images/png/vishal_varia.jpeg",
    fileType: "image/jpeg",
  },
];

class AwardsAndRecognitionsListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awardsAndRecognitionsData: [],
    };
    this.getAwardsAndRecognition = this.getAwardsAndRecognition.bind(this);
  }

  async deleteAwardsAndRecognitionsListing(id, index) {
    console.log("delete about AwardsAndRecognitions listing: ", id);
    await deleteAwardsAndRecognition({ awardsAndRecognitionId: id });
    // let data = this.state.awardsAndRecognitionsData;
    // data = data.splice(index, 1);
    // this.setState({
    //   ...this.state,
    //   awardsAndRecognitionsData: data,
    // });
    this.getAwardsAndRecognition();
  }

  async getAwardsAndRecognition() {
    try {
      const resp = await getAwardsAndRecognitions();
      this.setState({
        ...this.state,
        awardsAndRecognitionsData: resp.data.data,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getAwardsAndRecognition();
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

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">
                      Awards And Recognitions
                    </h2>
                    <Link to={`${BASEDIR}/crm/awards-and-recognitions/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 row dt-disp">
                        {this.state.awardsAndRecognitionsData.map(
                          ({ _id, title, url, fileType }) => (
                            <div className="col-lg-12 row border align-items-center my-2">
                              <div className="col-6">
                                <div>{_id}</div>
                                <div>{title}</div>
                                {fileType.includes("image") && (
                                  <img
                                    className="icon w-100"
                                    height="300px"
                                    alt=""
                                    src={url}
                                  />
                                )}
                                {fileType.includes("video") && (
                                  <video
                                    width="320"
                                    src={url}
                                    height="240"
                                    controls
                                  >
                                    {/* Your browser does not support the video tag. */}
                                  </video>
                                )}
                                {fileType.includes("youtube") && (
                                  <iframe
                                    src={url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                    // className="w-100"
                                    height="300px"
                                  />
                                )}
                              </div>
                              <div className="col-6">
                                <i
                                  className="i-trash icon-xs pointer mr-3"
                                  onClick={() => {
                                    this.deleteAwardsAndRecognitionsListing(
                                      _id
                                    );
                                  }}
                                ></i>{" "}
                                <Link
                                  to={`${BASEDIR}/crm/awards-and-recognitions/edit/${_id}`}
                                >
                                  <i className="i-note icon-xs pointer"></i>{" "}
                                </Link>
                              </div>
                            </div>
                          )
                        )}
                        {/* <Datatable
                          tableHeader={header}
                          tableBody={body}
                          keyName="userTable"
                          tableClass="striped table-hover table-responsive"
                          rowsPerPage={10}
                          rowsPerPageOption={[5, 10, 15, 20]}
                          initialSort={{ prop: "id", isAscending: true }}
                          onSort={onSortFunction}
                          labels={customLabels}
                        /> */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AwardsAndRecognitionsListings;
