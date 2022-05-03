import axios from "axios"
import { Contact } from "../../interface/Contact"
import { AppDispatch } from "../store"
import { contactsSlice } from "./ContactsSlice"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactsSlice.actions.usersFetching())
    const response = await axios.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
    dispatch(contactsSlice.actions.usersFetchingSuccess(response.data))
  } catch (e) {
    let result = (e as Error).message
    dispatch(contactsSlice.actions.usersFetchingError(result))
  }
}