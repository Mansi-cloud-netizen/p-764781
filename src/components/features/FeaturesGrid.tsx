import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Text to Speech',
    description: 'Powerful & efficient text to speech conversion using AI technology',
  },
  {
    title: 'Speech to Text',
    description: 'Convert Speech to text with high accuracy using Whisper AI',
  },
  {
    title: 'Sign language converter',
    description: 'Convert sign language to text & speech using highly efficient KNN classifiers',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};