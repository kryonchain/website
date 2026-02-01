import React, { RefObject } from 'react';
import { Feature } from '../types';
import FeatureCard from "../components/FeatureCard/FeatureCard";

interface FeaturesSectionProps {
    features: Feature[];
    featuresRef: RefObject<HTMLElement | null>;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features, featuresRef }) => {
    return (
        <section ref={featuresRef} className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r text-white bg-clip-text text-transparent">
                    Powerful Features
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.desc}
                            delay={idx * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};