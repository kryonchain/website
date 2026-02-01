import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import RoadmapCheckbox from "../RoadmapCheckbox/RoadmapCheckbox";
import {RoadmapTask} from "../../types";

interface RoadmapItemProps {
    phase: string;
    title: string;
    items: RoadmapTask[];
    index: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
                                                            phase,
                                                            title,
                                                            items,
                                                            index
                                                        }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const isEven = index % 2 === 0;
    const animation = isEven ? 'fade-left' : 'fade-right';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const rect = entry.boundingClientRect;
                const windowHeight = window.innerHeight;
                const centerStart = windowHeight * 0.3;
                const centerEnd = windowHeight * 0.7;
                const elementCenter = rect.top + rect.height / 2;

                setIsActive(elementCenter >= centerStart && elementCenter <= centerEnd);
            },
            { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const centerStart = windowHeight * 0.3;
                const centerEnd = windowHeight * 0.7;
                const elementCenter = rect.top + rect.height / 2;

                setIsActive(elementCenter >= centerStart && elementCenter <= centerEnd);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AnimatedSection
            animation={animation}
            delay={index * 200}
            className={`relative mb-16 ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
        >
            <div
                ref={ref}
                className={`p-8 rounded-2xl bg-gradient-to-br from-white/20 to-sky-700/20 border transition-all duration-500 ${
                    isActive
                        ? 'border-white/70 scale-105 shadow-2xl shadow-white-500/40'
                        : 'border-white/30 hover:border-white-400/50 scale-100'
                }`}
                style={{
                    boxShadow: isActive ? '0 0 40px rgba(31, 168, 255, 0.5)' : undefined
                }}
            >
                <div className="text-white font-bold text-sm mb-2">{phase}</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
                <ul className="space-y-3">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <RoadmapCheckbox completed={item.completed} />
                            <span className={`${item.completed ? 'text-white' : 'text-gray-400'} transition-colors`}>
                {item.text}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
        </AnimatedSection>
    );
};

export default RoadmapItem;