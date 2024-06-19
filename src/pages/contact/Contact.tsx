import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.scss';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

interface LoginForm {
  name: string;
  email: string;
  message: string;
}

let initialState: LoginForm = {
  name: '',
  email: '',
  message: ''
};

const Contact: React.FC = () => {
  const [Formdata, setFormdata] = useState<LoginForm>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { value, name } = e.target;
    setFormdata(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Formdata);
    setFormdata(initialState);
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__left">
              <h1>Contact us</h1>
              <p>Send for us your request and we will get in touch with you as soon as possible</p>
              <div className="iconss">
                <span>
                  <BsFillTelephoneFill />
                  <p>+998-91-194-74-84</p>
                </span>
                <span>
                  <MdMailOutline />
                  <p>mamadiyevislomjon2@gmail.com</p>
                </span>
              </div>
            </div>
            <div className="contact__right">
              <form onSubmit={handleSubmit} action="">
                <div className="inp">
                  <label htmlFor="">Name</label>
                  <input required onChange={handleChange} type="text" name='name' value={Formdata.name} placeholder='Your Name' />
                </div>
                <div className="inp">
                  <label htmlFor="">E-mail</label>
                  <input required onChange={handleChange} type="text" name='email' value={Formdata.email} placeholder='Your Email' />
                </div>
                <div className="inp">
                  <label htmlFor="">Message</label>
                  <textarea required onChange={handleChange} name="message" value={Formdata.message} placeholder='Your Message'></textarea>
                </div>
                <span>
                  <button>Send request</button>
                  <p>By sending request you agree to our Privacy & Policy</p>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
