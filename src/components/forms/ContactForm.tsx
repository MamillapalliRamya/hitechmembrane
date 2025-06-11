import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    try {
      const token = await executeRecaptcha('enquiry');
      // Handle form submission with reCAPTCHA token
      console.log('Form submitted with token:', token);
    } catch (error) {
      console.error('reCAPTCHA error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <div className="flex">
            <span className="px-4 py-2 bg-white/20 border border-r-0 border-white/30 rounded-l-md text-white">
              +1
            </span>
            <input
              type="tel"
              placeholder="Contact No"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-r-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Enquire Now
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;