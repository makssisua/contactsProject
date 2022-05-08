
import React, { useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { Contact } from "../../../../interface/Contact";
import { contactsSlice } from "../../../../store/reducers/ContactsSlice";
import { Modal } from "../../../Modal/Modal";

interface Props {
  contact: Contact;
}

export const ChangeContact: React.FC<Props> = ({ contact }) =>{
  const [nameInput, setNameInput] = useState(contact.name)
  const [phoneInput, setPhoneInput] = useState(contact.phone)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    const changedContact: Contact = {
      id: contact.id,
      name: nameInput,
      phone: phoneInput
    }
    
    if (nameInput !== '' && phoneInput !== '') {
      dispatch(contactsSlice.actions.changeContact(changedContact))
    }
  }

  return (
    <Modal title={"Change contact"}>
      <div className="d-flex flex-column gap-2">
      <input 
        type='text'
        placeholder="New name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        type='text'
        placeholder="New phone"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
      />
      <button 
        type="button" 
        className="btn btn-success"
        onClick={handleChange}
        data-bs-dismiss="modal"
      >
        Confirm
      </button>
    </div>
    </Modal>
  )
}