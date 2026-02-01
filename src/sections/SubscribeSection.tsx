import React, {RefObject} from 'react';
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

interface SubscribeSectionProps {
    subscribeRef: RefObject<HTMLElement | null>;
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ({subscribeRef}) => {
    return (
        <section className="py-12 px-4" ref={subscribeRef}>
            <div className="max-w-2xl mx-auto">
                <div style={{textAlign: "center"}} className={"sender-form-field"} data-sender-form-id={"e0R7RK"}></div>
            </div>
        </section>
    );
};