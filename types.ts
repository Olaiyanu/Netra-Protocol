
// Add React import to resolve React namespace error
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapStep {
  quarter: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export interface TokenUtility {
  title: string;
  description: string;
  percentage: number;
}
