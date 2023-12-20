function ContactRow({ contact, onContactClick }) {
  return (
    <tr
      onClick={() => {
        onContactClick(contact.id);
      }}
    >
      <td className="contactTable">{contact.name}</td>
      <td className="contactTable">{contact.email}</td>
      <td className="contactTable">{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;
