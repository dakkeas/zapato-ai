"use client"

import React, { useState } from 'react';

interface DropdownProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    content: Record<string, [string, string]>;
    setSelectedOption: (option: string) => void;
}

export default function Dropdown({ title, isOpen, onToggle, content, setSelectedOption }: DropdownProps) {
    const [selected, setSelected] = useState<string | null>(null);

    const onSelect = (key: string) => {
        setSelected(key);
        setSelectedOption(content[key][0]);

        onToggle(); // Close the dropdown after selection
    };

    return (
        <div className="relative">
            <button
                onClick={onToggle}
                id="dropdownRadioHelperButton"
                data-dropdown-toggle="dropdownRadioHelper"
                className="caret-transparent text-sm font-medium text-black border-2 border-black hover:bg-custom-light-grey focus:outline-none focus:ring-custom-dark-green min-w-64 px-10 py-4 text-center inline-flex items-center w-full justify-center scrollbar-hide"
                type="button"
            >
                {selected ? content[selected][0] : title} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownRadioHelper" className={`${isOpen ? '' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 shadow-xl w-60 mt-2`}>
                <ul className="p-4 space-y-1 text-sm text-gray-700 caret-transparent scrollbar-hide" aria-labelledby="dropdownRadioHelperButton">
                    {Object.entries(content).map(([key, value]) => (
                        <li key={key} onClick={() => onSelect(key)}>
                            <div className="flex p-2 rounded-sm hover:bg-gray-100 caret-transparent cursor-pointer">
                                <div className="ms-2 text-sm cursor-pointer">
                                    <label htmlFor={`helper-radio-${key}`} className="font-medium text-gray-900 cursor-pointer">
                                        <div>{value[0]}</div>
                                        <p id={`helper-radio-text-${key}`} className="text-xs font-normal text-gray-500 mt-1 text-left cursor-pointer">{value[1]}</p>
                                    </label>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
