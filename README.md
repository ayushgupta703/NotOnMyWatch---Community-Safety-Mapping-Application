# 🛡️ NotOnMyWatch - Community Safety Mapping Application

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-yellow.svg)](https://mongodb.com/)

A full-stack web application designed to empower communities through real-time harassment logging and safety mapping. Users can anonymously report incidents and visualize safety trends through an interactive map interface.

## 🌟 Features

- **Anonymous Incident Reporting** - Log harassment, theft, unsafe areas, and other incidents without revealing personal information
- **Real-time Safety Mapping** - Interactive map visualization showing incident hotspots and safety trends
- **Category-based Filtering** - Filter incidents by type (harassment, theft, unsafe areas, other)
- **Geolocation Support** - Location-based incident tracking for accurate safety mapping
- **Community-Driven** - Crowdsourced safety data to help users make informed decisions
- **Mobile-Friendly** - Responsive design that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud database)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NotOnMyWatch.git
   cd NotOnMyWatch
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/notonmywatch
   PORT=5000
   ```
   
   For MongoDB Atlas, use your connection string:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notonmywatch
   PORT=5000
   ```

4. **Start the application**
   ```bash
   # Start backend server (from backend directory)
   cd backend
   npm run dev
   
   # Start frontend (from frontend directory, in a new terminal)
   cd frontend
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🏗️ Project Structure

```
NotOnMyWatch/
├── backend/                 # Node.js/Express API server
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styling
│   │   └── index.js        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
├── package.json            # Root workspace configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern React with hooks and functional components
- **React Router DOM 6.30.1** - Client-side routing
- **CSS3** - Custom responsive styling
- **Progressive Web App** - Mobile-friendly interface

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js 4.18.2** - RESTful API framework
- **MongoDB** - NoSQL database for incident storage
- **Mongoose 7.6.1** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Development server with auto-restart
- **Create React App** - React development environment
- **Testing Libraries** - Jest and React Testing Library

## 📡 API Endpoints

### Log an Incident
- **POST** `/api/incidents`
- **Body:**
  ```json
  {
    "category": "harassment",
    "description": "Description of the incident...",
    "location": "Address or landmark",
    "coordinates": { "lat": 12.34, "lng": 56.78 }
  }
  ```

### Get Incidents
- **GET** `/api/incidents?category=harassment`
- **Query params:** `category` (optional)
- **Response:** Array of incident objects

## 🔧 Development

### Running in Development Mode
```bash
# Backend (with auto-restart)
cd backend
npm run dev

# Frontend (with hot reload)
cd frontend
npm start
```

### Building for Production
```bash
# Build frontend
cd frontend
npm run build

# Start production backend
cd backend
npm start
```

### Testing
```bash
# Frontend tests
cd frontend
npm test

# Backend tests (when implemented)
cd backend
npm test
```

## 🌐 Deployment

### Frontend Deployment
The React app can be deployed to:
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting for public repositories

### Backend Deployment
The Express API can be deployed to:
- **Heroku** - Easy Node.js deployment
- **Railway** - Modern deployment platform
- **DigitalOcean App Platform** - Scalable hosting
- **AWS/Google Cloud/Azure** - Enterprise solutions

### Environment Variables for Production
```env
MONGODB_URI=your_production_mongodb_uri
PORT=process.env.PORT
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Express.js for the backend framework
- The open-source community for inspiration and tools

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation in the `backend/` and `frontend/` directories
- Review the FAQ section in the application

---

**Made with ❤️ for safer communities** 