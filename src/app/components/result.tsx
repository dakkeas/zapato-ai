import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Download, RefreshCcw } from "lucide-react";

interface ResultProps {
    status: "idle" | "loading" | "done";
    selectedImageFormat: string;
}

export default function Result({ status, selectedImageFormat }: ResultProps) {
    const [Loader, setLoader] = useState<React.ComponentType<{ status: string }> | null>(null);
    const [reloadKey, setReloadKey] = useState(0); // 🔄 Forces a reload

    const imageStatus = status; // Image reflects actual status
    status = "done"; // Everything else remains visible

    useEffect(() => {
        if (status === "done") {
            import("../components/3Dloader")
                .then((mod) => setLoader(() => mod.default))
                .catch((err) => {
                    console.error("Failed to load 3D Loader:", err);
                    setLoader(null); // Prevent crash by keeping it null
                });
        }
    }, [status, reloadKey]); // ✅ Reload when reloadKey changes

    return (
        <div className="flex flex-col bg-white rounded-md shadow-lg p-10 gap-5 w-full max-w-screen h-full">
            <div className="text-3xl font-semibold text-black mb-2">Generate</div>

            {/* Status Messages */}
            <div className="flex flex-row gap-5 items-stretch">
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <div className="w-96 h-96 rounded-m relative mb-5">
                            {imageStatus === "loading" ? (
                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                                    Loading...
                                </div>
                            ) : (
                                <Image
                                    src={`/result.${selectedImageFormat}?timestamp=${Date.now()}`} // ⏳ Cache-busting
                                    fill
                                    alt="Result Image"
                                    className="object-cover rounded-md shadow-md"
                                />
                            )}

                            <div className="absolute bottom-6 right-4 bg-custom-light-grey text-white px-3 py-1 rounded-full flex flex-row gap-2 items-center justify-center">
                                <Sparkles size={15} color="grey" />
                                <div className="text-gray-500 text-center text-sm font-medium">
                                    AI Generated
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 📥 Download Buttons */}
                    <a
                        href={`/result.${selectedImageFormat}`}
                        download={`result.${selectedImageFormat}`}
                        className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2"
                    >
                        <Download size={20} color="black" />
                        <span>Download Image</span>
                    </a>

                    <a
                        href="/result.glb"
                        download="result.glb"
                        className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2"
                    >
                        <Download size={20} color="black" />
                        <span>Download Mesh File</span>
                    </a>

                    {/* 🔄 Reload 3D Model Button */}
                    <button
                        className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2"
                        onClick={() => setReloadKey((prev) => prev + 1)} // 🔄 Triggers reload
                    >
                        <RefreshCcw size={20} color="black" />
                        <span>Reload Model</span>
                    </button>
                </div>

                {/* 3D Model Loader - Always Visible */}
                <div className="bg-gray-200 flex-1 rounded-md">
                    {Loader ? <Loader key={reloadKey} status={status} /> : <div className="text-gray-500 text-lg">3D model unavailable</div>}
                </div>
            </div>
        </div>
    );
}
