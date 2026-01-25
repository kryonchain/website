import { Zap, Shield, Layers, TrendingUp } from 'lucide-react';
import { Feature, RoadmapPhase, TechStat } from '../types';

export const features: Feature[] = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
    },
    {
        icon: Shield,
        title: 'Highly Secure',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
        icon: Layers,
        title: 'DAG Technology',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    {
        icon: TrendingUp,
        title: 'Scalable',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.'
    }
];

export const roadmapData: RoadmapPhase[] = [
    {
        phase: 'Q1 2026',
        title: 'Foundation',
        items: [
            { text: 'Core protocol development', completed: true },
            { text: 'DAG architecture design', completed: true },
            { text: 'Testnet launch', completed: false }
        ]
    },
    {
        phase: 'Q2 2026',
        title: 'Development',
        items: [
            { text: 'Smart contract integration', completed: false },
            { text: 'Wallet development', completed: false },
            { text: 'Security audits', completed: false }
        ]
    },
    {
        phase: 'Q3 2026',
        title: 'Beta',
        items: [
            { text: 'Public testnet', completed: false },
            { text: 'Community building', completed: false },
            { text: 'Partnership announcements', completed: false }
        ]
    },
    {
        phase: 'Q4 2026',
        title: 'Launch',
        items: [
            { text: 'Mainnet release', completed: false },
            { text: 'Exchange listings', completed: false },
            { text: 'Ecosystem expansion', completed: false }
        ]
    }
];

export const techStats: TechStat[] = [
    { value: '1000+', label: 'High Throughput' },
    { value: '2000+', label: 'Low Latency' },
    { value: '3000+', label: 'Energy Efficient' }
];