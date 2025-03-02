"use client"
import React from 'react';
import { Plus } from 'lucide-react';

interface PromptBoxProps {
    definedPrompt: string;
    setDefinedPrompt: (prompt: string) => void;
    onGenerate: () => void;
    status: "idle" | "loading" | "done";
}

export default function PromptBox({ definedPrompt, setDefinedPrompt, onGenerate, status }: PromptBoxProps) {
    return (
        <div className="flex-1 flex flex-col gap-8 items-center p-16 shadow-lg bg-white rounded-md" 
             style={{ backgroundImage: 'url()', backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="text-4xl font-semibold mb-4 text-custom-dark-green">
                What will you create today?
            </h1>
            <input
                type="text"
                className="w-3/4 px-5 py-4 border shadow-2xl border-none outline-none focus:border-2"
                placeholder="Describe what you want to see..."
                value={definedPrompt}
                onChange={(e) => setDefinedPrompt(e.target.value)}
                disabled={status === "loading"} // ✅ Disable input while loading
            />

            <button
                onClick={onGenerate}
                disabled={status === "loading"} // ✅ Disable button while loading
                className={`cursor-pointer caret-transparent px-6 py-4 rounded-full mt-5 shadow-2xl flex flex-row gap-2
                    ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-custom-dark-green text-white"}`}
            >
                {status === "loading" ? (
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm font-medium">Generating...</span>
                    </div>
                ) : (
                    <>
                        <Plus size={19} color="white" />
                        <span className="text-sm font-medium">Generate Image</span>
                    </>
                )}
            </button>
        </div>
    );
}
