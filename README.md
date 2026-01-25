# 🍽️ Yummify - Food Ordering & Management System

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
