import React from 'react';
import { Layers } from 'lucide-react';
import { TechStat } from '../types';
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import GlowingIconBox from "../components/GlowingIconBox/GlowingIconBox";
import StatCard from "../components/StatCard/StatCard";

interface TechnologySectionProps {
    techStats: TechStat[];
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ techStats }) => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection className="flex flex-col items-center mb-8">
                    <div className="mb-6">
                        <GlowingIconBox icon={Layers} size="lg" />
                    </div>
                    <h2 className="text-5xl font-bold text-center bg-gradient-to-r text-white bg-clip-text text-transparent">
                        Revolutionary Technology
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <p className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                        Powerful, rock-solid yet simple and not overcomplicated technology
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-6">
                    {techStats.map((stat, idx) => (
                        <StatCard
                            key={idx}
                            value={stat.value}
                            label={stat.label}
                            delay={idx * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};