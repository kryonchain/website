import React from 'react';
import AnimatedSection from "../AnimatedSection/AnimatedSection";

interface StatCardProps {
    value: string;
    label: string;
    delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => (
    <AnimatedSection delay={delay}>
        <div className="p-6 text-center bg-blue-900/20 rounded-xl border border-blue-500/30 hover:bg-blue-900/30 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
            <div className="text-gray-300">{label}</div>
        </div>
    </AnimatedSection>
);

export default StatCard;