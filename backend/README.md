# 🛡️ NotOnMyWatch Backend

This is the backend API server for the NotOnMyWatch real-time harassment logging and safety mapping application.

## 🚀 Features

- **Anonymous Incident Logging** - Secure API endpoints for logging incidents without user authentication
- **Real-time Data Retrieval** - Fetch incidents with optional category filtering for map visualization
- **MongoDB Integration** - Robust NoSQL database for scalable incident storage
- **Express.js REST API** - Clean, RESTful API design with proper error handling
- **CORS Support** - Cross-origin resource sharing enabled for frontend integration
- **Environment Configuration** - Flexible configuration through environment variables

## 🛠️ Technology Stack

- **Node.js** - Server-side JavaScript runtime
- **Express.js 4.18.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 7.6.1** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development server with auto-restart

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or Atlas cloud database)
- npm or yarn package manager

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/notonmywatch
   PORT=5000
   NODE_ENV=development
   ```
   
   **For MongoDB Atlas:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notonmywatch
   PORT=5000
   NODE_ENV=development
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

4. **Start the production server:**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### Log an Incident
- **POST** `/api/incidents`
- **Description:** Log a new incident anonymously
- **Body:**
  ```json
  {
    "category": "harassment",
    "description": "Description of the incident...",
    "location": "Address or landmark",
    "coordinates": { 
      "lat": 12.34, 
      "lng": 56.78 
    }
  }
  ```
- **Response:** 
  ```json
  {
    "message": "Incident logged successfully."
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "Missing required fields."
  }
  ```

### Get Incidents
- **GET** `/api/incidents`
- **Description:** Retrieve all incidents with optional filtering
- **Query Parameters:**
  - `category` (optional): Filter by category
    - `harassment` - Harassment incidents
    - `theft` - Theft incidents
    - `unsafe_area` - Unsafe area reports
    - `other` - Other incidents
- **Response:**
  ```json
  [
    {
      "_id": "incident_id",
      "category": "harassment",
      "description": "Description of incident",
      "location": "Location address",
      "coordinates": {
        "lat": 12.34,
        "lng": 56.78
      },
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
  ```

### Health Check
- **GET** `/`
- **Description:** Check if the server is running
- **Response:** `"NotOnMyWatch backend is running."`

## 🗄️ Database Schema

### Incident Model
```javascript
{
  category: { 
    type: String, 
    required: true,
    enum: ['harassment', 'theft', 'unsafe_area', 'other']
  },
  description: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  coordinates: {
    lat: Number,
    lng: Number
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}
```

## 🔧 Development

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests (when implemented)
npm run lint       # Run linting (when implemented)
```

### Environment Variables
| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `PORT` | Server port | 5000 | No |
| `NODE_ENV` | Environment mode | development | No |

### Error Handling
The API includes comprehensive error handling:
- **400 Bad Request** - Missing required fields
- **500 Internal Server Error** - Server/database errors
- **CORS errors** - Handled for cross-origin requests

## 🔒 Security Features

- **Anonymous Reporting** - No user authentication required
- **Input Validation** - Server-side validation of all inputs
- **CORS Configuration** - Secure cross-origin requests
- **Environment Variables** - Sensitive data protection

## 🚀 Deployment

### Heroku
```bash
# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Railway
```bash
# Connect your GitHub repository
# Set environment variables in Railway dashboard
# Deploy automatically on push
```

### Docker (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🧪 Testing

### Manual Testing
```bash
# Test incident logging
curl -X POST http://localhost:5000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{"category":"harassment","description":"Test incident","location":"Test location"}'

# Test incident retrieval
curl http://localhost:5000/api/incidents
```

### Automated Testing (Future)
```bash
npm test
```

## 📊 Monitoring & Logging

- **Console Logging** - Development and error logging
- **MongoDB Connection** - Database connection status
- **Request Logging** - API request tracking (can be enhanced)

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) file for contribution guidelines.

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/NotOnMyWatch/issues)
- **Documentation:** Check the main README.md
- **API Testing:** Use the provided curl commands above

---

**Backend API for NotOnMyWatch - Making communities safer through technology** 🛡️ 