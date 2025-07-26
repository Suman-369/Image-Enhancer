import { useState } from "react";
import Home from "./components/Home";
import TextToImage from "./components/TextToImage";

const App = () => {
    const [activeTab, setActiveTab] = useState("enhance");

    return (
        <>
            <div className="min-h-screen py-8 px-4 relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full float"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full float" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full float" style={{animationDelay: '4s'}}></div>
                </div>

                <div className="simple-layout">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="modern-card p-8 mb-6">
                            <h1 className="text-5xl font-black gradient-text mb-4">
                                AI Image Studio
                            </h1>
                            <p className="text-xl text-white/80 font-medium">
                                Transform your images with cutting-edge AI technology
                            </p>
                            <div className="flex justify-center items-center mt-4 space-x-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pulse-glow"></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pulse-glow" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full pulse-glow" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="modern-card p-2 mb-8">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setActiveTab("enhance")}
                                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 tab-slide ${
                                    activeTab === "enhance"
                                        ? "btn-3d text-white glow"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                    <span>Enhance Image</span>
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab("generate")}
                                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 tab-slide ${
                                    activeTab === "generate"
                                        ? "btn-3d text-white glow"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                    </svg>
                                    <span>Generate Image</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="content-section">
                        {activeTab === "enhance" && <Home />}
                        {activeTab === "generate" && <TextToImage />}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">
                        <div className="glass-dark rounded-2xl px-6 py-4 inline-block">
                            <p className="text-white/60 text-sm font-medium">
                                Powered By <span className="gradient-text font-bold">Team  369</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;