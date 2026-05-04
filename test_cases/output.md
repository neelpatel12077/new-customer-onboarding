{
  "feature": "USER STORIES:",
  "domain": "General",
  "totalCases": 47,
  "designMode": "UI_MANUAL",
  "complexity": {
    "level": "SIMPLE",
    "reason": "Primarily single-screen/form-field BRD signals with limited workflow complexity.",
    "originalStories": 5,
    "strategyStories": 5
  },
  "coverage": {
    "functional": 19,
    "negative": 24,
    "boundary": 2,
    "security": 2
  },
  "testCases": [
    {
      "id": "TC-1.1.1",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-01",
      "testScenario": "Customer submits all personal details successfully",
      "title": "Enter Personal Details Successfully",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2026-02-17",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Title",
        "Enter Full Name",
        "Choose Date of Birth from date picker",
        "Select Nationality from dropdown",
        "Select Marital Status from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.2",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-02",
      "testScenario": "User enters valid Title",
      "title": "Title Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Title",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.3",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-03",
      "testScenario": "User leaves Title empty",
      "title": "Title Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Title field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.4",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-04",
      "testScenario": "User enters valid Full Name",
      "title": "Full Name Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Full Name",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.5",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-05",
      "testScenario": "User leaves Full Name empty",
      "title": "Full Name Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Full Name field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.6",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-06",
      "testScenario": "User enters valid Date of Birth",
      "title": "Date of Birth Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2026-02-17",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Choose Date of Birth from date picker",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.7",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-07",
      "testScenario": "User enters incorrect format in Date of Birth",
      "title": "Date of Birth Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2000-01-01",
        "invalidDate": "31-31-2025",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Date of Birth field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.8",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-08",
      "testScenario": "User enters valid Nationality",
      "title": "Nationality Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Nationality from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.9",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-09",
      "testScenario": "User leaves Nationality empty",
      "title": "Nationality Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Nationality field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.10",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-10",
      "testScenario": "User enters valid Marital Status",
      "title": "Marital Status Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Marital Status from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.11",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-11",
      "testScenario": "User leaves Marital Status empty",
      "title": "Marital Status Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Marital Status field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.1.12",
      "epic": "Customer Onboarding",
      "userStory": "Capture Personal Details",
      "storyId": "1.1",
      "criterionId": "COND-11-12",
      "testScenario": "Enforce validation rule: All fields are mandatory",
      "title": "Capture Personal Details",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave a field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.1",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-01",
      "testScenario": "Customer submits all provide contact information successfully",
      "title": "Enter Provide Contact Information Successfully",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "email": "john.doe@company.com",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Phone No",
        "Enter Email Id",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.2",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-02",
      "testScenario": "User enters valid Phone No",
      "title": "Phone No Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Phone No",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.3",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-03",
      "testScenario": "User enters incorrect format in Phone No",
      "title": "Phone No Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Phone No field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.4",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-04",
      "testScenario": "User enters valid Email Id",
      "title": "Email Id Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "email": "john.doe@company.com",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Email Id",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.5",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-05",
      "testScenario": "User enters incorrect format in Email Id",
      "title": "Email Id Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "email": "john.doecompany.com",
        "disposableEmail": "temp@mailinator.com",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Email Id field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.2.6",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-06",
      "testScenario": "User enters special characters in Email Id",
      "title": "Email Id Security Validation",
      "type": "Security",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "email": "admin' OR '1'='1@evil.com",
        "xssPayload": "<script>alert(1)</script>@mail.com",
        "token": "tampered.jwt.signature"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter special characters in Email Id field",
        "Click on Save",
        "Verify safe validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": false
    },
    {
      "id": "TC-1.2.7",
      "epic": "Customer Onboarding",
      "userStory": "Provide Contact Information",
      "storyId": "1.2",
      "criterionId": "COND-12-07",
      "testScenario": "Enforce validation rule: Both fields are required",
      "title": "Provide Contact Information",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave a field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.1",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-01",
      "testScenario": "Customer submits all declare residency status successfully",
      "title": "Enter Declare Residency Status Successfully",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2026-02-17",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Residency Status from dropdown",
        "Select UK Residence Status from dropdown",
        "Select Visa Type & Expiry from dropdown",
        "Select Years in UK from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.2",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-02",
      "testScenario": "User enters valid Residency Status",
      "title": "Residency Status Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Residency Status from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.3",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-03",
      "testScenario": "User leaves Residency Status empty",
      "title": "Residency Status Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Residency Status field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.4",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-04",
      "testScenario": "User enters valid UK Residence Status",
      "title": "UK Residence Status Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select UK Residence Status from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.5",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-05",
      "testScenario": "User leaves UK Residence Status empty",
      "title": "UK Residence Status Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave UK Residence Status field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.6",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-06",
      "testScenario": "User enters valid Visa Type & Expiry",
      "title": "Visa Type & Expiry Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2026-02-17",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Visa Type & Expiry from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.7",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-07",
      "testScenario": "User leaves Visa Type & Expiry empty",
      "title": "Visa Type & Expiry Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2000-01-01",
        "invalidDate": "31-31-2025",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Visa Type & Expiry field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.8",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-08",
      "testScenario": "User enters incorrect format in Visa Type & Expiry",
      "title": "Visa Type & Expiry Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2000-01-01",
        "invalidDate": "31-31-2025",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Visa Type & Expiry field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.9",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-09",
      "testScenario": "User enters valid Years in UK",
      "title": "Years in UK Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Years in UK from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.10",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-10",
      "testScenario": "User enters incorrect format in Years in UK",
      "title": "Years in UK Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Years in UK field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.11",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-11",
      "testScenario": "Enforce validation rule: If UK Residence Status requires visa, Visa Type & Expiry are mandatory",
      "title": "Declare Residency Status",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave a field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.12",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-12",
      "testScenario": "User leaves Visa Expiry - Visa Expiry must be a future date empty",
      "title": "Visa Expiry - Visa Expiry must be a future date Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2000-01-01",
        "invalidDate": "31-31-2025",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Visa Expiry - Visa Expiry must be a future date field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.13",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-13",
      "testScenario": "User enters incorrect format in Visa Expiry - Visa Expiry must be a future date",
      "title": "Visa Expiry - Visa Expiry must be a future date Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2000-01-01",
        "invalidDate": "31-31-2025",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Visa Expiry - Visa Expiry must be a future date field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.14",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-14",
      "testScenario": "User verifies boundary validation for Visa Expiry",
      "title": "Visa Expiry Boundary",
      "type": "Boundary",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "leapDate": "2024-02-29",
        "farFutureDate": "2099-12-31",
        "input": "min-max-boundary-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter minimum boundary value in Visa Expiry field",
        "Click on Save",
        "Verify boundary validation message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.3.15",
      "epic": "Customer Onboarding",
      "userStory": "Declare Residency Status",
      "storyId": "1.3",
      "criterionId": "COND-13-15",
      "testScenario": "User enters valid Visa Expiry",
      "title": "Visa Expiry Accepted",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "date": "2026-02-17",
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Select Visa Expiry from dropdown",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.4.1",
      "epic": "Customer Onboarding",
      "userStory": "Indicate Military Service Status",
      "storyId": "1.4",
      "criterionId": "COND-14-01",
      "testScenario": "Customer submits all indicate military service status successfully",
      "title": "Enter Indicate Military Service Status Successfully",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Are you a servicemember or veteran? (Yes/No)",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.4.2",
      "epic": "Customer Onboarding",
      "userStory": "Indicate Military Service Status",
      "storyId": "1.4",
      "criterionId": "COND-14-02",
      "testScenario": "User enters valid Are you a servicemember or veteran? (Yes/No)",
      "title": "Are you a servicemember or veteran? (Yes/No) Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter Are you a servicemember or veteran? (Yes/No)",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.4.3",
      "epic": "Customer Onboarding",
      "userStory": "Indicate Military Service Status",
      "storyId": "1.4",
      "criterionId": "COND-14-03",
      "testScenario": "User leaves Are you a servicemember or veteran? (Yes/No) empty",
      "title": "Are you a servicemember or veteran? (Yes/No) Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Are you a servicemember or veteran? (Yes/No) field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.4.4",
      "epic": "Customer Onboarding",
      "userStory": "Indicate Military Service Status",
      "storyId": "1.4",
      "criterionId": "COND-14-04",
      "testScenario": "User leaves Selection - Selection is required empty",
      "title": "Selection - Selection is required Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Selection - Selection is required field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.1",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-01",
      "testScenario": "Customer submits all upload proof document successfully",
      "title": "Enter Upload Proof Document Successfully",
      "type": "Functional",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Upload Proof Document",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.2",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-02",
      "testScenario": "User enters valid Proof Document",
      "title": "Proof Document Accepted",
      "type": "Functional",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "input": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Upload Proof Document",
        "Click on Save",
        "Verify success message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.3",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-03",
      "testScenario": "User leaves Proof Document empty",
      "title": "Proof Document Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Proof Document field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.4",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-04",
      "testScenario": "User enters special characters in Proof Document",
      "title": "Proof Document Security Validation",
      "type": "Security",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "attackPayload": "' OR 1=1 --",
        "token": "tampered.jwt.signature"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter special characters in Proof Document field",
        "Click on Save",
        "Verify safe validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": false
    },
    {
      "id": "TC-1.5.5",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-05",
      "testScenario": "User leaves Document upload - Document upload is required empty",
      "title": "Document upload - Document upload is required Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Document upload - Document upload is required field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.6",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-06",
      "testScenario": "User leaves Accepted formats - Accepted formats: PDF, JPG, PNG empty",
      "title": "Accepted formats - Accepted formats: PDF, JPG, PNG Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Accepted formats - Accepted formats: PDF, JPG, PNG field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.7",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-07",
      "testScenario": "User enters incorrect format in Accepted formats - Accepted formats: PDF, JPG, PNG",
      "title": "Accepted formats - Accepted formats: PDF, JPG, PNG Invalid Format",
      "type": "Negative",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "input": "invalid-or-unauthorized-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter value that violates expected format in Accepted formats - Accepted formats: PDF, JPG, PNG field",
        "Click on Save",
        "Verify error message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.8",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-08",
      "testScenario": "User leaves Maximum file size - Maximum file size: 5MB empty",
      "title": "Maximum file size - Maximum file size: 5MB Mandatory",
      "type": "Validation",
      "priority": "High",
      "severity": "Critical",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "invalidInput": "malformed-value",
        "payload": "valid-business-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Leave Maximum file size - Maximum file size: 5MB field empty",
        "Click on Save",
        "Verify validation message is displayed"
      ],
      "expectedResult": [
        "Submission is blocked and a clear, user-visible validation message is shown",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    },
    {
      "id": "TC-1.5.9",
      "epic": "Customer Onboarding",
      "userStory": "Upload Proof Document",
      "storyId": "1.5",
      "criterionId": "COND-15-09",
      "testScenario": "User enters maximum boundary value in Maximum file size",
      "title": "Maximum file size Max",
      "type": "Boundary",
      "priority": "Medium",
      "severity": "Major",
      "preconditions": [
        "User/session/system prerequisites are satisfied for this story"
      ],
      "testData": {
        "boundaryInput": "max-allowed-value",
        "input": "min-max-boundary-value"
      },
      "steps": [
        "Open browser and launch the application",
        "Enter maximum boundary value in Maximum file size field",
        "Click on Save",
        "Verify boundary validation message is displayed"
      ],
      "expectedResult": [
        "Submission succeeds and the UI shows confirmation and/or navigates to the next step",
        "No unexpected UI behavior occurs"
      ],
      "postCondition": "User remains in a stable UI state",
      "automationCandidate": true
    }
  ],
  "qualityScore": {
    "traceability": 44,
    "verifiability": 32,
    "technicalSpecificity": 33,
    "edgeCoverage": 73,
    "automationFeasibility": 80,
    "overall": 52
  },
  "provider": "copilot",
  "availableProviders": [
    "openai",
    "claude",
    "copilot",
    "ollama"
  ]
}