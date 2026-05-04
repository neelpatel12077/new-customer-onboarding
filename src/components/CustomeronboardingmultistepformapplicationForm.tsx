import React, { useState } from 'react';
import PersonalInformationStep from './PersonalInformationStep';
import ContactDetailsStep from './ContactDetailsStep';
import ResidencyInformationStep from './ResidencyInformationStep';
import MilitaryServiceInformationStep from './MilitaryServiceInformationStep';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  ukResident: string;
  visaType: string;
  visaExpiryDate: string;
  proofOfResidency: File | null;
  proofOfResidencyName?: string;
  servedInMilitary: string;
  branch: string;
  serviceStartDate: string;
  serviceEndDate: string;
  dischargeDocument: File | null;
  dischargeDocumentName?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postcode?: string;
  ukResident?: string;
  visaType?: string;
  visaExpiryDate?: string;
  proofOfResidency?: string;
  servedInMilitary?: string;
  branch?: string;
  serviceStartDate?: string;
  serviceEndDate?: string;
  dischargeDocument?: string;
}

const STEPS = [
  { id: 0, title: 'Personal Information', description: 'Basic details' },
  { id: 1, title: 'Contact Details', description: 'Contact information' },
  { id: 2, title: 'Residency Information', description: 'Residency status' },
  { id: 3, title: 'Military Service', description: 'Service history' },
];

const CustomerOnboardingMultiStepFormApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    ukResident: '',
    visaType: '',
    visaExpiryDate: '',
    proofOfResidency: null,
    proofOfResidencyName: '',
    servedInMilitary: '',
    branch: '',
    serviceStartDate: '',
    serviceEndDate: '',
    dischargeDocument: null,
    dischargeDocumentName: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateAlphabetic = (value: string): boolean => {
    return /^[A-Za-z\s'-]+$/.test(value);
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateUKPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\s/g, '');
    return /^(\+44|0)[1-9]\d{9}$/.test(cleaned) || /^07\d{9}$/.test(cleaned);
  };

  const validateUKPostcode = (postcode: string): boolean => {
    return /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i.test(postcode);
  };

  const validateAge = (dateOfBirth: string): boolean => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  };

  const validateFutureDate = (date: string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inputDate = new Date(date);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate > today;
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 0) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      } else if (!validateAlphabetic(formData.firstName)) {
        newErrors.firstName = 'First name must contain only alphabetic characters';
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      } else if (!validateAlphabetic(formData.lastName)) {
        newErrors.lastName = 'Last name must contain only alphabetic characters';
      }

      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      } else if (!validateAge(formData.dateOfBirth)) {
        newErrors.dateOfBirth = 'You must be at least 18 years old';
      }

      if (!formData.nationality) {
        newErrors.nationality = 'Nationality is required';
      }
    }

    if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!validateUKPhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid UK phone number';
      }

      if (!formData.addressLine1.trim()) {
        newErrors.addressLine1 = 'Address line 1 is required';
      }

      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
      }

      if (!formData.postcode.trim()) {
        newErrors.postcode = 'Postcode is required';
      } else if (!validateUKPostcode(formData.postcode)) {
        newErrors.postcode = 'Please enter a valid UK postcode';
      }
    }

    if (step === 2) {
      if (!formData.ukResident) {
        newErrors.ukResident = 'Please select your UK residency status';
      }

      if (formData.ukResident === 'No') {
        if (!formData.visaType) {
          newErrors.visaType = 'Visa type is required for non-UK residents';
        }

        if (!formData.visaExpiryDate) {
          newErrors.visaExpiryDate = 'Visa expiry date is required for non-UK residents';
        } else if (!validateFutureDate(formData.visaExpiryDate)) {
          newErrors.visaExpiryDate = 'Visa expiry date must be in the future';
        }
      }

      if (!formData.proofOfResidency) {
        newErrors.proofOfResidency = 'Proof of residency document is required';
      }
    }

    if (step === 3) {
      if (!formData.servedInMilitary) {
        newErrors.servedInMilitary = 'Please indicate if you have served in the military';
      }

      if (formData.servedInMilitary === 'Yes') {
        if (!formData.branch) {
          newErrors.branch = 'Branch of service is required';
        }

        if (!formData.serviceStartDate) {
          newErrors.serviceStartDate = 'Service start date is required';
        }

        if (!formData.serviceEndDate) {
          newErrors.serviceEndDate = 'Service end date is required';
        } else if (formData.serviceStartDate && formData.serviceEndDate) {
          const startDate = new Date(formData.serviceStartDate);
          const endDate = new Date(formData.serviceEndDate);
          if (endDate <= startDate) {
            newErrors.serviceEndDate = 'Service end date must be after start date';
          }
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartNew = () => {
    setIsSubmitted(false);
    setCurrentStep(0);
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      nationality: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postcode: '',
      ukResident: '',
      visaType: '',
      visaExpiryDate: '',
      proofOfResidency: null,
      proofOfResidencyName: '',
      servedInMilitary: '',
      branch: '',
      serviceStartDate: '',
      serviceEndDate: '',
      dischargeDocument: null,
      dischargeDocumentName: '',
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Thank you for completing your customer onboarding application. Your information has been received and is being processed.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What happens next?</h3>
              <ul className="text-left space-y-3 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Our team will review your application within 2-3 business days</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You will receive a confirmation email at <strong>{formData.email}</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>We may contact you at <strong>{formData.phone}</strong> if additional information is needed</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartNew}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Submit Another Application
              </button>
              <button
                onClick={() => window.print()}
                className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 hover: