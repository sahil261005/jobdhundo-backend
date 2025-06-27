# JobDhundo Backend

The **JobDhundo Backend** is a Node.js/Express server that provides authentication and job listing APIs for the [JobDhundo](https://jobdhundoweb.vercel.app/) platform. This backend is responsible for handling user registration, login, and management of job data, enabling clients to access a curated list of technology jobs across India.

---

## Features

- **User Authentication**: Secure registration and login using JWT and hashed passwords.
- **RESTful API**: Endpoints for user operations.
- **MongoDB Integration**: All user data is stored and managed with MongoDB.
- **CORS Support**: Secure cross-origin requests from the JobDhundo frontend and deployment URLs.
- **Job Listing API**: (Sample jobs provided in client-side scripts; backend extensible for job data APIs.)

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB cluster or local instance
- NPM

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sahil261005/jobdhundo-backend.git
   cd jobdhundo-backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file with:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=10000
   ```

4. **Start the server:**

   ```sh
   npm start
   ```

   The server will run on `http://localhost:10000` by default.

---

## API Endpoints

### Authentication

- `POST /api/auth/register`  
  Register a new user.  
  **Body:** `{ username, email, password }`

- `POST /api/auth/login`  
  Login with registered email and password.  
  **Body:** `{ email, password }`  
  **Returns:** JWT token

---

## Project Structure

```
jobdhundo-backend/
├── models/
│   └── User.js         # User schema/model
├── routes/
│   └── authRoutes.js   # Auth API endpoints
├── server.js           # Main server file
├── script.js           # (Front-end helper for job listings)
├── .env                # Environment variables (not committed)
└── package.json
```

---

## Deployment

This backend is ready for deployment on platforms like **Render**, **Vercel**, or any Node.js-compatible cloud provider. Ensure environment variables are set appropriately on your deployment platform.

---

## Security

- Passwords are hashed with **bcryptjs**.
- **JWT** is used for authentication tokens.
- CORS is restricted to allowed frontend URLs.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feature requests, please open an issue or contact [@sahil261005](https://github.com/sahil261005).
