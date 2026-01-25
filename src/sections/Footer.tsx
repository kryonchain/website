import React from 'react';
import { Github } from 'lucide-react';
import {XIcon} from "../components/Icons/Icons";

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 border-t border-blue-500/20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    KRYON
                </div>
                <p className="text-gray-400 mb-4">Next-Generation PoW DAG Blockchain</p>
                <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
                </div>
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="https://github.com/kryonchain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        <Github size={24} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://x.com/KryonChain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <XIcon size={24} />
                        <span>@KryonChain</span>
                    </a>
                </div>
                <p className="mt-4 text-gray-600 text-sm">© 2026 Kryon. All rights reserved.</p>
            </div>
        </footer>
    );
};