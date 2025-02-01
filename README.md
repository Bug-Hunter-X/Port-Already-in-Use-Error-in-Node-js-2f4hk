# Node.js Port Already in Use Error

This repository demonstrates a common Node.js error where the server fails to start because the specified port is already in use.  The error message can be vague, making debugging difficult.  The solution shows how to handle this gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If this port is already in use (e.g., by another Node.js server or a different application), the server will fail to start.

## Solution

The `bugSolution.js` file demonstrates a robust way to handle this situation. It uses a `try...catch` block to catch the `EADDRINUSE` error and provides a more informative message to the user, suggesting they choose a different port or stop the conflicting process.