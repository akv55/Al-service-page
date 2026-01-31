import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 transition-colors duration-300">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
