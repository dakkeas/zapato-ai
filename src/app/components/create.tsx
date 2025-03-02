"use client";
import React, { useState} from "react";
import Options from "../components/options";
import PromptBox from "../components/prompt-box";
import Result from "../components/result";

const Create = () => {
    const [selectedModelOption, setSelectedModelOption] = useState("");
    const [selectedImageFormat, setSelectedImageFormat] = useState("");
    const [finalImageFormat, setFinalImageFormat] = useState("");
    const [definedPrompt, setDefinedPrompt] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

    

    const handleGenerate = async () => {
        if (!definedPrompt.trim() || !selectedModelOption || !selectedImageFormat) {
            alert("Please fill all fields!");
            return;
        }

        setStatus("loading");

        // ✅ Only update finalImageFormat if it changes
        if (finalImageFormat !== selectedImageFormat) {
            setFinalImageFormat(selectedImageFormat);
        }

        try {
            const res1 = await fetch("/api/generateImage", { 
                method: "POST", 
                body: JSON.stringify({ definedPrompt, selectedImageFormat, selectedModelOption }) 
            });
            if (!res1.ok) throw new Error("Image generation failed");

            const res2 = await fetch("/api/generate3D", { method: "POST" });
            if (!res2.ok) throw new Error("3D generation failed");

            const res3 = await fetch("/api/convertGLB", { method: "POST" });
            if (!res3.ok) throw new Error("GLB conversion failed");

            setStatus("done");
        } catch (error) {
            console.error("Error generating model:", error);
            setStatus("idle");
        }
    };


    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
                <Options
                    setSelectedModelOption={setSelectedModelOption}
                    setSelectedImageFormat={setSelectedImageFormat}
                />
                <PromptBox
                    status={status}
                    definedPrompt={definedPrompt}
                    setDefinedPrompt={setDefinedPrompt}
                    onGenerate={handleGenerate}
                />
            </div>
            <Result selectedImageFormat={finalImageFormat} status={status} />
        </div>
    );
};

export default Create;
