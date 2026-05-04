import React from 'react';

interface ResidencyInformationStepProps {
  data: {
    ukResident: string;
    visaType: string;
    visaExpiryDate: string;
    proofOfResidency: File | null;
    proofOfResidencyName?: string;
  };
  errors: {
    ukResident?: string;
    visaType?: string;
    visaExpiryDate?: string;
    proofOfResidency?: string;
  };
  onChange: (field: string, value: string | File | null) => void;
}

const VISA_TYPES = [
  'Skilled Worker Visa',
  'Student Visa',
  'Graduate Visa',
  'Global Talent Visa',
  'Investor Visa',
  'Spouse/Partner Visa',
  'Ancestry Visa',
  'Youth Mobility Scheme',
  'Temporary Worker Visa',
  'Family Visa',
  'EU Settlement Scheme',
  'Other',
].sort();

const ResidencyInformationStep: React.FC<ResidencyInformationStepProps> = ({
  data,
  errors,
  onChange,
}) => {
  const handleInputChange = (field: string, value: string) => {
    onChange(field, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      const maxSize = 5 * 1024 * 1024;
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      
      if (file.size > maxSize) {
        onChange('proofOfResidency', null);
        return;
      }
      
      if (!allowedTypes.includes(file.type)) {
        onChange('proofOfResidency', null);
        return;
      }
      
      onChange('proofOfResidency', file);
      onChange('proofOfResidencyName', file.name);
    } else {
      onChange('proofOfResidency', null);
      onChange('proofOfResidencyName', '');
    }
  };

  const isNonUKResident = data.ukResident === 'No';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Residency Information
          </h2>
          <p className="text-slate-600">
            Please provide your UK residency status and supporting documentation
          </p>
        </div>

        <div className="space-y-6">
          {/* UK Resident */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">
              Are you a UK Resident? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="ukResident"
                  value="Yes"
                  checked={data.ukResident === 'Yes'}
                  onChange={(e) => handleInputChange('ukResident', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                />
                <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                  Yes
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="ukResident"
                  value="No"
                  checked={data.ukResident === 'No'}
                  onChange={(e) => handleInputChange('ukResident', e.target.value)}
                  className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                />
                <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                  No
                </span>
              </label>
            </div>
            {errors.ukResident && (
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
                {errors.ukResident}
              </p>
            )}
          </div>

          {/* Visa Type - Conditional */}
          {isNonUKResident && (
            <div className="border-l-4 border-amber-400 pl-6 py-2 bg-amber-50 rounded-r-lg">
              <div>
                <label
                  htmlFor="visaType"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Visa Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="visaType"
                  value={data.visaType}
                  onChange={(e) => handleInputChange('visaType', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.visaType
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <option value="">Select visa type...</option>
                  {VISA_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.visaType && (
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
                    {errors.visaType}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Visa Expiry Date - Conditional */}
          {isNonUKResident && (
            <div className="border-l-4 border-amber-400 pl-6 py-2 bg-amber-50 rounded-r-lg">
              <div>
                <label
                  htmlFor="visaExpiryDate"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Visa Expiry Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="visaExpiryDate"
                  value={data.visaExpiryDate}
                  onChange={(e) => handleInputChange('visaExpiryDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.visaExpiryDate
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                <p className="mt-1 text-xs text-slate-500">
                  Must be a future date
                </p>
                {errors.visaExpiryDate && (
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
                    {errors.visaExpiryDate}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Proof of Residency */}
          <div>
            <label
              htmlFor="proofOfResidency"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
            >
              Proof of Residency <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="proofOfResidency"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="proofOfResidency"
                className={`flex items-center justify-center w-full px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 ${
                  errors.proofOfResidency
                    ? 'border-red-500 bg-red-50 hover:bg-red-100'
                    : 'border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-slate-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-slate-600">
                    <span className="font-semibold text-blue-600 hover:text-blue-700">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    PDF, JPG, JPEG or PNG (max 5MB)
                  </p>
                </div>
              </label>
            </div>
            {data.proofOfResidencyName && (
              <div className="mt-3 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">
                    {data.proofOfResidencyName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onChange('proofOfResidency', null);
                    onChange('proofOfResidencyName', '');
                    const fileInput = document.getElementById('proofOfResidency') as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
            {errors.proofOfResidency && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg