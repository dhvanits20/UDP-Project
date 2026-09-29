# 🧪 Complete Postman Testing Guide - ENDGAME Platform

This guide provides copy-paste ready requests for testing all endpoints of the ENDGAME backend API in Postman.

---

## 📌 Quick Setup Note
- **Base URL**: `http://localhost:5000`
- **JSON Format**: When sending a `POST` or `PUT` body, ensure in Postman:
  - Tab: **Body**
  - Radio button: **raw**
  - Dropdown: **JSON**
- **Token**: For protected endpoints, copy the `"token"` value received from the Login response and paste it into the **Headers** tab:
  - Key: `Authorization`
  - Value: `Bearer <YOUR_COPIED_TOKEN>`

---

## 1️⃣ Public & Health Check Endpoints

### Request 1.1: Health Check (Server Alive)
- **Method**: `GET`
- **URL**: `http://localhost:5000/`
- **Headers**: None
- **Body**: None
- **Expected Response**: `200 OK`
```text
API is running...
```

---

### Request 1.2: Get All Active Games
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/games`
- **Headers**: None
- **Body**: None
- **Expected Response**: `200 OK` (JSON array of games including Chess, Tic-Tac-Toe, etc.)

---

### Request 1.3: Get Game Categories
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/games/categories`
- **Headers**: None
- **Body**: None
- **Expected Response**: `200 OK` (Array of category names like `["Strategy", "Board Games", ...]`)

---

### Request 1.4: Get All Game Reviews
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/games/reviews/all`
- **Headers**: None
- **Body**: None
- **Expected Response**: `200 OK`

---

## 2️⃣ Authentication Endpoints

### Request 2.1: Register a New Player
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/auth/register`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Karan Joshi",
  "email": "karan@example.com",
  "password": "password123",
  "role": "user"
}
```
- **Expected Response**: `201 Created`
```json
{
  "_id": "...",
  "name": "Karan Joshi",
  "email": "karan@example.com",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
}
```

---

### Request 2.2: Login as Super Admin (To get Admin Token)
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/auth/login`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body (raw JSON)**:
```json
{
  "email": "admin@endgame.com",
  "password": "password123"
}
```
- **Expected Response**: `200 OK`
> 💡 *Copy the `"token"` from this response for the Admin requests below!*

---

### Request 2.3: Login as Developer (To get Dev Token)
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/auth/login`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body (raw JSON)**:
```json
{
  "email": "developer@endgame.com",
  "password": "password123"
}
```
- **Expected Response**: `200 OK`
> 💡 *Copy the `"token"` from this response for Developer requests!*

---

## 3️⃣ User / Player Endpoints (Requires Login Token)

### Request 3.1: Get User Profile
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/users/profile`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_PLAYER_OR_ADMIN_TOKEN_HERE>`
- **Expected Response**: `200 OK` (Profile details, coins, scores)

---

### Request 3.2: Update User Profile
- **Method**: `PUT`
- **URL**: `http://localhost:5000/api/users/profile`
- **Headers**:
  - `Content-Type`: `application/json`
  - `Authorization`: `Bearer <PASTE_TOKEN_HERE>`
- **Body (raw JSON)**:
```json
{
  "name": "Karan J. (Updated)"
}
```
- **Expected Response**: `200 OK`

---

## 4️⃣ Developer Studio Endpoints (Requires Developer Token)

### Request 4.1: Get Developer Dashboard & Submissions
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/developer/dashboard`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_DEV_TOKEN_HERE>`
- **Expected Response**: `200 OK` (Dashboard statistics and submitted games)

---

## 5️⃣ Admin Control Center Endpoints (Requires Admin Token)

### Request 5.1: Get Admin Telemetry & Statistics
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/admin/dashboard`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_ADMIN_TOKEN_HERE>`
- **Expected Response**: `200 OK`
```json
{
  "totalUsers": 2,
  "totalGames": 4,
  "pendingSubmissions": 1,
  "totalReviews": 3
}
```

---

### Request 5.2: Get All Registered Users
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/admin/users`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_ADMIN_TOKEN_HERE>`
- **Expected Response**: `200 OK` (List of all users, their roles, and emails)

---

### Request 5.3: Get Pending Game Submissions
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/admin/submissions`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_ADMIN_TOKEN_HERE>`
- **Expected Response**: `200 OK` (List of games submitted by developers waiting for approval)

---

### Request 5.4: Get Reviews for Moderation
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/admin/reviews`
- **Headers**:
  - `Authorization`: `Bearer <PASTE_ADMIN_TOKEN_HERE>`
- **Expected Response**: `200 OK` (List of user reviews with ratings and comments)

---

## 6️⃣ Security & Negative Testing (Show to Evaluators)

### Request 6.1: Unauthorized Access Test (RBAC Protection)
- **Method**: `GET`
- **URL**: `http://localhost:5000/api/admin/dashboard`
- **Headers**: DO NOT include the `Authorization` header
- **Expected Response**: `401 Unauthorized`
```json
{
  "message": "Not authorized, no token"
}
```
> 💡 *This proves to your examiner that your Role-Based Access Control and JWT guards are strictly enforced.*
