import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TechnologySection } from './sections/TechnologySection';
import { RoadmapSection } from './sections/RoadmapSection';
import { SubscribeSection } from './sections/SubscribeSection';
import { Footer } from './sections/Footer';
import { features, roadmapData, techStats } from './data/config';
import { FormData } from './types';
import './App.css';

const App: React.FC = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const featuresRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = () => {
        if (formData.name && formData.email) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '' });
            }, 3000);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white min-h-screen">
            <HeroSection scrollY={scrollY} onGetStartedClick={scrollToFeatures} />
            <FeaturesSection features={features} featuresRef={featuresRef} />
            <TechnologySection techStats={techStats} />
            <RoadmapSection roadmapData={roadmapData} />
            <SubscribeSection
                formData={formData}
                submitted={submitted}
                onFormChange={setFormData}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    );
};

export default App;