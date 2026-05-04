================================================================================
EPIC: Customer Onboarding

US-001 — Capture Personal Details

As a customer
I want to enter my personal information
So that I can begin the onboarding process

Fields:
• Title
• Full Name
• Date of Birth
• Nationality
• Marital Status

Validations:
• Full Name is required
• Date of Birth must be a valid date and customer must be 18+
• All fields are mandatory

================================================================================

US-002 — Provide Contact Information

As a customer
I want to submit my contact details
So that the organization can reach me

Fields:
• Phone No
• Email Id

Validations:
• Phone No must be valid format
• Email Id must be valid email format
• Both fields are required

================================================================================

US-003 — Declare Residency Status

As a customer
I want to specify my residency information
So that my eligibility can be verified

Fields:
• Residency Status
• UK Residence Status
• Visa Type & Expiry
• Years in UK

Validations:
• If UK Residence Status requires visa, Visa Type & Expiry are mandatory
• Visa Expiry must be a future date
• Years in UK must be numeric

================================================================================

US-004 — Indicate Military Service Status

As a customer
I want to declare if I am a servicemember or veteran
So that I can receive applicable benefits or considerations

Fields:
• Are you a servicemember or veteran? (Yes/No)

Validations:
• Selection is required

================================================================================

US-005 — Upload Proof Document

As a customer
I want to upload supporting documentation
So that I can verify my identity and information

Fields:
• Proof Document

Validations:
• Document upload is required
• Accepted formats: PDF, JPG, PNG
• Maximum file size: 5MB

================================================================================