import React from 'react';

interface OnDevelopmentProps {
  pageName: string;
}

const OnDevelopment: React.FC<OnDevelopmentProps> = ({ pageName }) => {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <div className="mb-8 text-6xl animate-bounce">
        🚧
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {pageName}
      </h1>
      <div className="flex gap-4 text-4xl mb-6 animate-pulse">
        <span>🛠️</span>
        <span>👷</span>
        <span>⚙️</span>
      </div>
      <p className="text-lg text-gray-600 mb-4">
        Halaman ini sedang dalam pengembangan
      </p>
      <div className="text-gray-500 flex items-center gap-2">
        <span className="text-2xl">🏗️</span>
        <span>Mohon bersabar, kami sedang membangun sesuatu yang keren!</span>
      </div>
    </div>
  );
};

export default OnDevelopment;
