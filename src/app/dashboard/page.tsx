"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Create from '../components/create';
import Collections from '../components/collections';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1':
                return <Create/>;
            case 'tab2':
                return <Collections/>;
            default:
                return null;
        }
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logged out');
    };

    return (
        <div className="min-h-screen  flex flex-col justify-between">
            <div className="bg-white p-12">
                <div className="text-3xl mb-6 font-bold">Zapato<span className="text-custom-dark-green">AI</span></div>
                <div className="flex mb-6 gap-2">
                    <button
                        className={`w-28 px-4 py-1 rounded-l-sm text-sm font-medium  ${activeTab === 'tab1' ? 'bg-custom-dark-green text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('tab1')}
                    >
                        Create
                    </button>
                    <button
                        className={`w-28 px-4 py-1 text-sm rounded-r-sm font-medium  ${activeTab === 'tab2' ? 'bg-custom-dark-green text-white' : 'bg-gray-100 text-gray-500'}`}
                        onClick={() => setActiveTab('tab2')}
                    >
                        Collections
                    </button>
                </div>
                <div className='flex'>
                    <div className="flex-1">
                        {renderContent()}
                    </div>

                </div>
            {/* <button
                onClick={handleLogout}
                className="mt-6 bg-red-400 text-white py-2 rounded-lg self-center w-32"
            >
                <Link href='/'>
                Log Out
                </Link>
            </button> */}

            
            </div>
        </div>
    );
};

export default DashboardPage;
