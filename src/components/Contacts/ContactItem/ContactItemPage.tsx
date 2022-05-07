import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { contactsSlice } from "../../../store/reducers/ContactsSlice";
import { fetchUsers } from "../../../store/reducers/ActionCreators";
import personImg from "./contactImg/person.png"
import { ChangeContact } from "./ChangeContact/ChangeContact";
import { Contact } from "../../../interface/Contact";

export const ContactItemPage: React.FC = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { id } = useParams();
  const navigate = useNavigate();
  const currentContact: Contact | undefined = contacts.find(el => el.id === Number(id))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])

  const deleteContact = () => {
    if (id) {
      dispatch(contactsSlice.actions.deleteContact(id))
    }
    navigate('/contacts')
  } 
  
  return (
    <>
      <h2>Contact page</h2>
      <img width='60px' src={personImg} alt="person img" />
      <p>{`Name:  ${currentContact?.name}`}</p>
      <p>{`Phone:  ${currentContact?.phone}`}</p>
      <div className="d-flex gap-3">
        <button 
          type="button" 
          className="btn btn-warning"
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
        >
          Change
        </button>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={deleteContact}
          >
          Delete
        </button>
        {currentContact && (
          <ChangeContact contact={currentContact} />
        )}
      </div>
    </>
  )
}