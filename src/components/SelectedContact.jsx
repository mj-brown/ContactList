function SelectedContact({ selectedContact }) {
    console.log(selectedContact);

    if (!selectedContact) {
        return null;
      }
    
      const { id, name, username, email, address, phone } = selectedContact;
    
      return (
        <table>
          <thead>
            <tr>
              <th colSpan="2">Selected Contact View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ID</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th scope="row">Username</th>
              <td>{username || 'N/A'}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>
                {address
                  ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
                  : 'N/A'}
              </td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      );
    }
    
    export default SelectedContact;
  