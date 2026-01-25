import React, { ReactNode } from 'react';

interface PrimaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
                                                                children,
                                                                onClick,
                                                                className = ''
                                                            }) => (
    <button
        onClick={onClick}
        className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 ${className}`}
    >
        {children}
    </button>
);

export default PrimaryButton;