"use client"
import React, {useState} from 'react';
import Options from '../components/options';
import PromptBox from '../components/prompt-box';
import Result from '../components/result'
import axios from "axios";

const Create = () => {
    const [selectedModelOption, setSelectedModelOption] = useState('')
    const [selectedImageFormat, setSelectedImageFormat] = useState('')
    const [definedPrompt, setDefinedPrompt] = useState('')

    const [image, setImage] = useState<string | null>(null);
    const [glbFile, setGlbFile] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

    const handleGenerate = async () => {
        if (!prompt.trim() || !selectedModelOption || !selectedImageFormat) {
        alert("Please fill all fields!");
        return;
        }

        setStatus("loading");

        try {
        const response = await axios.post("/api/generateImage&GLB", {
            definedPrompt: prompt,
            selectedImageFormat,
            selectedModelOption,
        });

        if (response.status === 200) {
            setImage(response.data.imageUrl);
            setGlbFile(response.data.glbUrl);
            setStatus("done");
        } else {
            throw new Error(response.data.error);
        }
        } catch (error) {
        console.error("Generation failed:", error);
        alert("Something went wrong.");
        setStatus("idle");
        }
    };




    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
                <Options
                setSelectedModelOption={setSelectedModelOption}
                setSelectedImageFormat={setSelectedImageFormat}
                ></Options>
                <PromptBox
                definedPrompt={definedPrompt}
                setDefinedPrompt={setDefinedPrompt}
                onGenerate={handleGenerate}
                ></PromptBox>
            </div>
            <Result
            status={status}
            image={image}
            ></Result>
        </div>

    );
};

export default Create;

