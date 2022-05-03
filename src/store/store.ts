import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer  from "./reducers/ContactsSlice"

const rootReducer = combineReducers({
  contactsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]