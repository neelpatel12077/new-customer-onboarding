import React from 'react';
import CustomerOnboardingMultiStepFormApplicationForm from './components/CustomeronboardingmultistepformapplicationForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Customer Onboarding
          </h1>
          <p className="text-lg text-gray-600">
            Complete the multi-step form to get started
          </p>
        </div>
        <CustomerOnboardingMultiStepFormApplicationForm />
      </div>
    </div>
  );
};

export default App;