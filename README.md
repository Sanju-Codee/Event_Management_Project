# 🎫 Ticket Arena — Event Management & Ticket Booking System

A full-stack web application built for seamless event discovery, creation, management, and ticket booking. Designed with a modular MVC architecture and deployed with a robust Node.js backend and responsive frontend.

---

## 🚀 Live Demo & Access
- **Live Application:** [👉 Visit Ticket Arena Live Website](https://imsrthk19.github.io/Event_Management_System_Frontend/)
- **Backend Repository:** Hosted on `dev` branch (Current Repo)
- **Backend Deployment:** Deployed on **Render**
---

## 🛠️ Tech Stack

### **Backend**
* **Runtime & Framework:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Architecture:** MVC (Model-View-Controller) pattern with dedicated middleware validation.

### **Frontend**
* **Core:** HTML5, CSS3 / Tailwind, JavaScript (ES6+)
* **API Communication:** Axios

---

## 📁 Project Architecture & Folder Structure

The project follows a clean, scalable separation of concerns:

```text
📦 Event_Management_Project
├── 📂 Controllers/         # Business logic handlers
│   ├── event.js            # Event CRUD & filtering logic
│   ├── login.js            # User authentication logic
│   ├── userRegister.js     # User registration logic
│   ├── update.js           # User update logic
│   └── delete.js           # User deletion logic
├── 📂 middlewares/         # Request validation & processing
│   ├── event.mid.js        # Event validation middleware
│   ├── login.mid.js        # Login validation middleware
│   ├── user.mid.js         # User validation middleware
│   ├── update.mid.js       # Update validation middleware
│   └── delete.mid.js       # Delete validation middleware
├── 📂 models_/             # Mongoose schemas (MongoDB)
│   ├── event.model.js      # Event schema definition
│   └── user.model.js       # User schema definition
├── 📂 routers/             # API route handlers
│   ├── event.router.js     # Event endpoints
│   ├── login.router.js     # Auth login endpoints
│   ├── user.routers.js     # User registration endpoints
│   ├── update_user.router.js # Update operation routes
│   └── delete.router.js    # Delete operation routes
├── 📜 server.js            # Application entry point
└── 📜 .env                 # Environment variables


🔌 API Endpoints
Authentication APIs
POST /register — Register a new user account.

POST /login — Authenticate an existing user.

Event APIs
POST /events — Create a new event.

GET /events — Retrieve all available events.

GET /events?category=value&sort=value — Filter events by category and sort by price/date.

PUT /events/:id — Update specific event details.

DELETE /events/:id — Remove an event from the system.

✨ Features Implemented
User Authentication & Authorization: Secure user registration and login system implemented using JSON Web Tokens (JWT) and password encryption.

Role-Based User Structure: Support for user roles embedded within JWT payloads for future administrative access.

Event CRUD Operations: Complete capability to create, read, update, and delete events.

Advanced Filtering & Sorting: Dynamic event discovery based on categories (e.g., Music, Tech) and sorting preferences (Price / Date).

Robust Middleware Validation: Pre-controller request validation ensuring data integrity across all routes.

Modular MVC Design: Clean code separation making the codebase highly maintainable and scalable.

⚙️ How to Run Locally
Follow these steps to set up and run the project on your local machine:

1. Clone the Repository
Bash
git clone [https://github.com/Sanju-Codee/Event_Management_Project.git](https://github.com/Sanju-Codee/Event_Management_Project.git)
cd Event_Management_Project
2. Backend Setup
Navigate to the backend directory (or root where server files reside) and install dependencies:

Bash
npm install
Create a .env file in the root directory and add your configuration:

Code snippet
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

Bash
npm start

🔮 Future Improvements
Payment Integration: Integrate gateway services (like Stripe/Razorpay) for real-time ticket checkout.

Ticket PDF Generation: Generate downloadable/printable PDF tickets upon booking confirmation.

Admin Dashboard: Dedicated administrative control panel for platform management.

Cloud Image Uploads: Implement Cloudinary or S3 for dynamic event banner uploads.

👨‍💻 Author
Sanju Dhar
