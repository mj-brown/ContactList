import ContactRow from "./ContactRow";

function ContactList({ contacts, setSelectedContact }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

/*import ContactRow from "./ContactRow";

function ContactList({ contacts, setSelectedContactId }) {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} />;
                })}
            </tbody>
        </table>
    );
}

export default ContactList*/
