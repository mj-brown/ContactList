function SelectedContact({ selectedContact, onBack }) {
  if (!selectedContact) {
    return null;
  }

  const { id, name, username, email, address, phone } = selectedContact;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Selected Contact View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="rowHeader">
              ID
            </th>
            <td>{id}</td>
          </tr>
          <tr>
            <th scope="row" className="rowHeader">
              Name
            </th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row" className="rowHeader">
              Username
            </th>
            <td>{username || "N/A"}</td>
          </tr>
          <tr>
            <th scope="row" className="rowHeader">
              Email
            </th>
            <td>{email}</td>
          </tr>
          <tr>
            <th scope="row" className="rowHeader">
              Address
            </th>
            <td>
              {address
                ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
                : "N/A"}
            </td>
          </tr>
          <tr>
            <th scope="row" className="rowHeader">
              Phone
            </th>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={onBack} className="button">
        Back
      </button>
    </div>
  );
}

export default SelectedContact;
