# CodeForge AI — Interview Notes

These notes contain important concepts, architectural decisions, and interview questions related to the development of CodeForge AI.

---

# 1. Project Overview

## What is CodeForge AI?

CodeForge AI is an AI-powered programming learning platform designed to help beginners learn programming through interactive lessons, coding challenges, project-based learning, and personalized AI guidance.

The goal of the platform is to bridge the gap between learning programming concepts and applying them through hands-on coding practice.

---

# 2. Project Architecture

CodeForge AI currently follows a separated frontend and backend architecture.

Frontend:
React + TypeScript + Vite

Backend:
Node.js + Express + TypeScript

Database:
PostgreSQL

Basic architecture:

User
↓
React Frontend
↓
HTTP/API Request
↓
Express Backend
↓
PostgreSQL Database

The frontend is responsible for the user interface and user interactions.

The backend handles business logic, API requests, authentication, and communication with the database.

PostgreSQL is responsible for persistent data storage.

---

# 3. Why Separate Frontend and Backend?

The frontend and backend are maintained as separate applications.

Benefits:

- Clear separation of concerns.
- Frontend and backend can be developed independently.
- They can be deployed separately.
- Backend APIs can potentially serve multiple clients.
- The architecture is easier to maintain as the application grows.

The frontend has its own `package.json` and dependencies.

The backend also has its own `package.json` and dependencies.

---

# 4. Frontend

## Technologies

- React
- TypeScript
- Vite

## Why React?

React provides a component-based approach to building user interfaces.

It allows the application to be divided into reusable components, making the UI easier to maintain and extend.

## Why TypeScript?

TypeScript adds static typing to JavaScript.

Benefits include:

- Detecting certain errors during development.
- Better IDE support and autocomplete.
- Improved maintainability.
- Clearer data structures through interfaces and types.

## Why Vite?

Vite is used as the frontend development and build tool.

It provides:

- Fast development server.
- Hot Module Replacement (HMR).
- Simple React and TypeScript setup.
- Optimized production builds.

---

# 5. React Application Startup Flow

When the user opens the frontend:

Browser
↓
Vite serves index.html
↓
index.html contains `<div id="root">`
↓
index.html loads `src/main.tsx`
↓
main.tsx creates the React root
↓
React renders `<App />`
↓
App.tsx renders application pages/components

Important code:

`index.html`

    <div id="root"></div>

`main.tsx`

    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    )

The `!` is TypeScript's non-null assertion operator. It tells TypeScript that the root element is expected to exist.

---

# 6. Component-Based Architecture

Instead of writing the entire application inside `App.tsx`, the application is divided into different responsibilities.

Example structure:

src/
├── components/
├── pages/
├── layouts/
├── features/
├── hooks/
├── services/
├── types/
└── utils/

`components/`
Reusable UI components.

`pages/`
Complete application pages.

`layouts/`
Shared page structures.

`features/`
Feature-specific functionality.

`hooks/`
Custom React hooks.

`services/`
API communication and external services.

`types/`
Shared TypeScript types.

`utils/`
Reusable helper functions.

---

# 7. Backend

## Technologies

- Node.js
- Express
- TypeScript

## What is Node.js?

Node.js allows JavaScript to run outside the browser.

In CodeForge AI, Node.js provides the runtime environment for the backend server.

## Why Express?

Express is used to build the HTTP API.

It provides routing and middleware functionality that makes building APIs with Node.js simpler.

Example endpoint:

    GET /api/health

Response:

    {
      "status": "OK",
      "message": "CodeForge AI API is running"
    }

---

# 8. Health Check Endpoint

The backend currently provides:

    GET /api/health

Purpose:

The health endpoint verifies that the backend application is running and able to respond to HTTP requests.

Health endpoints are useful for:

- Development testing.
- Deployment verification.
- Monitoring systems.
- Container health checks.

---

# 9. Frontend and Backend Ports

Frontend:

    localhost:5173

Backend:

    localhost:3000

The frontend and backend run as separate processes.

Eventually, the frontend will send HTTP requests to the backend API.

Example:

React Frontend
localhost:5173

        ↓ GET /api/courses

Express Backend
localhost:3000

        ↓

PostgreSQL

---

# 10. package.json

Each application has its own `package.json`.

It defines:

- Project metadata.
- Dependencies.
- Development dependencies.
- npm scripts.

Example backend dependencies:

    express

Example development dependencies:

    typescript
    tsx
    @types/node
    @types/express

`dependencies` are packages the application directly relies on.

`devDependencies` primarily contain tools required during development and building.

---

# 11. Important npm Commands

Frontend:

    npm run dev

Starts the Vite development server.

Backend:

    npm run dev

Starts the Express development server using `tsx watch`.

Backend build:

    npm run build

Compiles TypeScript into JavaScript.

---

# 12. Git Workflow

Basic workflow used in the project:

Working Directory
↓
git add
↓
Staging Area
↓
git commit
↓
Local Repository
↓
git push
↓
GitHub Repository

Example commits:

    chore: initialize project structure

    feat: initialize React TypeScript frontend

    feat: initialize Express TypeScript backend

Meaning:

`feat`
A new feature or application functionality.

`fix`
A bug fix.

`chore`
Project maintenance or setup.

`docs`
Documentation changes.

`refactor`
Code restructuring without changing behavior.

---

# 13. Development Challenge

## Problem

After installing PostgreSQL, running:

    psql --version

returned an error saying that `psql` was not recognized.

## Cause

The PostgreSQL `bin` directory was not available in the Windows PATH environment variable.

## Solution

Added:

    C:\Program Files\PostgreSQL\18\bin

to the Windows PATH.

After restarting PowerShell:

    psql --version

successfully returned the installed PostgreSQL version.

## What I Learned

The operating system uses the PATH environment variable to locate executable programs when commands are entered in the terminal.

---

# 14. Interview Questions I Should Be Able to Answer

1. Tell me about CodeForge AI.

2. What problem does your project solve?

3. Explain the architecture of your project.

4. Why did you choose React?

5. Why did you use TypeScript instead of JavaScript?

6. Why did you choose Vite?

7. How does your React application start?

8. What is the purpose of `main.tsx`?

9. What is the difference between `App.tsx` and `main.tsx`?

10. Why did you separate the frontend and backend?

11. What is Node.js?

12. What is Express?

13. What is an API endpoint?

14. What is the purpose of your `/api/health` endpoint?

15. What is the difference between dependencies and devDependencies?

16. What happens when you run `npm run dev`?

17. What is `node_modules` and why isn't it committed to Git?

18. What is `.gitignore`?

19. Why shouldn't `.env` files be pushed to GitHub?

20. Explain your Git workflow.

21. Tell me about a technical problem you encountered and how you solved it.

---

# 15. Current Project Status

Completed:

- Development environment setup.
- Git and GitHub repository setup.
- React + TypeScript frontend.
- Vite development server.
- Basic frontend component architecture.
- Node.js + Express + TypeScript backend.
- Backend development server.
- Health check API.

Next:

- PostgreSQL database setup.
- Database connection.
- Environment variable configuration.
- Database schema design.
- Authentication.