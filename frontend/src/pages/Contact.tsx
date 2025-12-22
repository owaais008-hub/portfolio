import React, { useState } from 'react';
import { validateContactForm } from '../lib/validation';
import { useNotificationContext } from '../components/NotificationProvider';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const { addNotification } = useNotificationContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateContactForm(formData);

    if (validationErrors.length > 0) {
      // Convert array of errors to object
      const errorObject: { [key: string]: string } = {};
      validationErrors.forEach(error => {
        errorObject[error.field] = error.message;
      });
      setErrors(errorObject);

      // Show error notification
      addNotification({
        message: 'Please fix the errors in the form',
        type: 'error'
      });

      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // In a real app, this would send the data to your backend
    // console.log('Form submitted:', formData);

    // Show success notification
    addNotification({
      message: 'Message sent successfully!',
      type: 'success'
    });

    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <SEO
        title="Contact Me - MERN Portfolio"
        description="Get in touch with me for collaboration opportunities, project inquiries, or just to say hello. I'm available for freelance and full-time positions."
        keywords="contact, hire, freelancer, full-stack developer, MERN stack, React, Node.js, MongoDB, Express"
      />
      <div className="contact">
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h1>Contact Me</h1>
              <p>Have a project in mind? Let's connect!</p>
            </div>
            <div className="contact-container">
              {submitted ? (
                <div className="success-message">
                  <h2>Thank you for your message!</h2>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message <span className="btn-icon">→</span></button>
                </form>
              )}

              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Feel free to reach out through any of these channels:</p>
                <div className="contact-detail">
                  <i>📧</i>
                  <div>
                    <h3>Email</h3>
                    <span>youremail@example.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <i>📱</i>
                  <div>
                    <h3>Phone</h3>
                    <span>+1 (123) 456-7890</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <i>📍</i>
                  <div>
                    <h3>Location</h3>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">🔗</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub">💻</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter">🐦</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;