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

## MVP scope

**What Relay does**
- Takes a natural-language request such as "Help me prepare for my presentation tomorrow".
- Reads a sample schedule through a `get_schedule(date)` tool.
- Proposes preparation tasks and, after user confirmation, saves them to SQLite.
- Answers follow-up questions using the saved task state.
- Shows an action trace that separates proposed actions from completed ones.

**What Relay does not do (yet)**
- No real calendar, email or reminder integrations. All data is sample data.
- No user accounts or multi-user support.
- No claim that an action happened unless the connected tool confirms it.
- Voice input only if the text workflow is reliable.

**Success looks like**
A stranger can clone the repo, follow the README, and run a demo where Relay plans, asks for confirmation, acts through tools, and reports failures honestly.