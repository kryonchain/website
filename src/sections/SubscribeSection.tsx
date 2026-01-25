import React from 'react';
import { Mail, User } from 'lucide-react';
import { FormData } from '../types';
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

interface SubscribeSectionProps {
    formData: FormData;
    submitted: boolean;
    onFormChange: (data: FormData) => void;
    onSubmit: () => void;
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ({
                                                                      formData,
                                                                      submitted,
                                                                      onFormChange,
                                                                      onSubmit
                                                                  }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <AnimatedSection>
                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-900/50 to-blue-950/50 border border-blue-500/30 backdrop-blur overflow-hidden">
                        {/* Glowing pulsating background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 animate-pulse" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                Stay Updated
                            </h2>
                            <p className="text-center text-gray-300 mb-8">
                                Subscribe to receive the latest updates about Kryon blockchain
                            </p>

                            {submitted ? (
                                <div className="text-center py-8 text-green-400 text-xl animate-fadeIn">
                                    ✓ Thank you for subscribing!
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-blue-950/50 border border-blue-500/30 rounded-xl focus:outline-none focus:border-blue-400 transition-all text-white placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={(e) => onFormChange({ ...formData, email: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-blue-950/50 border border-blue-500/30 rounded-xl focus:outline-none focus:border-blue-400 transition-all text-white placeholder-gray-400"
                                        />
                                    </div>

                                    <button
                                        onClick={onSubmit}
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};