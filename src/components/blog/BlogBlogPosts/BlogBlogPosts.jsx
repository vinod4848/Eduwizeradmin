import React from "react";
import { NavLink } from "react-router-dom";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { deleteBlogs, deleteEvents } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;

class BlogBlogPosts extends React.Component {
  async deleteBlog(id) {
    try {
      await deleteBlogs({ blogId: id });
      this.props.refreshBlog();
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  async deleteEvent(id) {
    try {
      await deleteEvents({ eventId: id });
      this.props.refreshBlog();
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
  render() {
    let blogsList = [];
    for (let i = 0; i < this.props.blogs.length; i++) {
      blogsList.push(
        <div className="col-12 col-md-6" key={i}>
          <div className="blog_post">
            <img
              className="media-object"
              src={this.props.blogs[i].image}
              alt=""
            />
            <h3 className="blogtitle">
              {this.props.blogs[i].title}
              <NavLink
                to={{
                  pathname: this.props.event
                    ? BASEDIR + "/crm/events/edit"
                    : BASEDIR + "/crm/blogs/edit",
                  state: {
                    selectedBlog: this.props.blogs[i],
                  },
                }}
              >
                <i
                  className="i-note"
                  style={{ marginLeft: "15px" }}
                  title="Edit"
                ></i>
              </NavLink>
              <i
                className="i-trash"
                style={{ marginLeft: "15px", cursor: "pointer" }}
                title="Delete"
                onClick={(e) => {
                  e.preventDefault();
                  if (this.props.event) {
                    this.deleteEvent(this.props.blogs[i]._id);
                  } else {
                    this.deleteBlog(this.props.blogs[i]._id);
                  }
                }}
              ></i>
            </h3>
            {this.props.event ? (
              <></>
            ) : (
              <p className="post-by">
                Written by <a href="#!">{this.props.blogs[i].author}</a>
              </p>
            )}
            <p className="blog-content">{this.props.blogs[i].description}</p>
          </div>
        </div>
      );
    }
    return <div className="row">{blogsList}</div>;
  }
}

BlogBlogPosts.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object),
};

export default BlogBlogPosts;
