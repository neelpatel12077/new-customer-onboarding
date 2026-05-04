import React from 'react';

interface MilitaryServiceInformationStepProps {
  data: {
    servedInMilitary: string;
    branch: string;
    serviceStartDate: string;
    serviceEndDate: string;
    dischargeDocument: File | null;
    dischargeDocumentName?: string;
  };
  errors: {
    servedInMilitary?: string;
    branch?: string;
    serviceStartDate?: string;
    serviceEndDate?: string;
    dischargeDocument?: string;
  };
  onChange: (field: string, value: string | File | null) => void;
}

const MILITARY_BRANCHES = [
  'Army',
  'Navy',
  'Air Force',
  'Marines',
  'Coast Guard',
  'Space Force',
  'National Guard',
  'Reserves',
  'Other',
].sort();

const MilitaryServiceInformationStep: React.FC<MilitaryServiceInformationStepProps> = ({
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
        onChange('dischargeDocument', null);
        return;
      }
      
      if (!allowedTypes.includes(file.type)) {
        onChange('dischargeDocument', null);
        return;
      }
      
      onChange('dischargeDocument', file);
      onChange('dischargeDocumentName', file.name);
    } else {
      onChange('dischargeDocument', null);
      onChange('dischargeDocumentName', '');
    }
  };

  const showMilitaryFields = data.servedInMilitary === 'Yes';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Military Service Information
          </h2>
          <p className="text-slate-600">
            Please provide details about your military service history
          </p>
        </div>

        <div className="space-y-6">
          {/* Served in Military */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">
              Have you served in the military? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="servedInMilitary"
                  value="Yes"
                  checked={data.servedInMilitary === 'Yes'}
                  onChange={(e) => handleInputChange('servedInMilitary', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                />
                <span className="ml-2 text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                  Yes
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="servedInMilitary"
                  value="No"
                  checked={data.servedInMilitary === 'No'}
                  onChange={(e) => handleInputChange('servedInMilitary', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                />
                <span className="ml-2 text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                  No
                </span>
              </label>
            </div>
            {errors.servedInMilitary && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.servedInMilitary}
              </p>
            )}
          </div>

          {/* Conditional Military Fields */}
          {showMilitaryFields && (
            <>
              {/* Branch */}
              <div>
                <label
                  htmlFor="branch"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Branch of Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="branch"
                  value={data.branch}
                  onChange={(e) => handleInputChange('branch', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.branch
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 bg-white text-slate-900 shadow-sm hover:border-slate-400`}
                >
                  <option value="">Select branch of service</option>
                  {MILITARY_BRANCHES.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.branch}
                  </p>
                )}
              </div>

              {/* Service Start Date */}
              <div>
                <label
                  htmlFor="serviceStartDate"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Service Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="serviceStartDate"
                  value={data.serviceStartDate}
                  onChange={(e) => handleInputChange('serviceStartDate', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.serviceStartDate
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 text-slate-900 shadow-sm hover:border-slate-400`}
                />
                {errors.serviceStartDate && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.serviceStartDate}
                  </p>
                )}
              </div>

              {/* Service End Date */}
              <div>
                <label
                  htmlFor="serviceEndDate"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Service End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="serviceEndDate"
                  value={data.serviceEndDate}
                  onChange={(e) => handleInputChange('serviceEndDate', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.serviceEndDate
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 text-slate-900 shadow-sm hover:border-slate-400`}
                />
                {errors.serviceEndDate && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.serviceEndDate}
                  </p>
                )}
              </div>

              {/* Discharge Document */}
              <div>
                <label
                  htmlFor="dischargeDocument"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2"
                >
                  Discharge Document (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="dischargeDocument"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="dischargeDocument"
                    className={`flex items-center justify-center w-full px-4 py-3 rounded-lg border-2 border-dashed ${
                      errors.dischargeDocument
                        ? 'border-red-300 hover:border-red-400'
                        : 'border-slate-300 hover:border-blue-400'
                    } cursor-pointer transition-all duration-200 bg-slate-50 hover:bg-slate-100 group`}
                  >
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors duration-200"
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
                      <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-200">
                        <span className="font-semibold text-blue-600 group-hover:text-blue-700">
                          Click to upload
                        </span>{' '}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        PDF, JPG, PNG up to 5MB
                      </p>
                    </div>
                  </label>
                </div>
                {data.dischargeDocument && data.dischargeDocumentName && (
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
                      <span className="text-sm font-medium text-blue-900">
                        {data.dischargeDocumentName}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onChange('dischargeDocument', null);
                        onChange('dischargeDocumentName', '');
                      }}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">