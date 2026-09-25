# 🎮 ENDGAME - Multi-Game Web Platform (MERN Stack)

Welcome to **ENDGAME**, a full-featured, modern multi-game web gaming and distribution platform built on the **MERN** stack (MongoDB, Express, React, Node.js). 

The platform supports browser gaming, community game submissions, developer portals, role-based dashboards, and complete administrative control with live telemetry and PDF report generation.

---

## 🌟 Key Highlights & Features

### 1. 🕹️ Interactive Gaming Hub
- **Classic Chess**: Full chess engine powered by `chess.js` with smart AI opponent, move history, and responsive UI.
- **Tic-Tac-Toe**: Classic 3x3 strategy game featuring local 2-Player mode and Single-Player AI difficulty modes.
- **Dynamic Game Player**: Extensible iframe and HTML5 engine for hosting and playing developer-submitted games.
- **Game Catalog**: Categorized game library (Strategy, Board Games, Action, Puzzle, etc.) with search and sorting.

### 2. 🔐 Role-Based Access Control (RBAC)
- **Player (User)**: Browse games, play, record personal high scores, earn coins, and submit game reviews.
- **Developer**: Access the Developer Studio to submit new games, manage game files/assets, and track review status.
- **Super Admin**: High-level system control center to review submissions, manage users/devs, toggle game visibility, moderate reviews, and export performance reports.

### 3. 📊 Pro Admin Control Center
- **System Telemetry**: Real-time stats on total games, registered players, verified developers, pending requests, and revenue.
- **Catalog Management**: Toggle game status (Active / Inactive), edit game details, and view category distributions.
- **Developer Request Moderation**: One-click approval or rejection of community-submitted games.
- **User & Developer Moderation**: Track all registered accounts and role assignments.
- **Review Moderation**: Clean up inappropriate ratings or flagged comments.
- **Automated PDF Export**: One-click generation and download of system analytics reports via `jsPDF`.

---

## 👥 Default Demo Credentials

When running with the built-in database seeder (including the automatic In-Memory MongoDB fallback), the following accounts are pre-configured:

| Role | Email | Password | Dashboard URL |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@endgame.com` | `password123` | `/admin/dashboard` |
| **Developer** | `developer@endgame.com` | `password123` | `/developer/dashboard` |
| **Player** | Register new or login | (your password) | `/user/dashboard` |

---

## 🏗️ Project Architecture

```
UDP-Project/
├── Documentation.docx / .pdf             # Project specification documents
├── postman/                              # Postman API test collection
└── My_project/
    └── Multi-Game-WebApp-MERN/
        ├── backend/                      # Node.js + Express REST API
        │   ├── config/                   # MongoDB connection & memory fallback
        │   ├── controllers/              # Business logic (admin, dev, user, auth, games)
        │   ├── middleware/               # JWT authentication & RBAC guards
        │   ├── models/                   # Mongoose database schemas
        │   ├── routes/                   # Express API endpoints
        │   ├── utils/                    # Data seeder with demo accounts & games
        │   └── server.js                 # Server entry point
        │
        └── frontend/                     # Modern React (Vite) Application
            ├── src/
            │   ├── components/           # Navbar, Header, Footer, Layout
            │   ├── pages/                # Home, Games, Reviews, Contact, News
            │   │   ├── auth/             # Login, Register
            │   │   ├── dashboards/       # Admin, Developer, Player dashboards
            │   │   └── games/            # Chess, Tic-Tac-Toe, Dynamic Player
            │   └── App.jsx               # Router & page declarations
            └── package.json
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v18.x or v20+ recommended)
- **npm** (v9+ or v10+)
- **MongoDB** (Local MongoDB instance or MongoDB Atlas URI; *an In-Memory MongoDB will automatically launch as a fallback if no local Mongo instance is detected*).

---

### 1. Backend Setup

```bash
cd "My_project/Multi-Game-WebApp-MERN/backend"

# Install dependencies
npm install

# Start the server
node server.js
```
> The backend runs on `http://localhost:5000`.

#### Environment Configuration (`.env`)
A `.env` file in `backend/` is pre-configured with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/multi_game_db
JWT_SECRET=supersecretjwtkey_endgame_2026
```

---

### 2. Frontend Setup

In a new terminal window:
```bash
cd "My_project/Multi-Game-WebApp-MERN/frontend"

# Install dependencies
npm install

# Start development server
npm run dev
```
> The frontend runs on `http://localhost:5173`.

---

## 📡 REST API Summary

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register a new user |
| `POST` | `/api/auth/login` | Public | Authenticate user & retrieve JWT token |
| `GET` | `/api/games` | Public | List all active games |
| `GET` | `/api/games/:id` | Public | Retrieve game details |
| `GET` | `/api/admin/dashboard` | Admin | Get administrative metrics & stats |
| `GET` | `/api/admin/users` | Admin | List all registered users |
| `GET` | `/api/admin/submissions` | Admin | List pending developer game submissions |
| `POST`| `/api/admin/submissions/:id/approve` | Admin | Approve a developer game submission |
| `GET` | `/api/admin/reviews` | Admin | Moderate user reviews |
| `DELETE` | `/api/admin/reviews/:id` | Admin | Delete an inappropriate review |
| `GET` | `/api/developer/dashboard` | Developer | Retrieve developer dashboard & game submissions |
| `POST`| `/api/developer/submit` | Developer | Submit a new game for review |
| `GET` | `/api/users/profile` | Authenticated | Retrieve personal user profile & scores |

---

## 🛠️ Tech Stack

- **Client**: React 19, Vite, React Router 7, Axios, jsPDF, AutoTable, Chess.js.
- **Server**: Node.js, Express 5, Mongoose 9, JSON Web Tokens (JWT), Bcrypt.js, CORS.
- **Database**: MongoDB / MongoMemoryServer (development fallback).

---

## 📄 License
This project is developed as part of the UDP Capstone Project. All rights reserved.
