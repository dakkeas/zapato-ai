
import React, { useState } from 'react';

import { Plus} from 'lucide-react';

interface PromptBoxProps {
  definedPrompt: string;
  setPrompt: (value: string) => void;
  onGenerate: () => void; // Create.tsx handles validation & API call
}
export default function PromptBox({ definedPrompt,setDefinedPrompt, onGenerate }) {
    return (
        <div className="flex-1 flex flex-col gap-8 items-center p-16 shadow-lg bg-white rounded-md" style={{ backgroundImage: 'url()', backgroundSize: "cover", backgroundPosition: "center"}}>
            <h1 className="text-4xl font-semibold mb-4 text-custom-dark-green ">What will you create today?</h1>
            <input
                type="text"
                className="w-3/4 px-5 py-4 border shadow-2xl border-none outline-none focus:border-2"
                placeholder="Describe what you want to see.."
                value={definedPrompt}
                onChange={(e) => setDefinedPrompt(e.target.value)}
            />

            <div
            onClick={onGenerate}
             className="cursor-pointer caret-transparent bg-custom-dark-green text-white px-6 py-4 rounded-full mt-5 shadow-2xl flex flex-row gap-2">
                <Plus size={19} color="white"></Plus>
                <div
                    className="text-sm font-medium "
                >
                    Generate Image
                </div>


            </div>
        </div>

    )

}