import React from "react";
import { getAllContacts } from "../../../Services/api";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

class ContactInfoListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = async () => {
    try {
      const response = await getAllContacts();
      this.setState({ contacts: response.data });
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="content">
        <h1 className="mt-4 mb-4">Contact List</h1>
        <Row>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <Col sm="6" md="4" lg="3" key={contact.id} className="mb-4">
                <Card className="h-100 shadow-sm hover">
                  <CardBody>
                    <CardTitle>Name: {contact.name}</CardTitle>
                    <CardText>Email: {contact.email}</CardText>
                    <CardText>Phone: {contact.phone}</CardText>
                    <CardText>Message: {contact.message}</CardText>
                    <CardText>Created Date: {contact.createdTimestamp}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <p>No contacts found.</p>
          )}
        </Row>
      </div>
    );
  }
}

export default ContactInfoListings;
