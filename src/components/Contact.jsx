import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Address',
      value: '123 Business St, Suite 100',
      subValue: 'New York, NY 10001'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
      subValue: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'hello@techflow.com',
      subValue: 'We reply within 24 hours'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Business Hours',
      value: 'Monday - Friday',
      subValue: '9:00 AM - 6:00 PM EST'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    
    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Service
    if (!formData.service || formData.service === '') {
      newErrors.service = 'Please select a service';
    }
    
    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-3">
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6 flex items-center animate-fade-in">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    } focus:ring-2 transition-colors duration-200 outline-none`}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                  />
                  {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    } focus:ring-2 transition-colors duration-200 outline-none`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.service ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                  } focus:ring-2 transition-colors duration-200 outline-none appearance-none bg-white`}
                  aria-invalid={errors.service ? 'true' : 'false'}
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Consulting">Consulting</option>
                </select>
                {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                  } focus:ring-2 transition-colors duration-200 outline-none resize-none`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-10 rounded-2xl text-white shadow-2xl lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-100 mb-1">{info.label}</p>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                      <p className="text-sm text-blue-200">{info.subValue}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Circle */}
              <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
