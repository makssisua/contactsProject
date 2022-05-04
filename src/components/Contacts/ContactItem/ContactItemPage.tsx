import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { contactsSlice } from "../../../store/reducers/ContactsSlice";
import { fetchUsers } from "../../../store/reducers/ActionCreators";
import personImg from "./contactImg/person.png"

export const ContactItemPage: React.FC = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { id } = useParams();
  const navigate = useNavigate();
  const currentTodo = contacts.find(el => el.id === Number(id))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])

  const deleteContact = () => {
    dispatch(contactsSlice.actions.deleteContact(id))
    navigate('/contacts')
  }

  console.log(contacts)
  
  return (
    <>
      <h2>Contact page</h2>
      <img width='60px' src={personImg} alt="person img" />
      <p>{`Name:  ${currentTodo?.name}`}</p>
      <p>{`Phone:  ${currentTodo?.phone}`}</p>
      <div className="d-flex gap-3">
        <button type="button" className="btn btn-warning">
          Change
        </button>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={deleteContact}
          >
          Delete
        </button>
      </div>
    </>
  )
}