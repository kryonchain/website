import React, { ReactNode } from 'react';

interface SecondaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
                                                                    children,
                                                                    onClick,
                                                                    className = ''
                                                                }) => (
    <button
        onClick={onClick}
        className={`px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all ${className}`}
    >
        {children}
    </button>
);

export default SecondaryButton;