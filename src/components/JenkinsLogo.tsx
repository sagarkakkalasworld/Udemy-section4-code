import React from 'react';
import { Settings } from 'lucide-react';

const JenkinsLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
          <Settings className="h-14 w-14 text-blue-600 animate-pulse" />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          Jenkins
        </div>
      </div>
    </div>
  );
};

export default JenkinsLogo;