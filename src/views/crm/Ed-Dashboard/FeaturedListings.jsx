import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
// import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteFeaturedList, getFeaturedLists } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;

const featuredListings = [
  {
    id: 1,
    url: "",
    fileType: "",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/axOT0bGr8gI",
    fileType: "youtube",
  },
];

const customLabels = {
  first: "<<",
  last: ">>",
  prev: "<",
  next: ">",
  show: "Display ",
  entries: " rows",
  noResults: "There is no data to be displayed",
};

class FeaturedListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredListsData: [],
    };
    this.getFeaturedList = this.getFeaturedList.bind(this);
  }
  async deleteFeaturedListing(id, index) {
    console.log("delete Featured Listing: ", id);
    await deleteFeaturedList({ featuredListId: id });
    // let data = this.state.featuredListsData;
    // data = data.splice(index, 1);
    // this.setState({
    //   ...this.state,
    //   featuredListsData: data,
    // });
    this.getFeaturedList();
  }

  async getFeaturedList() {
    try {
      const resp = await getFeaturedLists();
      this.setState({ ...this.state, featuredListsData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getFeaturedList();
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Featured Listings</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">All Featured Listings</h2>
                    <div className="title">
                      <Link to={`${BASEDIR}/crm/featured-listings/add`}>
                        {" "}
                        <button className="btn btn-primary">
                          {" "}
                          Add New
                        </button>{" "}
                      </Link>
                    </div>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 row dt-disp">
                        {this.state.featuredListsData.map(
                          ({ _id, url, fileType }) => (
                            <div className="col-lg-12 row border align-items-center my-2">
                              <div className="col-lg-6 col-sm-12">
                                <div>{_id}</div>
                                {fileType.includes("image") && (
                                  <img
                                    className="icon w-100"
                                    height="100%"
                                    width="100%"
                                    alt=""
                                    src={url}
                                  />
                                )}
                                {fileType.includes("video") && (
                                  <video
                                    src={url}
                                    height="100%"
                                    width="100%"
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
                                    height="100%"
                                    width="100%"
                                  />
                                )}
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <i
                                  className="i-trash icon-xs pointer mr-3"
                                  onClick={() => {
                                    this.deleteFeaturedListing(_id);
                                  }}
                                ></i>{" "}
                                &nbsp;
                                {/* <button className="btn btn-danger w-100">Delete</button> */}
                                <Link
                                  to={`${BASEDIR}/crm/featured-listings/edit/${_id}`}
                                >
                                  <i className="i-note icon-xs pointer"></i>{" "}
                                  &nbsp;
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

export default FeaturedListings;
