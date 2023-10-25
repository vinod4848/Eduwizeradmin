import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
// import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteTestimonial, getTestimonials } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
// const header = [
//   { title: "ID", prop: "id", sortable: true, filterable: true },
//   { title: "Name", prop: "name", sortable: true, filterable: true },
//   { title: "Company", prop: "company", sortable: true, filterable: true },
//   { title: "Email", prop: "email", sortable: true, filterable: true },
//   { title: "Phone", prop: "phone", sortable: true, filterable: true },
//   { title: "Added on", prop: "date", sortable: true, filterable: true },
// ];

const testimonials = [
  {
    id: 1,
    name: "Dr Shubhadeep Chakraborty",
    title: "Associate Professor of Finance & Head of IQAC",
    rating: 5,
    date: "SRM University, Sikkim",
    description: "India",
  },
  {
    id: 2,
    name: "Dr Shubhadeep Chakraborty",
    title: "Associate Professor of Finance & Head of IQAC",
    rating: 5,
    date: "SRM University, Sikkim",
    description: "India",
  },
];

class TestimonialsListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialsData: [],
    };
    this.getTestimonial = this.getTestimonial.bind(this);
  }

  async deleteTestimonialsListing(id, index) {
    console.log("delete about Testimonials listing: ", id);
    await deleteTestimonial({ testimonialId: id });
    // let data = this.state.testimonialsData;
    // data = data.splice(index, 1);
    // this.setState({
    //   ...this.state,
    //   testimonialsData: data,
    // });
    this.getTestimonial();
  }

  async getTestimonial() {
    try {
      const resp = await getTestimonials();
      this.setState({ ...this.state, testimonialsData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getTestimonial();
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

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">Testimonials</h2>
                    <Link to={`${BASEDIR}/crm/testimonials/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 row dt-disp">
                        {this.state.testimonialsData.map(
                          ({ _id, name, title, rating, date, description }) => (
                            <div className="col-lg-12 row border align-items-center my-2">
                              <div className="col-6">
                                <div>{_id}</div>
                                <div>{name}</div>
                                <div>{title}</div>
                                <div>{rating}</div>
                                <div>{date}</div>
                                <div>{description}</div>
                              </div>
                              <div className="col-6">
                                <i
                                  className="i-trash icon-xs pointer mr-3"
                                  onClick={() => {
                                    this.deleteTestimonialsListing(_id);
                                  }}
                                ></i>{" "}
                                <Link
                                  to={`${BASEDIR}/crm/testimonials/edit/${_id}`}
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

export default TestimonialsListings;
