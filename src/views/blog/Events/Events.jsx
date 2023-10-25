import { BlogBlogPosts } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getEvents } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
    };
    this.getEvent = this.getEvent.bind(this);
  }

  async getEvent() {
    try {
      const resp = await getEvents();
      this.setState({ ...this.state, eventsData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getEvent();
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Events</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">Events Posts</h2>
                    <Link to={`${BASEDIR}/crm/events/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <BlogBlogPosts
                      blogs={this.state.eventsData}
                      refreshBlog={this.getEvent}
                      event={true}
                    />
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

export default Events;
