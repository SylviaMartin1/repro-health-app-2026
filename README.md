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
[Watch the demo video](https://youtu.be/rNAOGEu9YU0?is=COScSeMTaJS8SOdA)

---


## 📸 Screenshots
<img width="1170" height="2229" alt="login" src="https://github.com/user-attachments/assets/4c9be62e-35af-4d9b-b03e-dafd75714801" />
<img width="585" height="1266" alt="dashboard" src="https://github.com/user-attachments/assets/a288699d-1f48-418b-afe9-a0bfdd7ad6f9" />
<img width="296" height="640" alt="stats" src="https://github.com/user-attachments/assets/1afe4325-6ae0-440c-88e3-055777947088" />
<img width="585" height="1266" alt="stats2" src="https://github.com/user-attachments/assets/56ee51ab-c255-4f29-86ed-3a05d2eb1742" />
<img width="296" height="640" alt="articles" src="https://github.com/user-attachments/assets/d663bd39-9e4c-4af2-b27d-5170c2b51288" />
<img width="148" height="320" alt="supplements" src="https://github.com/user-attachments/assets/7f2dadcd-6c05-4169-abb1-af572aafd546" />

---

## 👩‍💻 Author
**[Sylvia Martin](https://github.com/SylviaMartin1)**
Final Year Project — BSc (Hons) in Software Systems Development, 2026
📧 sylviamartin2003@gmail.com

---

## 📄 Licence
This project was developed as an academic final year project and is intended for viewing and running purposes only. It may not be copied, modified, or redistributed without permission.

















