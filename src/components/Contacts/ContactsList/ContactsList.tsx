import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUsers } from "../../../store/reducers/ActionCreators";

export const Contacts = () => {
  const { contacts, isLoading, error } = useAppSelector(state => state.contactsReducer)
  const dispatch = useAppDispatch()
  console.log('contacts', contacts)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <>
      <h1>Contacts</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {contacts.map((contact) => 
        <div>{contact.name} {contact.phone}</div>
      )}
    </>
  )
}