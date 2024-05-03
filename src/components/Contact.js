import {Address, Email, Phone} from "../icons/icons"
import ContactCard from "./ContactCard"
import { useState } from "react"
import Form from "./Form"

function Contact() {
    const [contacts] = useState([
        { title: 'Address', content: 'Dubai, United Arab Emirates', img: Address},
        { title: 'Email', content: 'dev.kaywboboaung@gmail.com', img: Email},
        { title: 'Phone', content: '+971 56 245 3573', img: Phone},
    ])


    return (
        <div id="contact">
            <h2 className="section-header">Contact me</h2>
                {contacts.map((contact, index) => 
                    (<ContactCard 
                    key={index}
                    img={contact.img}
                    title={contact.title}
                    content={contact.content}
                />)
                )}
            <div>
                <Form />
            </div>
        </div>
    )
}

export default Contact