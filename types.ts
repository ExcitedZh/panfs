import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface MaterialData {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  images: string[];
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}