import React, { useEffect, useMemo, useState } from "react";
import "../ContactsList/ContactsList.scss" 
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUsers } from "../../../store/reducers/ActionCreators";
import { ContactItem } from "../ContactItem/ContactItem";
import { Contact } from "../../../interface/Contact";

export const Contacts: React.FC = () => {
  const { contacts, isLoading, error } = useAppSelector(state => state.contactsReducer)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])

  const filterContacts = (): Contact[] => {
    let filteredContacts

    return filteredContacts = contacts.filter(contact => (
      contact.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    ))
  }
  
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    filterContacts()
  }

  const filteredContacts = useMemo(filterContacts, [searchInput, contacts])

  console.log(filteredContacts)
  
  return (
    <>
      <h1>Contacts</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <div className="input-group input-group-sm mb-3 search">
        <input 
          type="text"
          value={searchInput}
          placeholder="Search"
          className="form-control"
          onChange={(e) => handleSearchInput(e)}
        />
      </div>
      <ul className="list-group">
        {filteredContacts.map(contact => 
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