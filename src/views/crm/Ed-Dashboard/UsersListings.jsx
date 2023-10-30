import React from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { getAllUsers, deleteUserById } from "../../../Services/api";

var BASEDIR = process.env.REACT_APP_BASEDIR;

class UsersListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsersData: [],
      activeTab: "student", // By default, show all users
    };
    this.getUsers = this.getUsers.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  async getUsers() {
    try {
      const resp = await getAllUsers();
      this.setState({ allUsersData: resp.data.data });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  async handleDownload(resumeURL) {
    const link = document.createElement("a");
    link.href = resumeURL;
    link.click();
  }

  

  async handleDeleteUser(emailId) {
    const prevState = this.state;
    try {
      // Make API call to delete the user from the database
      const response = await deleteUserById(emailId); // Assuming deleteUserById is an API function to delete a user
      // Check if the deletion was successful based on the response data
      if (response && response.data && response.data.success === 1) {
        // If the API call was successful, update the state to remove the deleted user
        this.setState((prevState) => ({
          allUsersData: prevState.allUsersData.filter((user) => user.email !== emailId),
        }));
  
        // Show a prompt for the deleted user
        alert(`User with email ${emailId} has been successfully deleted.`);
  
        // Refresh the page after a short delay (e.g., 1 second) to give the user a chance to see the prompt
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // If the API call failed or the response data indicates failure, show an error message
        console.error("Error deleting user:", response.data.message);
      }
    } catch (error) {
      // Handle any other errors that may occur during the API call
      console.error("Error deleting user:", error);
    }
  }
  


  

  componentDidMount() {
    this.getUsers();
      }

  toggleTab(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    // Group users based on their userType
    const groupedUsers = {};
    this.state.allUsersData.forEach((user) => {
      const { userType } = user;
      if (!groupedUsers[userType]) {
        groupedUsers[userType] = [];
      }
      groupedUsers[userType].push(user);
    });

    // Create tabs for each user type
    const tabItems = Object.keys(groupedUsers).map((userType) => (
      <NavItem key={userType}>
        <NavLink
          className={classnames({ active: this.state.activeTab === userType })}
          onClick={() => this.toggleTab(userType)}
        >
          {userType}
        </NavLink>
      </NavItem>
    ));

    // Create tab content for each user type
    const tabContent = Object.keys(groupedUsers).map((userType) => (
      <TabPane key={userType} tabId={userType}>
        <div className="tab-pane">
          {groupedUsers[userType].map(
            ({ userId, firstName, lastName, email, resume }) => (
              <div
                className="col-lg-12 row border align-items-center my-2"
                key={userId}
              >
                <div className="col-6">
                  <div>
                    <b>Name:</b> {`${firstName} ${lastName}`}
                  </div>
                  <div>
                    <b>Email:</b> {email}
                  </div>
                  {resume && (
                    <>
                      <div>Resume:</div>
                      <button onClick={() => this.handleDownload(resume)}>
                        Download
                      </button>
                    </>
                  )}
                </div>
                <div className="col-6">
                  <button onClick={() => this.handleDeleteUser(email)}>
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </TabPane>
    ));
      console.log(groupedUsers, "xfxfxchcg hvc")
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Users</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box">
                  <header className="panel_header align-items-center row justify-content-between">
                    <h2 className="title float-left">Users</h2>
                  </header>
                  <div className="content-body">
                    <div>
                      <div className="col-lg-12 row ">
                        <Nav tabs>{tabItems}</Nav>
                      </div>
                      <TabContent activeTab={this.state.activeTab}>
                        {tabContent}
                      </TabContent>
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

export default UsersListings;
