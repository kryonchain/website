import React, { ReactNode } from 'react';
import {ButtonTheme} from "../../types";

interface SocialButtonProps {
    href: string;
    icon?: React.FC;
    children: ReactNode;
    theme?: ButtonTheme;
}

const SocialButton: React.FC<SocialButtonProps> = ({
                                                              href,
                                                              icon: Icon,
                                                              children,
                                                              theme = 'github'
                                                          }) => {
    const themes: Record<ButtonTheme, string> = {
        github: 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600',
        x: 'bg-black border-gray-800 hover:bg-gray-900 hover:border-gray-700'
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 border-2 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${themes[theme]}`}
        >
            {Icon && <Icon />}
            {children}
        </a>
    );
};

export default SocialButton;