import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] transition-colors duration-300"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-400/20 dark:bg-violet-600/10 rounded-full blur-[100px] transition-colors duration-300"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">Next Gen AI Solutions</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
                        Transform Your <br />
                        <span className="gradient-text">Future with AI</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Unlock existing potential with our cutting-edge artificial intelligence strategies. We build the future, today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold hover:-translate-y-1 transition-transform">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all">
                            View Services
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <div className="relative w-full max-w-lg aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 rounded-full animate-pulse blur-3xl"></div>
                        <div className="relative z-10 w-full h-full bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-all duration-700 ease-out">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                                <Bot size={120} className="text-blue-600 dark:text-blue-400 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
