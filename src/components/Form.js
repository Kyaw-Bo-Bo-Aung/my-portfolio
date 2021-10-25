import { useState } from "react/cjs/react.development"

function Form() {
    const [ input, setInput ] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleInput (e){
        let {name, value} = e.target;
        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Name</label>
                <input 
                    id="username"
                    className="form-control"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleInput}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Enter your name'}
                    placeholder="Enter your name"
                    autoComplete="off"
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleInput}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Enter your email'}
                    placeholder="Enter your email"
                    autoComplete="off"
                />
            </div>
            <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    id="message"
                    className="form-control"
                    type="text"
                    name="message"
                    rows="5"
                    value={input.message}
                    onChange={handleInput}
                    placeholder="Enter message..."
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Enter message...'}
                    autoComplete="off"
                />
            </div>
            <button type="submit" className="submit-btn">
                Send message
            </button>
        </form>
    )
}

export default Form