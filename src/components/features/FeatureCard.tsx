import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-['Gothic_A1'] text-2xl font-semibold mb-3 leading-[35px]">
        {title}
      </h2>
      <p className="font-['Gothic_A1'] text-lg leading-[25px] text-gray-700">
        {description}
      </p>
    </article>
  );
};