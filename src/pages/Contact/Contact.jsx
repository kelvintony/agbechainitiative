import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const config = {
    SecureToken: 'b6455ee4-78f1-4248-9564-3498121fc0b0',
    To: 'info@agbechainitiative.org',
    From: 'kelvintonyph@gmail.com',
    Subject: formData.title,
    Body: `<strong> From: ${formData.email}</strong> <br> <br> ${formData.message}
		<br> <br> <strong>Regards,</strong> <br>  ${formData.name}`,
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const cleearInput = () => {
    setFormData({
      name: '',
      email: '',
      title: '',
      message: '',
    });
  };
  const handleSubmit = () => {
    if (window.Email) {
      setLoading(true);
      window.Email.send(config)
        .then((res) => {
          if (res === 'OK') {
            setResponseMessage('message sent successfully');
          }
          setLoading(false);
          cleearInput();
        })
        .catch((err) => {
          console.log('');
        });
    }
  };
  return (
    <div>
      <div className='contact_header'>
        <h1>
          We Would love <br /> To Hear From You.
        </h1>
        <p>Join us let's make the world a better place</p>
      </div>
      <section className='contact_container'>
        <div className='contact_inner'>
          <h3>You Can Reach Us...</h3>
          <div className='contact_details'>
            <h4>Country Office:</h4>
            <p>
              SERAPH UNITY HOSPITAL, AGBECHA <br /> KM 8, Abwa-Nyamatsor Road,
              Mbagen, Buruku LGA
            </p>
          </div>
          <div className='contact_details'>
            <h4>HOME Office:</h4>
            <p>KM 7, Makurdi Gboko Road, Makurdi, Benue State</p>
          </div>
          <div className='contact_details'>
            <h4>Email Address:</h4>
            <p>info@agbechainitiative.org</p>
          </div>
          <div className='contact_details'>
            <h4>Phone Numbers:</h4>
            <p>
              +2347088790090, +2349027021766, +2349025882659, +2349060695109
            </p>
          </div>
        </div>

        <div className='contact_inner theForm'>
          <label for='name'>
            name: <br />
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <br />
          </label>
          <label for='email'>
            Email: <br />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <br />
          </label>
          <label for='title'>
            Title: <br />
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <br />
          </label>
          <label for='message'>
            Message: <br />
            <textarea
              type='text'
              name='name'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              cols='30'
              rows='8'
            />
            <br />
          </label>

          {responseMessage ? (
            <span className='message_span'>{responseMessage}</span>
          ) : (
            <button onClick={handleSubmit} className='btn_contact'>
              {loading ? 'Processing...' : 'Send'}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
