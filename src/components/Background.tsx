import React from 'react';

interface BackgroundProps {
  image: string;
  className?: string;
  children: React.ReactNode;
}

export default function Background({ image, className = '', children }: BackgroundProps) {
  return (
    <div
      className={`bg-fixed bg-cover bg-center w-full ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
