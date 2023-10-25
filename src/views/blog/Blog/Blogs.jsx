import { BlogBlogPosts } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getBlogs } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;
class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsData: [],
    };
    this.getBlog = this.getBlog.bind(this);
  }

  async getBlog() {
    try {
      const resp = await getBlogs();
      this.setState({ ...this.state, blogsData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  componentDidMount() {
    this.getBlog();
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Blogs</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">Blog Posts</h2>
                    <Link to={`${BASEDIR}/crm/blogs/add`}>
                      {" "}
                      <button className="btn btn-primary"> Add New</button>{" "}
                    </Link>
                  </header>
                  <div className="content-body">
                    <BlogBlogPosts
                      blogs={this.state.blogsData}
                      refreshBlog={this.getBlog}
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

export default Blogs;
