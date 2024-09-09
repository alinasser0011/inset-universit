import React, { useState } from 'react';
import './ContactUs.css'; // يمكنك استخدام هذا الملف لتصميم النموذج

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك إضافة هنا رمز لإرسال البيانات إلى الخادم أو خدمة بريد إلكتروني
    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-us">
      <h1>تواصل معنا</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">الاسم:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">الرسالة:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default ContactUs;
