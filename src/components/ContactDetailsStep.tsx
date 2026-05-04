import React from 'react';

interface ContactDetailsStepProps {
  data: {
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
  };
  errors: {
    email?: string;
    phone?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postcode?: string;
  };
  onChange: (field: string, value: string) => void;
}

const ContactDetailsStep: React.FC<ContactDetailsStepProps> = ({
  data,
  errors,
  onChange,
}) => {
  const handleInputChange = (field: string, value: string) => {
    onChange(field, value);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Contact Details
          </h2>
          <p className="text-slate-600">
            Please provide your contact information and address
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                errors.email
                  ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
              } outline-none text-slate-800 placeholder-slate-400`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
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

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                errors.phone
                  ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
              } outline-none text-slate-800 placeholder-slate-400`}
              placeholder="07123 456789 or +44 7123 456789"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
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
                {errors.phone}
              </p>
            )}
            <p className="mt-1 text-xs text-slate-500">
              UK phone number format required
            </p>
          </div>

          {/* Address Line 1 */}
          <div>
            <label
              htmlFor="addressLine1"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
            >
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="addressLine1"
              value={data.addressLine1}
              onChange={(e) => handleInputChange('addressLine1', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                errors.addressLine1
                  ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
              } outline-none text-slate-800 placeholder-slate-400`}
              placeholder="Street address, P.O. box, company name"
            />
            {errors.addressLine1 && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
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
                {errors.addressLine1}
              </p>
            )}
          </div>

          {/* Address Line 2 */}
          <div>
            <label
              htmlFor="addressLine2"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              value={data.addressLine2}
              onChange={(e) => handleInputChange('addressLine2', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                errors.addressLine2
                  ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
              } outline-none text-slate-800 placeholder-slate-400`}
              placeholder="Apartment, suite, unit, building, floor, etc. (optional)"
            />
            {errors.addressLine2 && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
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
                {errors.addressLine2}
              </p>
            )}
          </div>

          {/* City and Postcode Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={data.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  errors.city
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                } outline-none text-slate-800 placeholder-slate-400`}
                placeholder="London"
              />
              {errors.city && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
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
                  {errors.city}
                </p>
              )}
            </div>

            {/* Postcode */}
            <div>
              <label
                htmlFor="postcode"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
              >
                Postcode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="postcode"
                value={data.postcode}
                onChange={(e) => handleInputChange('postcode', e.target.value.toUpperCase())}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  errors.postcode
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                } outline-none text-slate-800 placeholder-slate-400 uppercase`}
                placeholder="SW1A 1AA"
                maxLength={8}
              />
              {errors.postcode && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
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
                  {errors.postcode}
                </p>
              )}
              <p className="mt-1 text-xs text-slate-500">
                Valid UK postcode format required
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-start space-x-3 text-sm text-slate-600">
            <svg
              className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>
              Your contact details will be used for account verification and important notifications. 
              Please ensure all information is accurate and up to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsStep;