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
  'Air Force',
  'Army',
  'Coast Guard',
  'Marines',
  'National Guard',
  'Navy',
  'Other',
  'Reserves',
  'Space Force',
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
        onChange('dischargeDocumentName', '');
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        onChange('dischargeDocument', null);
        onChange('dischargeDocumentName', '');
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
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Military Service Information</h2>
          <p className="text-slate-600">Please provide details about your military service history</p>
        </div>

        <div className="space-y-6">
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
                <span className="ml-2 text-slate-700 group-hover:text-slate-900 transition-colors">
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
                <span className="ml-2 text-slate-700 group-hover:text-slate-900 transition-colors">
                  No
                </span>
              </label>
            </div>

            {errors.servedInMilitary && (
              <p className="mt-2 text-sm text-red-600">{errors.servedInMilitary}</p>
            )}
          </div>

          {showMilitaryFields && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Branch <span className="text-red-500">*</span>
                </label>
                <select
                  value={data.branch}
                  onChange={(e) => handleInputChange('branch', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a branch</option>
                  {MILITARY_BRANCHES.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                {errors.branch && <p className="mt-2 text-sm text-red-600">{errors.branch}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Service start date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={data.serviceStartDate}
                    onChange={(e) => handleInputChange('serviceStartDate', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.serviceStartDate && (
                    <p className="mt-2 text-sm text-red-600">{errors.serviceStartDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Service end date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={data.serviceEndDate}
                    onChange={(e) => handleInputChange('serviceEndDate', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.serviceEndDate && (
                    <p className="mt-2 text-sm text-red-600">{errors.serviceEndDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Discharge document <span className="text-red-500">*</span>
                </label>

                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-800 hover:file:bg-slate-200"
                />

                {data.dischargeDocumentName ? (
                  <p className="mt-2 text-sm text-slate-600">
                    Selected: <span className="font-medium text-slate-800">{data.dischargeDocumentName}</span>
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-slate-500">Accepted: PDF, JPG, PNG (max 5MB)</p>
                )}

                {errors.dischargeDocument && (
                  <p className="mt-2 text-sm text-red-600">{errors.dischargeDocument}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MilitaryServiceInformationStep;
