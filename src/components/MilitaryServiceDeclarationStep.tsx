import React from 'react';

interface MilitaryServiceDeclarationStepProps {
  formData: {
    hasMilitaryService: string;
    militaryBranch?: string;
    serviceStartDate?: string;
    serviceEndDate?: string;
    rank?: string;
    dischargeType?: string;
  };
  onChange: (field: string, value: string) => void;
}

const MilitaryServiceDeclarationStep: React.FC<MilitaryServiceDeclarationStepProps> = ({
  formData,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Military Service Declaration</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Have you served in the military? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasMilitaryService"
                value="yes"
                checked={formData.hasMilitaryService === 'yes'}
                onChange={(e) => onChange('hasMilitaryService', e.target.value)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasMilitaryService"
                value="no"
                checked={formData.hasMilitaryService === 'no'}
                onChange={(e) => onChange('hasMilitaryService', e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {formData.hasMilitaryService === 'yes' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Military Branch *
              </label>
              <select
                value={formData.militaryBranch || ''}
                onChange={(e) => onChange('militaryBranch', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Branch</option>
                <option value="army">Army</option>
                <option value="navy">Navy</option>
                <option value="airforce">Air Force</option>
                <option value="marines">Marines</option>
                <option value="coastguard">Coast Guard</option>
                <option value="spaceforce">Space Force</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Start Date *
                </label>
                <input
                  type="date"
                  value={formData.serviceStartDate || ''}
                  onChange={(e) => onChange('serviceStartDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service End Date
                </label>
                <input
                  type="date"
                  value={formData.serviceEndDate || ''}
                  onChange={(e) => onChange('serviceEndDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rank
              </label>
              <input
                type="text"
                value={formData.rank || ''}
                onChange={(e) => onChange('rank', e.target.value)}
                placeholder="Enter your rank"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discharge Type
              </label>
              <select
                value={formData.dischargeType || ''}
                onChange={(e) => onChange('dischargeType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Discharge Type</option>
                <option value="honorable">Honorable</option>
                <option value="general">General</option>
                <option value="other">Other Than Honorable</option>
                <option value="bad-conduct">Bad Conduct</option>
                <option value="dishonorable">Dishonorable</option>
                <option value="medical">Medical</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MilitaryServiceDeclarationStep;