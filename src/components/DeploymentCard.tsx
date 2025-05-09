import React from 'react';
import { CheckCircle, Clock, GitBranch, Package } from 'lucide-react';

const DeploymentCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 max-w-2xl w-full mx-auto transform transition-all duration-500 hover:shadow-xl animate-fade-in-up">
      <div className="flex items-center mb-6">
        <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">Deployment Successful</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Build and Deployment of React Application is successful using Jenkins
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Deploy Time</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <GitBranch className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Branch</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">main</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Build Size</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">2.4 MB</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>Build ID: #2025-06-15</span>
          <span>Deployed on: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default DeploymentCard;