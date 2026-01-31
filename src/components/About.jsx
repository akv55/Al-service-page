import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-300 dark:bg-blue-600 blur-3xl opacity-30 dark:opacity-20 transform -rotate-6 transition-colors duration-300"></div>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                            alt="Team working on AI"
                            className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 transition-colors duration-300"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300">Why Choose Us?</h2>
                    <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg transition-colors duration-300">
                        We combine deep technical expertise with business acumen to deliver AI solutions that solve real-world problems, not just hype.
                    </p>
                    <div className="space-y-4">
                        {[
                            'Proven track record of successful AI deployments',
                            'Cross-industry expertise (FinTech, Health, Retail)',
                            'End-to-end support from strategy to maintenance',
                            'Focus on ethical and explainable AI'
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <CheckCircle className="text-green-600 dark:text-green-500 mr-3 shrink-0" size={20} />
                                <span className="text-slate-700 dark:text-gray-300 transition-colors duration-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
