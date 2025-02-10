"use client"
import React, { useState } from 'react';
import Dropdown from '../components/dropdown';

const Create = () => {
    const [inputText, setInputText] = useState('');

    const handleGenerate = () => {
        // Handle generate logic here
        console.log('Input Text:', inputText);
    };


    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    const imageFormatOptions = {
        jpeg: ["jpeg", "Common image format with good compression and quality"],
        png: ["png", "Lossless format with transparency support"],
        webp: ["webp", "Modern format with superior compression and quality"]
    };


    const modelOptions = {
        stableImageUltra: ["Stable Image Ultra", "Highest-quality image generation with advanced prompt understanding and artistic precision."],
        stableImageCore: ["Stable Image Core", "Fast, high-quality image generation with no prompt engineering required."],
    };

    return (
        <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-4 p-10 border-2 border-black rounded-sm">
                <div className="">
                    <div className="text-sm font-semibold mb-2">Choose a Model</div>
                    <Dropdown
                    isOpen={openDropdown === 'dropdown1'}
                    onToggle={() => toggleDropdown('dropdown1')}
                    content={modelOptions}
                    title={"Select"}
                    ></Dropdown>

                    {/* select model */}
                </div>
                <div className="">
                    <div className="text-sm font-semibold mb-2">Choose an image Format</div>
                    <Dropdown
                    isOpen={openDropdown === 'dropdown2'}
                    onToggle={() => toggleDropdown('dropdown2')}
                    title={"Select"}
                    content={imageFormatOptions}
                    ></Dropdown>
                    {/* select image format */}

                </div>
            </div>


            <div className="flex-1 flex flex-col gap-8 items-center p-16 bg-white  border-2 rounded-sm border-black" style={{ backgroundImage: 'url()', backgroundSize: "cover", backgroundPosition: "center"}}>
                <h2 className="text-4xl font-semibold mb-4 text-custom-dark-green ">What will you create today?</h2>
                <input
                    type="text"
                    className="w-2/3 px-5 py-4 border shadow-2xl border-none outline-none focus:border-2"
                    placeholder="Describe what you want to see.."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button 
                    onClick={handleGenerate}
                    className="text-sm font-medium bg-custom-dark-green text-white px-10 py-4 rounded-sm mt-5 shadow-2xl"
                >
                    Generate Image
                </button>
            </div>
        </div>

    );
};

export default Create;
