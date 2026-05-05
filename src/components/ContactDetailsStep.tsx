import React from 'react';

interface ContactDetailsStepProps {
  data: {
    email?: string;
    confirmEmail?: string;
    mobilePhone?: string;
    homePhone?: string;
    preferredContactMethod?: string;
  };
  errors: {
    email?: string;
    confirmEmail?: string;
    mobilePhone?: string;
    homePhone?: string;
    preferredContactMethod?: string;
  };
  onChange: (field: string, value: string) => void;
}

const ContactDetailsStep: React.FC<ContactDetailsStepProps> = ({
  data,
  errors,
  onChange,
}) => {
  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'mobile', label: 'Mobile Phone' },
    { value: 'home', label: 'Home Phone' },
  ];

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned;
  };

  const handlePhoneChange = (field: string, value: string) => {
    const formatted = formatPhoneNumber(value);
    onChange(field, formatted);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Contact Details
        </h2>
        <p className="text-slate-600 text-lg">
          Please provide your contact information so we can reach you
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 space-y-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={data.email || ''}
              onChange={(e) => onChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                errors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white'
              } text-slate-900 placeholder-slate-400`}
              placeholder="your.email@example.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-sm text-red-600 font-medium mt-1 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmEmail"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Confirm Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="confirmEmail"
              value={data.confirmEmail || ''}
              onChange={(e) => onChange('confirmEmail', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                errors.confirmEmail
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white'
              } text-slate-900 placeholder-slate-400`}
              placeholder="Confirm your email address"
              autoComplete="email"
            />
            {errors.confirmEmail && (
              <p className="text-sm text-red-600 font-medium mt-1 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.confirmEmail}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="mobilePhone"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
              >
                Mobile Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobilePhone"
                value={data.mobilePhone || ''}
                onChange={(e) => handlePhoneChange('mobilePhone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.mobilePhone
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white'
                } text-slate-900 placeholder-slate-400`}
                placeholder="07123456789"
                autoComplete="tel"
              />
              {errors.mobilePhone && (
                <p className="text-sm text-red-600 font-medium mt-1 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.mobilePhone}
                </p>
              )}
              <p className="text-xs text-slate-500 mt-1">
                UK mobile number (e.g., 07123456789)
              </p>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="homePhone"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
              >
                Home Phone
              </label>
              <input
                type="tel"
                id="homePhone"
                value={data.homePhone || ''}
                onChange={(e) => handlePhoneChange('homePhone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.homePhone
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white'
                } text-slate-900 placeholder-slate-400`}
                placeholder="01234567890"
                autoComplete="tel"
              />
              {errors.homePhone && (
                <p className="text-sm text-red-600 font-medium mt-1 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.homePhone}
                </p>
              )}
              <p className="text-xs text-slate-500 mt-1">
                Optional - UK landline number
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Preferred Contact Method <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {contactMethods.map((method) => (
                <label
                  key={method.value}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    data.preferredContactMethod === method.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-slate-300 bg-white hover:border-slate-400 hover:shadow-sm'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value={method.value}
                    checked={data.preferredContactMethod === method.value}
                    onChange={(e) => onChange('preferredContactMethod', e.target.value)}
                    className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  />
                  <span className="ml-3 text-slate-900 font-medium">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.preferredContactMethod && (
              <p className="text-sm text-red-600 font-medium mt-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.preferredContactMethod}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800">
              We'll use these details to keep you updated about your application and account.
              Please ensure all information is accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsStep;