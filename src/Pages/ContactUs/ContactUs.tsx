import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(JSON.stringify(data));
    setData({ name: '', email: '', message: '' });
    
  };

  return (
    <div className="MainContainer">
      <h1>Contact <span>Here</span></h1>

      <div className="flexbox">

        <form method="Post" onSubmit={handleSubmit}>
          <div className="flex">
            <input type="name" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name" />
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="Example@gmail.com" />
          </div>
          <textarea name="message" placeholder="Type Here ..." onChange={handleChange} value={data.message}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
