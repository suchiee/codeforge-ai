# CodeForge AI — Development Log

This document tracks the development progress, challenges, technical decisions, and lessons learned while building CodeForge AI.

---

## Sprint 0 — Project Setup

### What I Did

- Installed and configured PostgreSQL 18.
- Verified Node.js and npm installation.
- Verified Git installation.
- Configured PostgreSQL `psql` in the Windows PATH environment variable.
- Created the CodeForge AI GitHub repository.
- Cloned the repository locally.
- Created the initial project structure.

### Challenge Faced

The `psql` command was not recognized in PowerShell after installing PostgreSQL.

### Solution

Added the PostgreSQL binary directory to the Windows PATH environment variable:

    C:\Program Files\PostgreSQL\18\bin

After restarting PowerShell, I verified the installation using:

    psql --version

### What I Learned

- How environment variables and the Windows PATH work.
- How command-line tools are discovered by the operating system.
- How to verify PostgreSQL installation from the terminal.
- How to create and clone a GitHub repository.
- How to structure a full-stack project.

### Next Steps

- Initialize the React + TypeScript frontend.
- Initialize the Node.js + Express + TypeScript backend.
- Configure development tools.