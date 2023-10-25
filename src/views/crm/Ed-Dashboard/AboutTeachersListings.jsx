import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
// import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteTeacher, getTeachers } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
// const header = [
//   { title: "ID", prop: "id", sortable: true, filterable: true },
//   { title: "Name", prop: "name", sortable: true, filterable: true },
//   { title: "Company", prop: "company", sortable: true, filterable: true },
//   { title: "Email", prop: "email", sortable: true, filterable: true },
//   { title: "Phone", prop: "phone", sortable: true, filterable: true },
//   { title: "Added on", prop: "date", sortable: true, filterable: true },
// ];

const aboutTeachers = [
  {
    id: 1,
    name: "Dr Shubhadeep Chakraborty",
    position: "Associate Professor of Finance & Head of IQAC",
    location: "SRM University, Sikkim",
    country: "India",
    url: "/assets/images/png/shubhadeep.jpeg",
    fileType: "image/jpeg",
  },
  {
    id: 2,
    name: "Rupa Bhowmick",
    position: "MYP coordinator",
    location: "Noida, UP",
    country: "India",
    url: "/assets/images/png/rupa_bhowmick.jpeg",
    fileType: "image/jpeg",
  },
];

class AboutTeachersListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachersData: [],
    };
    this.getTeacher = this.getTeacher.bind(this);
  }

  async deleteAboutTeachersListing(id, index) {
    console.log("delete about teachers listing: ", id);
    await deleteTeacher({ teacherId: id });
    // let data = this.state.teachersData;
    // data = data.splice(index, 1);
    // this.setState({
    //   ...this.state,
    //   teachersData: data,
    // });
    this.getTeacher();
  }

  async getTeacher() {
    try {
      const resp = await getTeachers();
      this.setState({ ...this.state, teachersData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getTeacher();
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
                    About Teachers / Lecturers / Administrators Listing
                  </h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">
                      All About Teachers / Lecturers / Administrators Listing
                    </h2>
                    <Link to={`${BASEDIR}/crm/about-teachers/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 row dt-disp">
                        {this.state.teachersData.map(
                          ({
                            _id,
                            name,
                            position,
                            location,
                            country,
                            url,
                            fileType,
                            linkedIn,
                          }) => (
                            <div className="col-lg-12 row border align-items-center my-2">
                              <div className="col-6">
                                <div>{_id}</div>
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
                                <div>{name}</div>
                                <div>{position}</div>
                                <div>{location}</div>
                                <div>{country}</div>
                                <Link>{linkedIn}</Link>
                              </div>
                              <div className="col-6">
                                <i
                                  className="i-trash icon-xs pointer mr-3"
                                  onClick={() => {
                                    this.deleteAboutTeachersListing(_id);
                                  }}
                                ></i>{" "}
                                <Link
                                  to={`${BASEDIR}/crm/about-teachers/edit/${_id}`}
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

export default AboutTeachersListings;
