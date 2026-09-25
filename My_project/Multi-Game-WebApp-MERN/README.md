# ENDGAME - Full-Stack MERN Gaming Platform

A comprehensive, production-grade gaming portal and publishing platform built with MongoDB, Express.js, React, and Node.js.

---

## 🎮 Features & Highlights

- **Multi-Role Dashboards**:
  - **Super Admin**: System overview metrics, game approvals, user management, review moderation, and instant PDF report generation.
  - **Game Developer**: Upload games, manage submissions, and view status.
  - **Player**: Personal profile, high score history, coin wallet, and game reviews.
- **Embedded Browser Games**:
  - **Chess**: Fully interactive board with legal move validation and chess engine (`chess.js`).
  - **Tic-Tac-Toe**: Classic 3-in-a-row game with Local 2-Player and AI Single-Player modes.
  - **Dynamic Player**: Uploaded HTML5 and iframe game player.
- **Security & RBAC**:
  - JWT Token-based authentication.
  - Bcrypt password hashing.
  - Role-protected routes on both client and server.
- **Instant Dev Environment**:
  - Automatically falls back to an in-memory MongoDB server if a local MongoDB service is not running.
  - Seeds sample categories, games, admin accounts, and developer accounts on startup.

---

## 🔑 Default Credentials

- **Admin Account**:
  - Email: `admin@endgame.com`
  - Password: `password123`
- **Developer Account**:
  - Email: `developer@endgame.com`
  - Password: `password123`

---

## 🚀 Running the Project

### 1. Backend Server
```bash
cd backend
npm install
node server.js
```
The backend API starts at `http://localhost:5000`.

### 2. Frontend Client
```bash
cd frontend
npm install
npm run dev
```
The React frontend starts at `http://localhost:5173`.

---

## 📁 Directory Structure

```
Multi-Game-WebApp-MERN/
├── backend/
│   ├── config/db.js              # Database connection & in-memory fallback
│   ├── controllers/              # Request handlers (admin, auth, dev, game, user)
│   ├── middleware/               # Auth & role verification middleware
│   ├── models/                   # Schemas (User, Game, Submission, Review, Score)
│   ├── routes/                   # API routes
│   ├── utils/seeder.js           # Database seed script
│   └── server.js                 # Server entry point
│
└── frontend/
    ├── src/
    │   ├── components/           # Reusable UI (Header, Footer, Layout)
    │   ├── pages/
    │   │   ├── auth/             # Login & Register views
    │   │   ├── dashboards/       # Admin, Developer, and Player portals
    │   │   └── games/            # Chess, Tic-Tac-Toe, and Game Player
    │   └── App.jsx               # Application routing
    └── package.json
```
