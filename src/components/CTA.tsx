"use client";
import { useState } from "react";
import { ctaDetails } from "@/data/cta";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const CTA: React.FC = () => {
    const [clientAddress, setClientAddress] = useState("");
    const [personalizedUrl, setPersonalizedUrl] = useState("");

    const handleGenerate = () => {
        // Generate URL using the user provided clientAddress.
        // Adjust the base URL pattern as needed.
        const url = `https://cbiit.github.io/crdc-data-model-navigator?config=${encodeURIComponent(clientAddress)}`;
        setPersonalizedUrl(url);
    };

    const handleGo = () => {
        window.open(personalizedUrl, "_blank");
    };

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-3xl">
                         Personalized Data Model Navigator
                        </h2>

                        <p className="mx-auto max-w-2xl md:px-5">
                        Enter the GitHub URL of your configuration files and then hit the button below
                        </p>

                        {/* New personalized URL functionality */}
                        <div className="mt-8 flex flex-col items-center w-full">
                            <input
                                type="text"
                                placeholder="https://raw.githubusercontent.com/someone/dmn/refs/heads/main/config/"
                                value={clientAddress}
                                onChange={(e) => setClientAddress(e.target.value)}
                                className="p-2 border rounded-md mb-4 text-black w-full max-w-2xl"
                            />
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleGenerate}
                                    disabled={!clientAddress}
                                    className={`px-4 py-2 mb-4 rounded-md ${
                                        clientAddress
                                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                                            : "bg-yellow-500 cursor-not-allowed text-white"
                                    }`}
                                >
                                    Get personalized data model navigator URL
                                </button>
                                <button
                                    onClick={() => window.open("https://cbiit.github.io/crdc-data-model-navigator", "_blank")}
                                    className="px-4 py-2 mb-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                                >
                                    Visit Demo Site
                                </button>
                            </div>
                            {personalizedUrl && (
                                <div className="flex flex-col items-center max-w-2xl">
                                    <p className="mb-4">
                                        Your personalized URL:{" "}
                                        <a
                                            href={personalizedUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-200"
                                        >
                                            {personalizedUrl}
                                        </a>
                                    </p>
                                    <button
                                        onClick={handleGo}
                                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white"
                                    >
                                        Visit Your Data Model Navigator
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;