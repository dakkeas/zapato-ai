"use client"
import React, { useState } from 'react';
import { FileImage, Brain } from 'lucide-react';
import Dropdown from './dropdown';

interface OptionsProps {
    setSelectedModelOption: (option: string) => void;
    setSelectedImageFormat: (format: string) => void;
}

const imageFormatOptions: Record<string, [string, string]> = {
    jpeg: ["jpeg", "Common image format with good compression and quality"],
    png: ["png", "Lossless format with transparency support"],
    webp: ["webp", "Modern format with superior compression and quality"]
};

const modelOptions: Record<string, [string, string]> = {
    stableImageUltra: ["Stable Image Ultra", "Highest-quality image generation with advanced prompt understanding and artistic precision."],
    stableImageCore: ["Stable Image Core", "Fast, high-quality image generation with no prompt engineering required."],
};

export default function Options({ setSelectedModelOption, setSelectedImageFormat }: OptionsProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    return (
        <div className="flex flex-col gap-5 p-10 rounded-md bg-white shadow-lg">
            <div className="text-3xl font-semibold text-black mb-2">
                Options
            </div>
            <div className="">
                <div className="flex flex-1 flex-row gap-2 justify-left mb-2">
                    <Brain size={19} color="black"></Brain>
                    <div className="text-sm text-black font-semibold mb-3 ">Choose a Model</div>
                </div>
                <Dropdown
                    isOpen={openDropdown === 'dropdown0'}
                    onToggle={() => toggleDropdown('dropdown0')}
                    content={modelOptions}
                    title={"Select"}
                    setSelectedOption={setSelectedModelOption}
                ></Dropdown>
            </div>
            <div className="">
                <div className="flex flex-1 flex-row gap-2 justify-left mb-2">
                    <FileImage size={19} color="black"></FileImage>
                    <div className="text-sm text-black font-semibold mb-3 ">Choose an image Format</div>
                </div>
                <Dropdown
                    isOpen={openDropdown === 'dropdown1'}
                    onToggle={() => toggleDropdown('dropdown1')}
                    title={"Select"}
                    content={imageFormatOptions}
                    setSelectedOption={setSelectedImageFormat}
                ></Dropdown>
            </div>
        </div>
    )
}