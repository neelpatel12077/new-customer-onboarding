import React, { useState } from 'react';

interface ResidencyInformationStepProps {
  data: {
    currentAddress: string;
    city: string;
    state: string;
    zipCode: string;
    residencyType: string;
    moveInDate: string;
    previousAddress?: string;
    previousCity?: string;
    previousState?: string;
    previousZipCode?: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ResidencyInformationStep: React.FC<ResidencyInformationStepProps> = ({
  data,
  onUpdate,
  onNext,
  onPrevious,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPreviousAddress, setShowPreviousAddress] = useState(false);

  const handleChange = (field: string, value: string) => {
    onUpdate({ ...data, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.currentAddress.trim()) {
      newErrors.currentAddress = 'Current address is required';
    }

    if (!data.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!data.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!data.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code format';
    }

    if (!data.residencyType) {
      newErrors.residencyType = 'Residency type is required';
    }

    if (!data.moveInDate) {
      newErrors.moveInDate = 'Move-in date is required';
    }

    if (showPreviousAddress) {
      if (!data.previousAddress?.trim()) {
        newErrors.previousAddress = 'Previous address is required';
      }
      if (!data.previousCity?.trim()) {
        newErrors.previousCity = 'Previous city is required';
      }
      if (!data.previousState?.trim()) {
        newErrors.previousState = 'Previous state is required';
      }
      if (!data.previousZipCode?.trim()) {
        newErrors.previousZipCode = 'Previous ZIP code is required';
      } else if (data.previousZipCode && !/^\d{5}(-\d{4})?$/.test(data.previousZipCode)) {
        newErrors.previousZipCode = 'Invalid ZIP code format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="step-container">
      <h2>Residency Information</h2>
      <p className="step-description">Please provide your current residency details</p>

      <div className="form-section">
        <h3>Current Address</h3>
        
        <div className="form-group">
          <label htmlFor="currentAddress">
            Street Address <span className="required">*</span>
          </label>
          <input
            type="text"
            id="currentAddress"
            value={data.currentAddress}
            onChange={(e) => handleChange('currentAddress', e.target.value)}
            className={errors.currentAddress ? 'error' : ''}
            placeholder="123 Main Street"
          />
          {errors.currentAddress && (
            <span className="error-message">{errors.currentAddress}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">
              City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="city"
              value={data.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className={errors.city ? 'error' : ''}
              placeholder="City"
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="state">
              State <span className="required">*</span>
            </label>
            <input
              type="text"
              id="state"
              value={data.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className={errors.state ? 'error' : ''}
              placeholder="State"
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">
              ZIP Code <span className="required">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              value={data.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              className={errors.zipCode ? 'error' : ''}
              placeholder="12345"
            />
            {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="residencyType">
              Residency Type <span className="required">*</span>
            </label>
            <select
              id="residencyType"
              value={data.residencyType}
              onChange={(e) => handleChange('residencyType', e.target.value)}
              className={errors.residencyType ? 'error' : ''}
            >
              <option value="">Select residency type</option>
              <option value="own">Own</option>
              <option value="rent">Rent</option>
              <option value="other">Other</option>
            </select>
            {errors.residencyType && (
              <span className="error-message">{errors.residencyType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="moveInDate">
              Move-in Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="moveInDate"
              value={data.moveInDate}
              onChange={(e) => handleChange('moveInDate', e.target.value)}
              className={errors.moveInDate ? 'error' : ''}
            />
            {errors.moveInDate && (
              <span className="error-message">{errors.moveInDate}</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showPreviousAddress}
            onChange={(e) => setShowPreviousAddress(e.target.checked)}
          />
          Add previous address (if lived at current address less than 2 years)
        </label>
      </div>

      {showPreviousAddress && (
        <div className="form-section">
          <h3>Previous Address</h3>
          
          <div className="form-group">
            <label htmlFor="previousAddress">
              Street Address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="previousAddress"
              value={data.previousAddress || ''}
              onChange={(e) => handleChange('previousAddress', e.target.value)}
              className={errors.previousAddress ? 'error' : ''}
              placeholder="456 Previous Street"
            />
            {errors.previousAddress && (
              <span className="error-message">{errors.previousAddress}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="previousCity">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                id="previousCity"
                value={data.previousCity || ''}
                onChange={(e) => handleChange('previousCity', e.target.value)}
                className={errors.previousCity ? 'error' : ''}
                placeholder="City"
              />
              {errors.previousCity && (
                <span className="error-message">{errors.previousCity}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="previousState">
                State <span className="required">*</span>
              </label>
              <input
                type="text"
                id="previousState"
                value={data.previousState || ''}
                onChange={(e) => handleChange('previousState', e.target.value)}
                className={errors.previousState ? 'error' : ''}
                placeholder="State"
              />
              {errors.previousState && (
                <span className="error-message">{errors.previousState}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="previousZipCode">
                ZIP Code <span className="required">*</span>
              </label>
              <input
                type="text"
                id="previousZipCode"
                value={data.previousZipCode || ''}
                onChange={(e) => handleChange('previousZipCode', e.target.value)}
                className={errors.previousZipCode ? 'error' : ''}
                placeholder="12345"
              />
              {errors.previousZipCode && (
                <span className="error-message">{errors.previousZipCode}</span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="button-group">
        <button type="button" onClick={onPrevious} className="btn-secondary">
          Previous
        </button>
        <button type="button" onClick={handleNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default ResidencyInformationStep;