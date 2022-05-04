import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { contactsSlice } from "../../../store/reducers/ContactsSlice";
import personImg from "./contactImg/person.png"

export const ContactItemPage: React.FC = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { id } = useParams();
  const navigate = useNavigate();
  const currentTodo = contacts.find(el => el.id === Number(id))
  const dispatch = useDispatch()

  const deleteContact = () => {
    dispatch(contactsSlice.actions.deleteContact(id))
    navigate('/contacts')
  }
  
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