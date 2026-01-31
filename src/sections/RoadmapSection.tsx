import React from 'react';
import { RoadmapPhase } from '../types';
import RoadmapItem from "../components/RoadmapItem/RoadmapItem";

interface RoadmapSectionProps {
    roadmapData: RoadmapPhase[];
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ roadmapData }) => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Roadmap<br />(subject to refinement)
                </h2>
                <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700" />      {roadmapData.map((item, idx) => (
                <RoadmapItem
                    key={idx}
                    phase={item.phase}
                    title={item.title}
                    items={item.items}
                    index={idx}
                />
            ))}
            </div>
            </div>
        </section>
    );
};