import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null); // 'success' | 'error' | null

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800/30 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">Get in Touch</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                        Ready to start your AI journey? Contact us today for a free consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-none transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white transition-colors duration-300">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="text-blue-600 dark:text-blue-500 mt-1 mr-4 transition-colors duration-300" />
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-gray-300 transition-colors duration-300">Email</h4>
                                        <p className="text-slate-600 dark:text-gray-400 transition-colors duration-300">hello@aiconsult.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="text-blue-600 dark:text-blue-500 mt-1 mr-4 transition-colors duration-300" />
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-gray-300 transition-colors duration-300">Phone</h4>
                                        <p className="text-slate-600 dark:text-gray-400 transition-colors duration-300">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="text-blue-600 dark:text-blue-500 mt-1 mr-4 transition-colors duration-300" />
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-gray-300 transition-colors duration-300">Office</h4>
                                        <p className="text-slate-600 dark:text-gray-400 transition-colors duration-300">123 Innovation Dr,<br />Tech City, TC 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-6 shadow-lg dark:shadow-none transition-all duration-300">
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/50 rounded-lg text-green-700 dark:text-green-200">
                                Thank you for your message! We'll get back to you shortly.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/50 rounded-lg text-red-700 dark:text-red-200">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2 transition-colors duration-300">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 ${errors.firstName ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                                    placeholder="John"
                                />
                                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2 transition-colors duration-300">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 ${errors.lastName ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                                    placeholder="Doe"
                                />
                                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2 transition-colors duration-300">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2 transition-colors duration-300">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                                placeholder="How can we help you?"
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center shadow-md dark:shadow-none"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
