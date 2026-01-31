import {Zap, Shield, Layers, TrendingUp, Radar, Laptop} from 'lucide-react';
import { Feature, RoadmapPhase, TechStat } from '../types';

export const features: Feature[] = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        desc: 'Every block counts! Thanks to DAG, we can maximize throughput along with block rewards!'
    },
    {
        icon: Shield,
        title: 'Highly Secure',
        desc: 'PoW consensus combined with Tor networking layer'
    },
    {
        icon: Layers,
        title: 'DAG Technology',
        desc: 'Up to 20 miners can append new blocks in parallel (everyone gets block reward and still secure)'
    },
    {
        icon: TrendingUp,
        title: 'Scalable',
        desc: "High throughput, more rewards"
    },
    {
        icon: Radar,
        title: 'ASIC resistant',
        desc: "Using Yescrypt to don't let big companies dominate mining"
    },
    {
        icon: Laptop,
        title: 'Laptop-Ready mining',
        desc: "Earn rewards even from your laptop"
    }
];

export const roadmapData: RoadmapPhase[] = [
    {
        phase: 'Q1 2026',
        title: 'Foundation',
        items: [
            { text: 'Project vision & architecture defined', completed: true },
            { text: 'GitHub organization', completed: true },
            { text: 'Community channels opened (Twitter, GitHub Discussions)', completed: true },
            { text: 'Branding & visual identity finalized', completed: true },
            { text: 'Public website', completed: true },
        ]
    },
    {
        phase: 'Q1-Q2 2026',
        title: 'Networking & Privacy Layer',
        items: [
            { text: 'LibP2P Tor transport layer (Rust)', completed: false },
            { text: 'Publish transport crate to crates.io', completed: false },
        ]
    },
    {
        phase: 'Q2-Q3 2026',
        title: 'Consensus & Core Protocol',
        items: [
            { text: 'PoW engine', completed: false },
            { text: 'DAG consensus', completed: false },
            { text: 'Core Node implementation', completed: false },
        ]
    },
    {
        phase: 'Q3 end - Q4 2026',
        title: 'MVP readiness & Testnet Launch',
        items: [
            { text: 'UTXO processor', completed: false },
            { text: 'CLI Miner', completed: false },
            { text: 'CLI wallet', completed: false },
            { text: 'Public testnet', completed: false },
            { text: 'MVP readiness', completed: false },
        ]
    },
    {
        phase: 'Post-MVP',
        title: 'Mainnet launch',
        items: [
            { text: 'Fixing Testnet issues', completed: false },
            { text: 'GUI Wallet', completed: false },
            { text: 'GUI Miner', completed: false },
            { text: 'Public Mainnet', completed: false },
        ]
    }
];

export const techStats: TechStat[] = [
    { value: '1 block / second', label: 'High Throughput' },
    { value: '20', label: 'Reward winners at the same time' },
    { value: 'Yescrypt hashing', label: 'ASIC resistance' },
];