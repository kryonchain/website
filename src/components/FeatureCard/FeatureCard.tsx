import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import GlowingIconBox from "../GlowingIconBox/GlowingIconBox";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                            icon,
                                                            title,
                                                            description,
                                                            delay = 0
                                                        }) => (
    <AnimatedSection delay={delay}>
        <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
                <GlowingIconBox icon={icon} size="md" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
    </AnimatedSection>
);

export default FeatureCard;