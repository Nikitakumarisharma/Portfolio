import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send('service_xnj4rbr', 'template_c4il24r', formData, 'KLqLW706z8vAKhopJ')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Failed to send the message.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen flex items-center justify-center contact_me " >
       <div><h1 className='bg-black text-white text-2xl font-bold pl-0 ml-0 p-4 m-4'>Hire me or can say hello to me.</h1>
    <form onSubmit={handleSubmit} className="bg-teal-600 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="from_name" className="block text-white mb-2">Name:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-lg border border-teal-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="from_email" className="block text-white mb-2">Email:</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-lg border border-teal-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-2">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-lg border border-teal-300"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSending}
        className={`w-full py-2 rounded-lg text-white ${isSending ? 'bg-teal-400' : 'bg-teal-700'} ${isSending ? 'cursor-wait' : 'hover:bg-teal-800'}`}
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
      {status && <p className="mt-4 text-white">{status}</p>}
    </form>
  </div>
  </div>
  );
};

export default ContactMe;