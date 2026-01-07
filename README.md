# Job Application Backend (Node.js)

An **event-driven backend service** built with Node.js and Express for managing job applications and resume uploads.

This project demonstrates **real-world backend practices** including clean architecture, event-driven design, streaming file uploads and custom logging for the backend system.

---

## Features

* Create job applications
* Upload resumes (PDF only, streaming-based)
* List applications with pagination & filtering
* Event-driven architecture for side effects
* File-based structured logging
* Graceful shutdown handling
* Centralized configuration via environment variables
* Clean error handling with custom error classes

---

## Architecture Overview

The project follows a **layered architecture** with strict separation of concerns:

```bash
src/
├── app.js                # Express app setup
├── server.js             # Server
├── config/               # Centralized configuration
├── controllers/          # HTTP request handling
├── services/             # Business logic
├── routes/               # Routes for the API
├── middlewares/          # Validation + Error handling
├── events/               # Event emitter + listeners files
├── utils/                # Logger & filesystem utilities
├── errors/               # Custom application errors
```

### Key Design Decisions

* **Controllers are thin**
  They only translate HTTP requests/responses and delegate logic to services.

* **Services contain business logic**
  Application creation, listing, and resume handling live here.

* **Event-driven side effects**
  Actions like logging, analytics, and notifications are triggered via events instead of being tightly coupled.

* **Streaming file uploads**
  Resumes are uploaded using Node.js streams (no buffering entire files in memory).

* **Centralized configuration**
  All environment-based configuration is handled through a single config layer.

---

## Event-Driven Flow

When an application is created or a resume is uploaded:

1. Service mutates application state
2. Domain event is emitted
3. Independent listeners handle:

   * logging
   * analytics
   * future extensibility (email, notifications)

This keeps the core logic clean and extensible.

---

## API Endpoints

### Create Application

```bash
POST /api/applications
Content-Type: application/json
```

```json
{
  "name": "Your Name",
  "email": "yourname@example.com",
  "role": "Backend Developer"
}
```

---

### Upload Resume

```bash
POST /api/applications/:id/resume
Content-Type: application/pdf
```

* Accepts **PDF only**
* Uses streaming upload
* Saved to `uploads/`

---

### List Applications

```bash
GET /api/applications
```

#### Query Parameters

* `role` – filter by role
* `limit` – number of records
* `offset` – pagination offset

Example:

```bash
GET /api/applications?role=Backend%20Developer&limit=5&offset=0
```

---

## Logging

* Logs are written to `logs/application.log`
* Structured JSON logs
* Includes timestamps and contextual metadata
* Logging is handled via event listeners, not controllers

Example log entry:

```json
{
  "timestamp": "2026-01-04T10:15:22.123Z",
  "level": "INFO",
  "message": "Resume uploaded",
  "applicationId": "uuid-value"
}
```

---

## 🛑 Graceful Shutdown

The server handles:

* `SIGINT`
* `SIGTERM`
* uncaught exceptions
* unhandled promise rejections

Behavior:

* Stops accepting new requests
* Allows in-flight requests to finish
* Forces exit after a timeout if needed

This makes the service safe for production environments and containerized deployments.

---

## Environment Configuration

### `.env.example`

```env
PORT=3000
NODE_ENV=development

LOGS_DIR=logs
UPLOADS_DIR=uploads
```

* `.env` is ignored
* Defaults are provided for local development

---

## ▶️ Running the Project

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

Server runs on:

```bash
http://localhost:3000
```

---

## What This Project Demonstrates

* Strong understanding of Node.js core concepts
* Clean backend architecture
* Event-driven design practices
* Stream-based file handling
* Professional error handling
* Production-oriented server lifecycle management
* Thoughtful Git workflow and code quality

---

## Notes

* Data is stored in-memory for simplicity
* No database or authentication is included by design
* The focus is on backend fundamentals and code quality

---

## 📄 License

ISC
