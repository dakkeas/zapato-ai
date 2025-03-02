"use client";
import React, { useState } from 'react';
import Create from '../components/create';
import { Box} from 'lucide-react';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1':
                return <Create/>;

            default:
                return null;
        }
    };


    return (
        <div className="min-h-screen  flex flex-col justify-between scrollbar-hide bg-custom-light-grey">
            <div className="bg-gray-50 p-12 scrollbar-none">
                <div className="text-3xl mb-6 font-bold">Zapato<span className="text-custom-dark-green">AI</span></div>
                <div className="flex mb-6 gap-2">
                    <div
                    className={`caret-transparent cursor-pointer flex justify-center items-center gap-2 flex-row w-29 px-4 py-2 rounded-md text-sm font-medium  ${activeTab === 'tab1' ? 'bg-custom-dark-green text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('tab1')}
                    >
                        <Box size={20} color={activeTab == "tab1" ? "white" : "black"}/>
                        <div
                            
                        >
                            Create
                        </div>
                    </div>
                    {/* <div
                    className={`caret-transparent cursor-pointer flex justify-center items-center gap-2 flex-row w-29 px-4 py-2 rounded-md text-sm font-medium  ${activeTab === 'tab2' ? 'bg-custom-dark-green text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveTab('tab2')}
                    >
                        <LibraryBig size={20} color={activeTab == "tab2" ? "white" : "black"}/>
                        <div
                            
                        >
                            Collections
                        </div>
                    </div> */}

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
