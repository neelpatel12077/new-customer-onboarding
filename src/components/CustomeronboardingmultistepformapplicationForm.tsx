import React, { useState } from 'react';
import PersonalInformationStep from './PersonalInformationStep';
import ContactDetailsStep from './ContactDetailsStep';
import ResidencyInformationStep from './ResidencyInformationStep';
import MilitaryServiceDeclarationStep from './MilitaryServiceDeclarationStep';

interface FormData {
  // Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  
  // Contact Details
  email: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  
  // Residency Information
  streetAddress: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  residencyStatus: string;
  
  // Military Service Declaration
  hasMilitaryService: boolean;
  branch?: string;
  rank?: string;
  yearsOfService?: string;
  dischargeType?: string;
}

const CustomerOnboardingMultiStepFormApplication: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    residencyStatus: '',
    hasMilitaryService: false,
    branch: '',
    rank: '',
    yearsOfService: '',
    dischargeType: ''
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformationStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <ContactDetailsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <ResidencyInformationStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <MilitaryServiceDeclarationStep
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Customer Onboarding
          </h1>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {step}
                    </div>
                    <span className="text-xs mt-2 text-gray-600">
                      {step === 1 && 'Personal'}
                      {step === 2 && 'Contact'}
                      {step === 3 && 'Residency'}
                      {step === 4 && 'Military'}
                    </span>
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default CustomerOnboardingMultiStepFormApplication;