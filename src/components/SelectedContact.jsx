function SelectedContact(props) {
    const { contacts } = props

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Selected Contact View</th>
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
    )

}

export default SelectedContact