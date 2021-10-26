import {Address, Email, Phone} from "../icons/icons"
import ContactCard from "./ContactCard"
import { useState } from "react/cjs/react.development"
import Form from "./Form"

function Contact() {
    const [contacts] = useState([
        { title: 'Address', content: 'Mingalar Taung Nyunt Township, Yangon', img: Address},
        { title: 'Email', content: 'kbba700@gmail.com', img: Email},
        { title: 'Phone', content: '+95 9969139680', img: Phone},
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