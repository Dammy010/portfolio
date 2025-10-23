# Portfolio Frontend

This is the frontend React application for Damilare Akinola's portfolio website.

## Features

- **Modern React 19** with hooks and modern patterns
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** using Framer Motion
- **Interactive Components** with hover effects
- **Contact Form** integration with backend API
- **Mobile-First** responsive design

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Skills.jsx     # Skills section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Navbar.jsx     # Navigation
│   │   └── Footer.jsx     # Footer
│   ├── assets/            # Images and static files
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static public files
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Components

### Hero

- Animated background elements
- Personal introduction
- Social media links
- Call-to-action buttons

### About

- Personal information
- Technical skills
- Hobbies and interests
- Personal mission statement

### Skills

- Animated progress bars
- Categorized skills
- Technology tags
- Interactive hover effects

### Projects

- Project showcase grid
- Technology tags
- GitHub and live demo links
- Category filtering

### Contact

- Working contact form
- Contact information
- Social media links
- Availability status

## Styling

The project uses Tailwind CSS with custom animations and gradients:

- **Color Scheme**: Purple-blue gradients
- **Typography**: Modern, clean fonts
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## API Integration

The contact form integrates with the backend API:

- Endpoint: `http://localhost:3001/api/contact`
- Sends form data to backend
- Handles success/error states

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

Update your information in:

- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Project showcase
- `src/components/Contact.jsx` - Contact information

## Deployment

Build the project and deploy the `dist` folder to your hosting platform:

```bash
npm run build
```

The built files will be in the `dist` directory.
