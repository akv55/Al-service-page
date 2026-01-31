import React from 'react';
import { Brain, Cpu, LineChart, Code } from 'lucide-react';

const services = [
    {
        title: 'AI Strategy Consulting',
        description: 'We help you identify high-imact AI use cases tailored to your business goals.',
        icon: Brain,
        color: 'text-purple-600 dark:text-purple-500'
    },
    {
        title: 'Machine Learning Integration',
        description: 'Seamlessly integrate ML models into your existing software infrastructure.',
        icon: Cpu,
        color: 'text-blue-600 dark:text-blue-500'
    },
    {
        title: 'Data Analytics & Insights',
        description: 'Unlock the power of your data with advanced predictive analytics.',
        icon: LineChart,
        color: 'text-green-600 dark:text-green-500'
    },
    {
        title: 'Custom AI Development',
        description: 'Build bespoke AI solutions, chatbots, and automation tools from scratch.',
        icon: Code,
        color: 'text-pink-600 dark:text-pink-500'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our Expertise</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        Comprehensive AI solutions designed to scale with your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="card-gradient p-8 rounded-2xl group cursor-pointer hover:-translate-y-2">
                            <div className={`w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
