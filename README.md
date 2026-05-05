# Customer Onboarding Multi-Step Form Application

A production-ready customer onboarding application built with React, TypeScript, and Tailwind CSS. Features a multi-step form with validation, progress tracking, and responsive design.

## Features

- **Multi-Step Form**: Intuitive step-by-step onboarding process
- **Form Validation**: Real-time validation with helpful error messages
- **Progress Tracking**: Visual progress indicator showing completion status
- **Responsive Design**: Mobile-first design that works on all devices
- **Type Safety**: Full TypeScript implementation with no `any` types
- **Modern Stack**: Built with React 18, TypeScript 5, and Tailwind CSS 3

## Tech Stack

- **React 18** - UI library with functional components and hooks
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing

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
│   ├── FormInput.tsx
│   └── Button.tsx
├── pages/              # Page components
│   ├── OnboardingForm.tsx
│   └── Success.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── validation.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports

## Form Steps

1. **Personal Information** - Name, email, phone number
2. **Company Details** - Company name, size, industry
3. **Preferences** - Communication preferences and interests
4. **Review & Submit** - Review all information before submission

## Validation Rules

- All required fields must be filled
- Email must be valid format
- Phone number must be valid format
- Password must meet complexity requirements
- Real-time validation feedback
- Error messages displayed inline

## Styling

- Tailwind CSS utility classes for all styling
- No inline styles or CSS modules
- Consistent design system with focus states
- Accessible form controls with ARIA labels
- Mobile-first responsive breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.