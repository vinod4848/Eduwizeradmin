import React from "react";
import { getAllContacts } from "../../../Services/api";

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

      <div>
        <div className="content">
        <h1 className="mt-10">Contact List</h1>
        {contacts.length > 0 ? (
          <div>
            {contacts.map((contact) => (
              <div key={contact.id}>
                <h2>Name: {contact.name}</h2>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Message: {contact.message}</p>
                <p>Created Date: {contact.createdTimestamp}</p>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <p>No contacts found.</p>
        )}
        </div>
      </div>
    );
  }
}

export default ContactInfoListings;
