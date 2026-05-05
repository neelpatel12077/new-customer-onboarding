import React from 'react';

interface PersonalInformationStepProps {
  formData: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const PersonalInformationStep: React.FC<PersonalInformationStepProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="step-container">
      <h2>Personal Information</h2>
      <p className="step-description">
        Please provide your personal information as it appears on your official documents.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className={errors.firstName ? 'error' : ''}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            value={formData.middleName}
            onChange={(e) => onChange('middleName', e.target.value)}
            placeholder="Enter your middle name (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className={errors.lastName ? 'error' : ''}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">
            Date of Birth <span className="required">*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => onChange('dateOfBirth', e.target.value)}
            className={errors.dateOfBirth ? 'error' : ''}
          />
          {errors.dateOfBirth && (
            <span className="error-message">{errors.dateOfBirth}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ssn">
            Social Security Number <span className="required">*</span>
          </label>
          <input
            type="text"
            id="ssn"
            value={formData.ssn}
            onChange={(e) => onChange('ssn', e.target.value)}
            className={errors.ssn ? 'error' : ''}
            placeholder="XXX-XX-XXXX"
            maxLength={11}
          />
          {errors.ssn && (
            <span className="error-message">{errors.ssn}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gender">
            Gender <span className="required">*</span>
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => onChange('gender', e.target.value)}
            className={errors.gender ? 'error' : ''}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && (
            <span className="error-message">{errors.gender}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationStep;