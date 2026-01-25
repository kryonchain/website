import React, { useState, useEffect, useRef, ReactNode } from 'react';
import {AnimationType} from "../../types";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    animation?: AnimationType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                                    children,
                                                                    className = '',
                                                                    delay = 0,
                                                                    animation = 'fade-up'
                                                                }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const getAnimationClasses = (): string => {
        switch (animation) {
            case 'fade-left':
                return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';
            case 'fade-right':
                return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10';
            case 'fade-up':
            default:
                return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${getAnimationClasses()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;