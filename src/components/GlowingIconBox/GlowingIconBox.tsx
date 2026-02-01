import React from 'react';
import { LucideIcon } from 'lucide-react';
import {IconSize} from "../../types";

interface GlowingIconBoxProps {
    icon: LucideIcon;
    size?: IconSize;
    animated?: boolean;
}

interface SizeConfig {
    container: string;
    icon: number;
    dot: string;
}

const GlowingIconBox: React.FC<GlowingIconBoxProps> = ({
                                                                  icon: Icon,
                                                                  size = 'md',
                                                                  animated = true
                                                              }) => {
    const sizes: Record<IconSize, SizeConfig> = {
        sm: { container: 'w-16 h-16', icon: 32, dot: 'w-2 h-2' },
        md: { container: 'w-20 h-20', icon: 36, dot: 'w-2 h-2' },
        lg: { container: 'w-24 h-24', icon: 48, dot: 'w-3 h-3' }
    };

    const sizeConfig = sizes[size];

    return (
        <div className={`relative ${sizeConfig.container} flex items-center justify-center`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-20 blur-xl ${animated ? 'animate-pulse' : ''}`} />
            <div
                className={`relative ${sizeConfig.container} bg-gradient-to-br from-gray-900 to-blue-950 rounded-lg border-2 border-blue-500/50 hover:border-blue-400 flex items-center justify-center transition-all duration-300`}
                style={{ boxShadow: '0 0 20px rgba(31, 168, 255, 0.3)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg" />
                <Icon
                    size={sizeConfig.icon}
                    className={`relative text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 ${animated ? 'animate-pulse' : ''}`}
                    strokeWidth={1.5}
                />
            </div>
            <div
                className={`absolute top-0 left-0 ${sizeConfig.dot} bg-blue-400 rounded-full ${animated ? 'animate-pulse' : ''}`}
                style={{ boxShadow: '0 0 10px rgba(31, 168, 255, 0.8)' }}
            />
            <div
                className={`absolute bottom-0 right-0 ${sizeConfig.dot} bg-blue-400 rounded-full ${animated ? 'animate-pulse' : ''}`}
                style={{ boxShadow: '0 0 10px rgba(31, 168, 255, 0.8)', animationDelay: '0.5s' }}
            />
        </div>
    );
};

export default GlowingIconBox;