# 🌿 Evergreen — Reproductive Health Application
A full-stack mobile application designed to support users in tracking, understanding, and managing their reproductive health across different life stages.
Built with a **React Native (Expo)** frontend, a **Node.js/Express** backend API, and a **MongoDB Atlas** cloud database — featuring secure authentication, personalised health insights, and educational content.

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Screenshots](#screenshots)

---

## ✨ Features
- **User Authentication** — Secure registration and login using JWT tokens
- **Password Security** — Encrypted credentials with bcrypt
- **Health Logging** — Track cycles, medications, check-ups, and lifestyle data
- **Personalised Insights** — Statistics and trends based on individual user data
- **Educational Content** — Articles and supplement information via Wikipedia API
- **Smart Reminders** — Push notifications for health events and medication
- **Cloud Database** — Persistent data storage via MongoDB Atlas

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Mobile Frontend | React Native (Expo) |
| Backend API | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| Security | bcrypt |
| External API | Wikipedia API |
| Version Control | Git & GitHub |


---

## 🚀 Getting Started
### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [Expo Go](https://expo.dev/go) app on your mobile device, or an iOS/Android emulator
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account with a configured cluster

---

### 1. Clone the repository

```bash
git clone https://github.com/SylviaMartin1/repro-health-app-2026.git
cd repro-health-app-2026
```

### 2. Set up and run the backend

```bash
cd evergreen-api
npm install
npm run dev
```

The API server will start at `http://localhost:8080`.

### 3. Set up and run the frontend

Open a new terminal from the project root:

```bash
cd evergreen-mobile
npm install
npm run start
```

Scan the QR code with the **Expo Go** app on your phone, or press `i` for iOS / `a` for Android emulator.

---

## 🔐 Environment Variables

Create a `.env` file inside the `evergreen-api/` folder with the following:

```env
PORT=8080
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.


---

## 🎥 Demo
[Watch the demo video](https://youtube.com/your-link)

---


## 📸 Screenshots

_Add screenshots of your app here once available._

---

## 👩‍💻 Author
**[Sylvia Martin](https://github.com/SylviaMartin1)**
Final Year Project — BSc (Hons) in Software Systems Development, 2026
📧 sylviamartin2003@gmail.com

---

## 📄 Licence
This project was developed as an academic final year project and is intended for viewing and running purposes only. It may not be copied, modified, or redistributed without permission.

















