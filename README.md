# 🍽️ YUMMIFY - Food Ordering & Management System

A full-stack food ordering and restaurant management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project features a customer-facing interface for browsing menus, ordering food, and managing carts, along with an admin panel for managing food items and menus.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Setup](#environment-setup)
- [Features Overview](#features-overview)
- [Contributing](#contributing)

## ✨ Features

### Customer Features
- 🏠 **Home Page** - Browse featured items and promotions
- 📚 **Menu Categories** - Explore food items by categories
- 🍳 **Recipes** - View detailed recipes and cooking instructions
- 🛒 **Shopping Cart** - Add, remove, and manage items in cart
- 📱 **QR Code Integration** - Quick access via QR codes
- 📞 **Contact Page** - Get in touch with the restaurant
- 🔐 **User Authentication** - Login and signup functionality
- 🎨 **Responsive Design** - Mobile-friendly interface

### Admin Features
- ➕ **Add Menu Items** - Create new food items with details
- 📝 **Manage Data** - View and edit existing menu items
- 🗑️ **Delete Items** - Remove items from the menu
- 📊 **Dashboard** - Overview of restaurant data

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - UI library
- **React Router DOM 7.12** - Client-side routing
- **Vite 7.3** - Build tool and dev server
- **Axios 1.13** - HTTP client
- **Bootstrap 5.3** - CSS framework
- **React Hot Toast** - Toast notifications
- **React Toastify** - Additional notifications

### Backend
- **Node.js** - Runtime environment
- **Express 5.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9.1** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-restart server
- **ESLint** - Code linting
- **gh-pages** - Deployment

## 📁 Project Structure

```
React-begin/
├── Backend/                    # Main application backend
│   ├── controllers/           # Business logic
│   │   ├── foodController.js
│   │   ├── menuController.js
│   │   └── userController.js
│   ├── models/               # Database schemas
│   │   ├── Food.js
│   │   └── Menu.js
│   ├── routes/               # API routes
│   │   ├── foodRoutes.js
│   │   └── menuRoutes.js
│   ├── server.js            # Main server file
│   └── package.json
│
├── Frontend/                  # Customer-facing application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── Recipes.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Qr.jsx
│   │   │   ├── LoginSignup.jsx
│   │   │   └── Signup.jsx
│   │   ├── CartContext.jsx   # Global cart state
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Adminpage/                 # Admin panel
│   ├── BackendAdmin/         # Admin backend
│   │   ├── Controller/
│   │   │   └── adminController.js
│   │   ├── Models/
│   │   │   └── data.js
│   │   ├── Routes/
│   │   │   └── dataRoute.js
│   │   ├── server.js
│   │   └── package.json
│   │
│   └── Frontend/             # Admin frontend
│       ├── src/
│       │   ├── Add.jsx
│       │   ├── AddMenu.jsx
│       │   ├── Getdata.jsx
│       │   ├── Login.jsx
│       │   └── App.jsx
│       ├── package.json
│       └── vite.config.js
│
└── Food-imgs/                # Food images directory
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (v4.4 or higher)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd React-begin
```

### 2. Install Backend Dependencies

```bash
# Main Backend
cd Backend
npm install

# Admin Backend
cd ../Adminpage/BackendAdmin
npm install
```

### 3. Install Frontend Dependencies

```bash
# Main Frontend
cd ../../Frontend
npm install

# Admin Frontend
cd ../Adminpage/Frontend
npm install
```

### 4. Setup MongoDB

Make sure MongoDB is running on your local machine:

```bash
# Start MongoDB service
mongod
```

The application will connect to `mongodb://127.0.0.1:27017/food`

## 🏃 Running the Application

You'll need to run multiple terminals:

### Terminal 1: Main Backend Server
```bash
cd Backend
npm run dev
# Server runs on http://localhost:3000
```

### Terminal 2: Admin Backend Server
```bash
cd Adminpage/BackendAdmin
npm start
# Server runs on http://localhost:3001
```

### Terminal 3: Frontend Application
```bash
cd Frontend
npm run dev
# Application runs on http://localhost:5173

## 🔌 API Endpoints

### Main Backend (Port 3000)

#### Food Items
- `GET /items/` - Get all food items
- `POST /items/add-one` - Add a single food item
- `POST /items/add` - Add multiple food items
- `DELETE /items/del/:id` - Delete a food item by ID

#### Menu
- `GET /item/` - Get menu items
- Additional menu-related endpoints

### Admin Backend (Port 3001)

#### Data Management
- `GET /data/` - Get all data
- `POST /data/` - Add new data
- `PUT /data/:id` - Update data by ID
- `DELETE /data/:id` - Delete data by ID

## ⚙️ Environment Setup

### Backend Configuration

Create a `.env` file in the Backend directory (optional):

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/food
```

### Admin Backend Configuration

Create a `.env` file in the Adminpage/BackendAdmin directory (optional):

```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/food
```

## 🎯 Features Overview

### Cart Context
The application uses React Context API for global cart state management, allowing users to:
- Add items to cart from any page
- Update quantities
- Remove items
- Persist cart data across components

### Food Schema
```javascript
{
  title: String,      // Food title
  type: String,       // Food category
  typee: String,      // Sub-category (optional)
  name: String,       // Food name
  price: Number       // Price in currency
}
```

### Routing Structure
- `/` - Home page
- `/Categories` - Browse categories
- `/Recipes` - View recipes
- `/Contact` - Contact form
- `/Cart` - Shopping cart
- `/Qr` - QR code page
- `/Login` - User login (commented in code)
- `/Signup` - User registration (commented in code)

## 🚀 Deployment

### Frontend Deployment

The project is configured for GitHub Pages deployment:

```bash
cd Frontend
npm run deploy
```

Make sure to update `vite.config.js` with your repository base path.

### Backend Deployment

For production deployment, consider:
- **Heroku** - Easy Node.js deployment
- **Railway** - Modern deployment platform
- **DigitalOcean** - VPS hosting
- **AWS EC2** - Cloud hosting

Update MongoDB connection string to use MongoDB Atlas or other cloud database.

## 📝 Development Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start server (production)
npm run dev      # Start with nodemon (development)
```

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check if MongoDB is accessible at `127.0.0.1:27017`
- Verify no firewall is blocking the connection

### Port Already in Use
- Change port in `server.js` if 3000/3001 is occupied
- Or stop the process using the port: `npx kill-port 3000`

### CORS Issues
- CORS is configured in both backends
- Ensure frontend is making requests to correct backend URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- React team for the amazing library
- MongoDB for the database solution
- Express.js for the backend framework
- All contributors and supporters

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

**Made with ❤️ using MERN Stack**
