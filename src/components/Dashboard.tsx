import React, { useState, useEffect } from 'react';
import Header from './Header';
import JenkinsLogo from './JenkinsLogo';
import DeploymentCard from './DeploymentCard';
import { Activity, Server, Code, GitBranch } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const stats = [
    { label: 'Build Time', value: '2m 15s', icon: Activity },
    { label: 'Server Status', value: 'Healthy', icon: Server },
    { label: 'Code Coverage', value: '98%', icon: Code },
    { label: 'Active Branch', value: 'main', icon: GitBranch },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="py-8 md:py-12">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10 animate-fade-in-down">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Welcome to CI/CD World with Sagar Kakkala
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                  Your continuous integration and deployment pipeline is up and running successfully.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
                      </div>
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mb-12">
                <JenkinsLogo />
              </div>

              <div className="mb-12">
                <DeploymentCard />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in-up">
                <div className="flex space-x-4 mb-6 border-b dark:border-gray-700">
                  {['overview', 'details', 'logs'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-4 text-sm font-medium capitalize transition-colors duration-200 ${
                        activeTab === tab
                          ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Build', 'Test', 'Deploy'].map((stage, index) => (
                    <div 
                      key={stage}
                      className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">{index + 1}</span>
                        </div>
                        <h3 className="ml-3 font-semibold text-lg text-gray-800 dark:text-white">{stage}</h3>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {stage === 'Build' && 'Source code compiled successfully'}
                        {stage === 'Test' && 'All tests passed with 100% coverage'}
                        {stage === 'Deploy' && 'Application deployed to production'}
                      </p>
                      <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 dark:bg-blue-400 rounded-full w-full transform origin-left animate-grow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
        
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} CI/CD Dashboard. Powered by Jenkins.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;