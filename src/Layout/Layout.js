import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar fixed on the left */}
            <Sidebar className="hidden lg:flex lg:w-1/4 h-full flex-shrink-0" />

            {/* Main content area */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar  */}
                <Navbar className="h-16 w-full flex-shrink-0" />

                {/* Content area */}
                <div className="flex-1 overflow-auto p-4 sm:p-6">
                    {children}
                </div>
                {/* Footer area  */}
                <Footer className="h-16 w-full flex-shrink-0" />
            </div>
        </div>
    );
};

export default Layout;
