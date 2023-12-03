import React, { Component } from "react";
import { FaUser, FaEnvelope, FaDownload, FaTrash } from "react-icons/fa";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { getAllUsers, deleteUserById } from "../../../Services/api";

class UsersListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsersData: [],
      activeTab: "student",
    };
  }

  async getUsers() {
    try {
      const resp = await getAllUsers();
      this.setState({ allUsersData: resp.data.data });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async handleDownload(resumeURL) {
    const link = document.createElement("a");
    link.href = resumeURL;
    link.click();
  }

  async handleDeleteUser(emailId) {
    try {
      const response = await deleteUserById(emailId);
      if (response && response.data && response.data.success === 1) {
        this.setState((prevState) => ({
          allUsersData: prevState.allUsersData.filter(
            (user) => user.email !== emailId
          ),
        }));
        alert(`User with email ${emailId} has been successfully deleted.`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.error("Error deleting user:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  toggleTab(tab) {
    this.setState({ activeTab: tab });
  }

  renderUserCard(user) {
    const { userId, firstName, lastName, email, resume } = user;
    return (
      <Col sm="4" key={userId} className="mb-4">
        <Card className="custom-card">
          <CardBody className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2 custom-username">
              <FaUser
                className="me-2 custom-icon-user"
                style={{ color: "#B22222" }}
              />
              <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
            </div>
            <div className="d-flex align-items-center mb-2 custom-email">
              <FaEnvelope
                className="me-2 custom-icon-email"
                style={{ color: "#B22222" }}
              />
              <CardSubtitle>{email}</CardSubtitle>
            </div>
            {resume && (
              <div>
                <CardText className="custom-resume-text">Resume:</CardText>
              </div>
            )}
            <div className="mt-auto d-flex justify-content-between">
              {resume && (
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => this.handleDownload(resume)}
                >
                  <FaDownload className="me-1" />
                  Download
                </Button>
              )}
              <Button
                color="danger"
                size="sm"
                onClick={() => this.handleDeleteUser(email)}
              >
                <FaTrash className="me-1" />
                Delete
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }

  render() {
    const { allUsersData, activeTab } = this.state;
    const groupedUsers = {};
    allUsersData.forEach((user) => {
      const { userType } = user;
      if (!groupedUsers[userType]) {
        groupedUsers[userType] = [];
      }
      groupedUsers[userType].push(user);
    });

    const tabItems = Object.keys(groupedUsers).map((userType) => (
      <NavItem key={userType}>
        <NavLink
          className={classnames({ active: activeTab === userType })}
          onClick={() => this.toggleTab(userType)}
        >
          {userType}
        </NavLink>
      </NavItem>
    ));

    const tabContent = Object.keys(groupedUsers).map((userType) => (
      <TabPane key={userType} tabId={userType}>
        <Row>
          {groupedUsers[userType].map((user) => this.renderUserCard(user))}
        </Row>
      </TabPane>
    ));

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
                      <div className="col-lg-12 row">
                        <Nav tabs>{tabItems}</Nav>
                      </div>
                      <TabContent activeTab={activeTab}>
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
