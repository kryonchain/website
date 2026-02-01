import React from 'react';
import AnimatedSection from "../AnimatedSection/AnimatedSection";

interface StatCardProps {
    value: string;
    label: string;
    delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => (
    <AnimatedSection delay={delay}>
        <div className="p-6 text-center bg-sky-900/50 rounded-xl border border-sky-500/50 hover:bg-sky-900/30 transition-all">
            <div className="text-4xl font-bold text-white mb-2">{value}</div>
            <div className="text-gray-300">{label}</div>
        </div>
    </AnimatedSection>
);

export default StatCard;