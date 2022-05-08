import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { Contact } from "../../../interface/Contact"
import { contactsSlice } from "../../../store/reducers/ContactsSlice"
import { Modal } from "../../Modal/Modal"
import "./AddContact.scss"

export const AddContact: React.FC = () => {
  const [nameInput, setNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const dispatch = useAppDispatch()

  const handleAddContact = () => {
    const newContact: Contact[] = [...contacts, {
      id: contacts.length + 2,
      name: nameInput,
      phone: phoneInput
    }]

    if (nameInput !== '' && phoneInput !== '') {
      dispatch(contactsSlice.actions.addContact(newContact))
      setNameInput('')
      setPhoneInput('')
    }
  }
  
  return (
    <>
    <Modal title={'Create contact'}>
      <div className="addForm">
        <input 
          type="text" 
          placeholder="Name and Surname"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Phone number"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
        <button 
          type="button" 
          className="btn btn-success"
          data-bs-dismiss="modal"
          onClick={handleAddContact}
        >
          Submit
        </button>
      </div>
    </Modal>
    
    <button 
      type="button" 
      className="btn btn-success addButton" 
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
    >
      Add contact
    </button>
    </>
  )
}