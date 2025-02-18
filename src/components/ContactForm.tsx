import { useState, useEffect } from "react";
import successImage from "../assets/success.png";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors extends Partial<FormData> {
  submit?: string;
}

// Move this to an environment variable
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isSubmitted) setIsSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    let tempErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Please enter your full name.";
    } else if (!/^\S+\s+\S+/.test(formData.fullName)) {
      tempErrors.fullName = "Please enter a valid full name (first and last name).";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please enter a message.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting
    if (lastSubmission && Date.now() - lastSubmission.getTime() < 60000) {
      setErrors({ submit: 'Please wait a minute before submitting again.' });
      return;
    }
    
    if (validate()) {
      setLastSubmission(new Date());
      try {
        // Show loading state
        setIsLoading(true);
        
        // Submit form data
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: new FormData(e.target as HTMLFormElement),
        });
        
        if (!response.ok) throw new Error('Submission failed');
        
        // Show success state
        setIsSubmitted(true);
        setFormData({ fullName: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        setErrors({ ...errors, submit: 'Failed to send message. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
      setIsSubmitted(false);
    };
  }, []);

  return (
    <section className="get-in-touch-container" id="Connect" aria-labelledby="contact-heading">
      <h1 className="get-in-touch-header" id="contact-heading">Get in Touch</h1>
      <p className="get-in-touch-text">We'd love to hear from you and keep you updated with the latest!</p>

      <div className="form-container">
        {isSubmitted ? (
          <div className="success-message">
            <img src={successImage} alt="Success" className="success-image" />
          </div>
        ) : (
          <form
            action={FORM_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "error-input" : ""}
                required
                aria-label="Full Name"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && <span className="error-message" id="fullName-error" role="alert">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-input" : ""}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleChange}
                className={`message-input ${errors.message ? "error-input" : ""}`.trim()}
                required
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="button-container">
              <button 
                className="message-btn" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
