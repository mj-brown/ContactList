import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <>
      {selectedContact ? (
        <SelectedContact selectedContact={selectedContact} />
      ) : (
        <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}

export default App;


/*
function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(()=>{
    async function fetchContacts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);

  return (
    <>
      {selectedContact ? (
        <SelectedContact selectedContact={selectedContact} />
      ) : (
        <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />  
      )}
    </>
  );
}

export default <App></App*/
