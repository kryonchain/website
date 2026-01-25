import React from 'react';

interface RoadmapCheckboxProps {
    completed: boolean;
}

const RoadmapCheckbox: React.FC<RoadmapCheckboxProps> = ({ completed }) => (
    <div className="relative mt-1 flex-shrink-0">
        {completed ? (
            <>
                <div className="absolute inset-0 bg-blue-500 blur-md opacity-60 animate-pulse" />
                <div
                    className="relative w-5 h-5 rounded border-2 border-blue-400 bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center"
                    style={{ boxShadow: '0 0 15px rgba(31, 168, 255, 0.6)' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="#60D0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </>
        ) : (
            <>
                <div className="absolute inset-0 bg-gray-600 blur-md opacity-30" />
                <div
                    className="relative w-5 h-5 rounded border-2 border-gray-600 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                    style={{ boxShadow: '0 0 10px rgba(107, 114, 128, 0.3)' }}
                />
            </>
        )}
    </div>
);

export default RoadmapCheckbox;