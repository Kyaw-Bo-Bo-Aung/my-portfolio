function ContactCard(props) {
    return(
        <div className="contact-card">
            {props.img && <img className="contact-img" src={props.img} alt=""></img>}
            <div>
                {props.title && <h4 className="contact-title">{props.title}</h4> }
                {props.content && <div className="contact-content">{props.content}</div>}
            </div>
        </div>
    )
}

export default ContactCard