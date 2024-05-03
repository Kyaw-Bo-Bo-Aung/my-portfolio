import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formref = useRef();

  function handleInput(e) {
    let { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.email || !input.message) return;
    setSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_API_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formref.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Congrats! Your message has been sent.");
          setSending(false);
          setInput({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Ooops! something went wrong.");
          console.log(error.message);
          setSending(false);
        }
      );
  }

  return (
    <>
      <form ref={formref} id="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Name</label>
          <input
            id="username"
            className="form-control"
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your name")}
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
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your email")}
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
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter message...")}
            autoComplete="off"
          />
        </div>
        {sending ? (
          <div className="submit-btn-wrapper">
            <div>Sending . . .</div>
          </div>
        ) : (
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        )}
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
}

export default Form;
