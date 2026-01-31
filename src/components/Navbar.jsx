import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-2xl text-blue-600 dark:text-blue-500">
                        AI Consult
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#home" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#services" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                            <a href="#about" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow">Contact Us</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600/10 text-blue-600 dark:text-blue-400">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
