import React from 'react';
import {ChevronDown, Github, XIcon} from 'lucide-react';
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton";
import SocialButton from "../components/SocialButton/SocialButton";

interface HeroSectionProps {
    scrollY: number;
    onGetStartedClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, onGetStartedClick }) => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #1FA8FF 0%, transparent 50%)`,
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />

            <div className="relative z-10 text-center px-4 animate-fadeIn">
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-50 animate-pulse" />
                    <img
                        src="/logo.png"
                        alt="Kryon Logo"
                        className="h-80 relative object-contain drop-shadow-2xl"
                        style={{
                            filter: 'drop-shadow(0 0 40px rgba(31, 168, 255, 0.6))'
                        }}
                    />
                </div>

                <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                    KRYON
                </h1>
                <p className="text-2xl mb-8 text-blue-200">Next-Generation PoW DAG Blockchain</p>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                    Revolutionizing distributed ledger technology with unprecedented speed, security, and scalability through our innovative DAG architecture.
                </p>

                <div className="flex gap-4 justify-center flex-wrap mb-16">
                    <PrimaryButton onClick={onGetStartedClick}>
                        Get Started
                    </PrimaryButton>
                    <SecondaryButton onClick={onGetStartedClick}>
                        Learn More
                    </SecondaryButton>
                    <SocialButton href="https://github.com/kryonchain" icon={() => <Github size={20} />} theme="github">
                        GitHub
                    </SocialButton>
                    <SocialButton href="https://x.com/KryonChain" icon={XIcon} theme="x">
                        @KryonChain
                    </SocialButton>
                </div>

                <div className="flex justify-center">
                    <ChevronDown
                        onClick={onGetStartedClick}
                        className="animate-bounce text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
                        size={40}
                    />
                </div>
            </div>
        </section>
    );
};