import React from 'react';
import { Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-12 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-6 block transition-colors duration-300">AI Consult</span>
                        <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
                            Empowering businesses with cutting-edge artificial intelligence solutions. Transform your future today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-200 dark:bg-slate-900 rounded-full text-slate-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 transition-colors duration-300">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">AI Strategy</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Machine Learning</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Data Analytics</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Automation</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 transition-colors duration-300">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Blog</a></li>
                            <li><a href="#contact" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 transition-colors duration-300">Stay Updated</h4>
                        <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm transition-colors duration-300">
                            Subscribe to our newsletter for the latest AI trends and insights.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                />
                                <Mail className="absolute right-3 top-3 text-slate-500" size={18} />
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center text-sm shadow-md dark:shadow-none">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        © 2024 AI Consult. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-slate-500 hover:text-slate-700 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-slate-700 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
                        <a href="#" className="text-slate-500 hover:text-slate-700 dark:hover:text-gray-300 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
