import React, { useEffect } from "react";
import "../ContactsList/ContactsList.scss" 
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUsers } from "../../../store/reducers/ActionCreators";
import { ContactItem } from "../ContactItem/ContactItem";

export const Contacts = () => {
  const { contacts, isLoading, error } = useAppSelector(state => state.contactsReducer)
  const dispatch = useAppDispatch()
  console.log('contacts', contacts)

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])
  return (
    <>
      <h1>Contacts</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <ul className="list-group">
        {contacts.map(contact => 
          <li 
            key={contact.id} 
            className="list-group-item item"
            >
            <Link className="item" to={`${contact.id}`}>
              <ContactItem contact={contact}/>
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}