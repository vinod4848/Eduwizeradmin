import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
// import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  deleteAboutChancellor,
  getAboutChancellors,
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

const aboutChancellors = [
  {
    name: "Dr John Harrison",
    position: "Director cum Principal",
    location: "Litera Valley School",
    country: "Gurugram, India",
    url: "/assets/images/png/john_harrison.jpeg",
    fileType: "image/jpeg",
    linkedIn: "https://www.linkedin.com/in/dr-john-harrison-8675b6120",
    // email: "drvaria@rosaryschoolrajkot.org",
  },
  {
    name: "Dr Vishal Varia",
    position: "Director",
    location: "Rosary School, Leader of GEG",
    country: "Ahmedabad, Gujarat",
    url: "/assets/images/png/vishal_varia.jpeg",
    fileType: "image/jpeg",
    linkedIn: "https://www.linkedin.com/in/drvishalvaria/",
    email: "drvaria@rosaryschoolrajkot.org",
  },
  {
    name: "Dr Sanjeeb Pal",
    position: "Director",
    location: "Amity University",
    country: "Jaipur",
    url: "/assets/images/png/sanjeeb_pal.jpeg",
    fileType: "image/jpeg",
  },
  {
    name: "National Awardee",
    position: "Principal at kunwar’s Global school",
    location: "Lucknow",
    country: "India",
    url: "/assets/images/png/nationalAwardee.jpeg",
    fileType: "image/jpeg",
  },
  {
    name: "Prof .(Dr.) Shauli Mukherjee",
    position:
      "Director School of Education & Associate Dean School of liberal Arts & culture",
    location: "Admas university, Kolkata",
    country: "India",
    url: "/assets/images/png/shauliMukherjee.jpeg",
    fileType: "image/jpeg",
  },
];

class AboutChancellorsListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutChancellorsData: [],
    };
    this.getAboutChancellor = this.getAboutChancellor.bind(this);
  }

  async deleteAboutChancellorsListing(id, index) {
    console.log("delete about aboutChancellors listing: ", id);
    await deleteAboutChancellor({ aboutChancellorId: id });
    // let data = this.state.aboutChancellorsData;
    // data = data.splice(index, 1);
    // this.setState({
    //   ...this.state,
    //   aboutChancellorsData: data,
    // });
    this.getAboutChancellor();
  }

  async getAboutChancellor() {
    try {
      const resp = await getAboutChancellors();
      this.setState({ ...this.state, aboutChancellorsData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getAboutChancellor();
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
                    About Chancellor/ Vice Chancellor/ Registrar / Dean /
                    Director/ Principal/ Head / Supervisor
                  </h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">
                      About Chancellor/ Vice Chancellor/ Registrar / Dean /
                      Director/ Principal/ Head / Supervisor
                    </h2>
                    <Link to={`${BASEDIR}/crm/about-chancellors/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 row dt-disp">
                        {this.state.aboutChancellorsData.map(
                          ({
                            _id,
                            name,
                            position,
                            location,
                            country,
                            url,
                            fileType,
                            linkedIn,
                            email,
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
                                <div>{linkedIn}</div>
                                <div>{email}</div>
                              </div>
                              <div className="col-6">
                                <i
                                  className="i-trash icon-xs pointer mr-3"
                                  onClick={() => {
                                    this.deleteAboutChancellorsListing(_id);
                                  }}
                                ></i>{" "}
                                <Link
                                  to={`${BASEDIR}/crm/about-chancellors/edit/${_id}`}
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

export default AboutChancellorsListings;
