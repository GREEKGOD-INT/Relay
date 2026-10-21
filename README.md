# Relay

A conversational AI action coordinator. Relay turns natural-language requests
into tool calls, and only reports an action as done when the tool confirms it.

## Status
Week 1: server health endpoint and minimal React page.

## Requirements
- Node.js 20+
- Git

## Setup
1. Server:
```bash
   cd server
   npm install
   npm start
```
   Runs on http://localhost:3001 (check /health).
2. Client (new terminal):
```bash
   cd client
   npm install
   npm run dev
```
   Opens on http://localhost:5173.

## Project layout
- `server/` Express API
- `client/` React (Vite) UI