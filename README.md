# Student Management API

A RESTful API built with Node.js, Express, and MySQL to manage student records.

## Features
- Add new students
- Retrieve all students
- Retrieve student by ID
- Update student details
- Delete students

## Tech Stack
- Node.js
- Express.js
- MySQL
- mysql2

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /students | Add a student |
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Update database credentials in `config/db.js`
4. Run `node index.js`

## Author
Manas
