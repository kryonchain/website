import React from 'react';
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

interface SubscribeSectionProps {
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ({}) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <AnimatedSection>
                    <div style={{textAlign: "center"}} className={"sender-form-field"} data-sender-form-id={"e0R7RK"}></div>
                </AnimatedSection>
            </div>
        </section>
    );
};