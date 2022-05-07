export interface ContactsState {
  contacts: Contact[];
  isLoading: boolean;
  error: string;
}

export interface Contact {
  id: number
  name: string
  phone: string
}
