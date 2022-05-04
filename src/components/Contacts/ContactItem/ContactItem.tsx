import { FC } from "react"
import { Contact } from "../../../interface/Contact"
import personImg from "./contactImg/person.png"

interface Props {
  contact: Contact
}

export const ContactItem: FC<Props> = ({ contact }) => {
  return (
    <>
      <img src={personImg} alt="person img" />
      {contact.name}
    </>
    
  )
}