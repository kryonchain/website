import { LucideIcon } from 'lucide-react';

export interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface RoadmapTask {
    text: string;
    completed: boolean;
}

export interface RoadmapPhase {
    phase: string;
    title: string;
    items: RoadmapTask[];
}

export interface TechStat {
    value: string;
    label: string;
}

export interface FormData {
    name: string;
    email: string;
}

export type AnimationType = 'fade-up' | 'fade-left' | 'fade-right';
export type IconSize = 'sm' | 'md' | 'lg';
export type ButtonTheme = 'github' | 'x';