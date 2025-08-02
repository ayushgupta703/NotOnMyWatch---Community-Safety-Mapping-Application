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
