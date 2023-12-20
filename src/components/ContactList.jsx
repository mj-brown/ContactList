import ContactRow from "./ContactRow";

function ContactList({ contacts, onContactClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="colHeader">Name</td>
          <td className="colHeader">Email</td>
          <td className="colHeader">Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onContactClick={onContactClick}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
