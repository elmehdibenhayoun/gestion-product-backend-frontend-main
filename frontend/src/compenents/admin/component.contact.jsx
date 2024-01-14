import React, { useState } from 'react';
import "../client/home.css";


import "../../style/css/bootstrap.min.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter l'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">Contact Us</h6>
          <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Contact Us</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Name"
                    style={{ height: '55px' }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Email"
                    style={{ height: '55px' }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Subject"
                    style={{ height: '55px' }}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0 px-4 py-3"
                    rows="8"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            {/* Le reste de votre code pour la partie à droite du formulaire */}
          </div>
        </div>
      </div>
    </div>
  );
}

