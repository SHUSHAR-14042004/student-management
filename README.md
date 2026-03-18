# 📘 Student Management System – Backend

## 📌 Project Overview
The Student Management System is a backend application developed using Node.js, Express.js, and MongoDB. It provides RESTful APIs to perform CRUD operations (Create, Read, Update, Delete) on student data. The project follows real-world backend practices like pagination, filtering, sorting, and structured API responses.

---

## 🚀 Features
- Create a new student  
- Retrieve all students  
- Get student by ID  
- Update student details  
- Delete student  
- Search students by name  
- Pagination and sorting  
- Filtering by course  
- Structured API responses  
- Error handling  

---

## 🛠️ Tech Stack
- Backend: Node.js, Express.js  
- Database: MongoDB (Local / Atlas)  
- ODM: Mongoose  
- Tools: Postman, VS Code, Git, GitHub  

---

## 📁 Project Structure
```
student-management-backend/
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── middleware/
│   └── validation.js
│
├── data/
│   └── students.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/student-management-backend.git
cd student-management-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
PORT=5000
```

---

### 4. Run the Server
```bash
node server.js
```

Server runs at:
```
http://localhost:5000
```

---

## 📡 API Endpoints

### Get All Students
```
GET /api/students
```

### Get Student by ID
```
GET /api/students/:id
```

### Add Student
```
POST /api/students
```

### Update Student
```
PUT /api/students/:id
```

### Delete Student
```
DELETE /api/students/:id
```

### Search Students
```
GET /api/students/search?name=Rahul
```

---

## 📊 Advanced Queries

### Pagination
```
GET /api/students?page=1&limit=5
```

### Sorting
```
GET /api/students?sort=name
```

### Filtering
```
GET /api/students?course=CS
```

### Combined Query
```
GET /api/students?page=1&limit=2&sort=name&course=CS
```

---

## 📦 Sample Response
```json
{
  "total": 10,
  "page": 1,
  "limit": 5,
  "data": [
    {
      "_id": "abc123",
      "name": "Rahul",
      "course": "CS"
    }
  ]
}
```

---

## ❗ Error Handling
- 400 → Bad Request  
- 404 → Not Found  
- 500 → Server Error  

---

## 🎯 Learning Outcomes
- Built RESTful APIs using Express.js  
- Integrated MongoDB with Mongoose  
- Implemented MVC architecture  
- Learned pagination, filtering, and sorting  
- Improved debugging and backend logic  

---

## 🔮 Future Enhancements
- JWT Authentication  
- Role-based access  
- Frontend integration (React)  
- Deployment (Render / Railway)  

---

## 👨‍💻 Author
Shushar U Kulal  
GitHub: https://github.com/SHUSHAR-14042004  

---

## ⭐ Conclusion
This project demonstrates a complete backend system with industry-level practices and serves as a strong foundation for full-stack development.
