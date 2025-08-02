# 🛡️ NotOnMyWatch Frontend

This is the React frontend application for NotOnMyWatch - a community safety mapping platform that enables anonymous incident reporting and real-time safety visualization.

## 🚀 Features

- **Anonymous Incident Reporting** - Simple, secure form for logging harassment and safety incidents
- **Interactive Safety Map** - Visual representation of incident hotspots and safety trends
- **Category-based Filtering** - Filter incidents by type (harassment, theft, unsafe areas, other)
- **Responsive Design** - Mobile-friendly interface that works on all devices
- **Real-time Updates** - Live data integration with the backend API
- **Progressive Web App** - Modern web application with app-like experience

## 🛠️ Technology Stack

- **React 19.1.0** - Modern React with hooks and functional components
- **React Router DOM 6.30.1** - Client-side routing for SPA navigation
- **CSS3** - Custom responsive styling with modern design
- **Fetch API** - HTTP requests to backend API
- **Create React App** - Development environment and build tools
- **Testing Libraries** - Jest and React Testing Library for testing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Backend API server running (see backend README)

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # App icon
│   └── manifest.json      # PWA manifest
├── src/                   # Source code
│   ├── App.js            # Main React component
│   ├── App.css           # Main stylesheet
│   ├── index.js          # React entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Component Architecture

### Main Components

#### `App.js` - Main Application Component
- **Router Setup** - React Router configuration
- **Navigation** - Main navigation bar
- **Route Management** - Page routing and component rendering

#### `Home` Component
- **Welcome Section** - Introduction to the application
- **Feature Overview** - How the app works
- **FAQ Section** - Common questions and answers
- **Mission Statement** - Project goals and values

#### `LogIncident` Component
- **Incident Form** - Anonymous reporting interface
- **Category Selection** - Dropdown for incident types
- **Location Input** - Text input for incident location
- **Form Validation** - Client-side validation
- **API Integration** - POST requests to backend
- **User Feedback** - Success/error messages

#### `MapPage` Component
- **Safety Map** - Placeholder for map visualization
- **Category Filter** - Filter incidents by type
- **Safety Tips** - Random safety advice
- **Map Legend** - Visual indicators for incident density

## 🎯 Key Features Implementation

### Anonymous Reporting System
```javascript
// Form state management with React hooks
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [location, setLocation] = useState("");

// API integration for incident logging
const response = await fetch("http://localhost:5000/api/incidents", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ category, description, location })
});
```

### Responsive Design
- **Mobile-first approach** - Optimized for mobile devices
- **Flexible layouts** - CSS Grid and Flexbox
- **Touch-friendly** - Large buttons and touch targets
- **Cross-browser compatibility** - Works on all modern browsers

### User Experience
- **Loading states** - Visual feedback during API calls
- **Error handling** - Clear error messages
- **Success feedback** - Confirmation of successful submissions
- **Form validation** - Real-time validation feedback

## 🔧 Development

### Available Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (not recommended)
```

### Development Workflow
1. **Start backend server** (see backend README)
2. **Start frontend development server**
   ```bash
   npm start
   ```
3. **Make changes** - Hot reload will update the browser
4. **Test changes** - Ensure functionality works as expected
5. **Build for production** when ready to deploy

### Environment Configuration
The frontend connects to the backend API at `http://localhost:5000` by default. For production, update the API URL in the fetch calls.

## 🎨 Styling & Design

### Design Principles
- **Accessibility** - WCAG compliant design
- **Simplicity** - Clean, intuitive interface
- **Trust** - Professional appearance for safety reporting
- **Mobile-first** - Responsive design for all devices

### CSS Architecture
- **Custom CSS** - No external UI libraries
- **Responsive design** - Media queries for different screen sizes
- **Modern CSS** - Flexbox, Grid, and CSS custom properties
- **Consistent theming** - Color scheme and typography

## 🧪 Testing

### Manual Testing
- **Cross-browser testing** - Chrome, Firefox, Safari, Edge
- **Mobile testing** - iOS Safari, Chrome Mobile
- **Form validation** - Test all form scenarios
- **API integration** - Test with backend server

### Automated Testing (Future)
```bash
npm test
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy build folder to Netlify
```

### GitHub Pages
```bash
# Add homepage to package.json
"homepage": "https://yourusername.github.io/NotOnMyWatch"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🔒 Security Considerations

- **No sensitive data storage** - All data sent to backend API
- **Anonymous reporting** - No user accounts or personal data
- **HTTPS in production** - Secure data transmission
- **Input sanitization** - Client-side validation

## 📱 Progressive Web App Features

- **Service Worker** - Offline functionality (can be enhanced)
- **Web App Manifest** - App-like installation
- **Responsive Design** - Works on all devices
- **Fast Loading** - Optimized bundle size

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) file for contribution guidelines.

### Frontend-Specific Guidelines
- **Component structure** - Keep components small and focused
- **State management** - Use React hooks appropriately
- **Styling** - Follow existing CSS patterns
- **Testing** - Write tests for new components

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/NotOnMyWatch/issues)
- **Documentation:** Check the main README.md
- **Development:** Ensure backend server is running

## 🔮 Future Enhancements

- **Real map integration** - Google Maps or Mapbox
- **Geolocation API** - Automatic location detection
- **Offline support** - Service worker implementation
- **Push notifications** - Real-time alerts
- **Advanced filtering** - Date range, location radius
- **Data visualization** - Charts and analytics

---

**Frontend for NotOnMyWatch - Empowering communities through technology** 🛡️
