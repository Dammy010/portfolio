# Damilare Akinola - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Dark theme with purple-blue gradient accents
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive**: Works perfectly on all devices
- **Contact Form**: Working email contact form with SMTP
- **Interactive**: Hover effects and smooth transitions
- **Fast**: Optimized with Vite and modern React

## 📁 Project Structure

```
portfolio/
├── frontend/             # Frontend React application
│   ├── src/             # React source code
│   │   ├── components/  # React components
│   │   ├── assets/      # Images and static files
│   │   └── ...
│   ├── public/          # Static public files
│   ├── package.json     # Frontend dependencies
│   └── README.md        # Frontend documentation
├── backend/             # Backend API server
│   ├── server.js        # Express server
│   ├── config.js        # Configuration
│   ├── package.json     # Backend dependencies
│   └── README.md        # Backend documentation
├── package.json         # Root package.json with scripts
└── README.md           # Main project documentation
```

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Backend

- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install backend dependencies**

```bash
npm run backend
```

### Running the Application

#### Option 1: Run Both Frontend and Backend

```bash
npm start
```

This will start:

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

#### Option 2: Run Separately

```bash
# Frontend only
npm run frontend

# Backend only
npm run server
```

## 📧 Contact Form Setup

The contact form uses Gmail SMTP to send emails. Configure your email settings in `backend/config.js`:

```javascript
export const emailConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
};
```

## 🎨 Customization

### Colors

The color scheme uses purple and blue gradients. You can customize colors in:

- `src/index.css` - CSS custom properties
- Component files - Tailwind classes

### Content

Update your information in:

- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Project showcase
- `src/components/Contact.jsx` - Contact information

## 📱 Responsive Design

The portfolio is fully responsive and works on:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
```

Deploy the `dist` folder to your hosting platform.

### Backend (Railway/Heroku)

Deploy the `backend` folder to your server platform.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Damilare Akinola**

- Email: akindare2025@gmail.com
- GitHub: [@Dammy010](https://github.com/Dammy010)
- Twitter: [@dammy8642](https://x.com/dammy8642?s=21)

---

Made with ❤️ by Damilare Akinola
