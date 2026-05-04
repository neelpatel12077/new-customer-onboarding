# Customer Onboarding Multi-Step Form Application

A production-ready customer onboarding application built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-step form workflow** with progress indicator
- **Real-time validation** with comprehensive error handling
- **Responsive design** optimized for mobile and desktop
- **Type-safe** implementation with TypeScript
- **Modern UI** using Tailwind CSS utility classes

## Tech Stack

- **React 18** - UI library with functional components and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

## Project Structure

src/
├── components/          # Reusable UI components
│   ├── StepIndicator.tsx
│   ├── PersonalInfoStep.tsx
│   ├── CompanyInfoStep.tsx
│   ├── PreferencesStep.tsx
│   └── ReviewStep.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports

## Form Steps

1. **Personal Information** - Name, email, phone number
2. **Company Information** - Company name, industry, size
3. **Preferences** - Communication preferences and interests
4. **Review & Submit** - Review all information before submission

## Validation Rules

- All required fields must be filled
- Email must be valid format
- Phone number must be valid format
- Company size must be selected
- At least one preference must be selected

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT