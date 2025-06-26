
# Introduction
HealthLink is an advanced doctor appointment and medical management system designed to streamline healthcare access for patients and professionals.

# Frontend

**Tech Stack**
- Vite + React
- Typescript
- Tailwind css 
- React icons
- zustand
- React Form
- zod


# Backend
 

**Tech Stack**
- Node.js 
- Express.js
- MongoDB
- JWT Authentication
- nodemon 




# folder structure

```
HealthLink/
│
├── client/                    # React/Vite project
│   ├── public/                # Static files
│   ├── src/app
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Pages two section (doctor/receptionist)
│   │   ├── store              # Medical Presciption (zustand Store)
|   |   ├── validation         # form validation with zod
|   |   ├── hook
|   |
│   │__ page.tsx               # root file 
|   |              
│   └── package.json           # dependecies
│
|
├── backend/                   # Node.js + Express API
│   ├── config/                # Route handler logic
│   ├── controller/            # Route handler logic 
│   ├── route/                 # Route definitions
│   ├── model                  # database Schema  
|   ├── server.js              # Main server file    
│   └── package.json           # manage dependecies
│

```



# ✨ Features

🧑‍⚕️ Doctor Management (CRUD)

🧑‍💼 Receptionist Portal

📝 Patient Registration & Appointment Booking

🔐 JWT Role-based Authentication ( Doctor, Receptionist)

📊 Dashboard with Analytics

📅 Appointment Calendar



# 🔧 Installation

**1️⃣ Clone the repo**
```
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
 ```
2️⃣ Set up the Backend
```
cd server
npm install
Create a .env file with DB_URL, JWT_SECRET, etc.
npm run dev
```

3️⃣ Set up the Frontend
```
cd ../client
npm install
npm run dev
```


# 🖼️ Screenshots

***Receptionist*

![Image](https://github.com/user-attachments/assets/ba0bd5e5-069b-450d-8738-3a4b861ca20e)

![Image](https://github.com/user-attachments/assets/09639021-bee7-4261-b054-f446777dd01b)

![Image](https://github.com/user-attachments/assets/1e42a563-c350-4c28-acc3-41c83e688741)

![Image](https://github.com/user-attachments/assets/868749fc-d480-4690-891e-3e67fcf4a782)

**Doctor**

![Image](https://github.com/user-attachments/assets/6a505064-bba0-4a06-aa85-b768dab7e255)

![Image](https://github.com/user-attachments/assets/fcccbf65-d0e4-4384-a1ae-296ba25233c1)
