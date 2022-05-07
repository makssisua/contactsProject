import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../interface/Contact"

interface ContactsState {
  contacts: Contact[];
  isLoading: boolean;
  error: string;
}

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: ''
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<Contact[]>) {
      state.isLoading = false;
      state.error = '';
      state.contacts = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
    deleteContact(state, action: PayloadAction<string | undefined>) {
      state.contacts = state.contacts.filter(el => el.id !== Number(action.payload) )
    },
    changeContact(state, action: PayloadAction<Contact>) {
      let newState: Contact[] = state.contacts.filter(el => el.id !== action.payload.id )
        
      state.contacts = [...newState, action.payload]
    },
    addContact(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload
    }
  }
})

export default contactsSlice.reducer;