# Javascript Dyma Course
> This project is part of a certification training in Javascript

___
## Environment Setup (2 options)
### 1. Environment setup with Docker
For this certification, I decided to practice my docker skills by containerizing the development environment.
#### ✅ Prerequisites
- Docker installed on your machine
```bash
docker compose up --build -d
```
This will build and start the dev service from docker-compose.yml (using the image within the Dockerfile).
For now, I've only set-up the development environment.
### 2. Environment setup on host
#### ✅ Prerequisites
- Node.js and npm installed on your machine
If you do not wish to install docker, then follow this :

#### 🧰 Installation Guide

##### Windows

1. Download the Node.js installer (`.msi`) from the [official Node.js website](https://nodejs.org/)
2. Follow the setup instructions and ensure `npm` is added to your system PATH

##### Linux

```bash
sudo apt update
sudo apt install nodejs npm
```

#### Project setup with node.js
```bash
npm init -y
npm i -D vite
```
This initializes a Node project and installs Vite as a development dependency

Start the project
```bash
npm run start
```
___

### Project structure
```
📁 dyma-javascript/
├── src/                # JavaScript source files
|   └── index.js
├── index.html 
├── package.json
├── package-lock.json
├── Dockerfile          # Dev environment container setup
├── docker-compose.yml  # Compose file to run the container
├── .dockerignore       # prevents unnecessary files from being copied into image
└── README.md
```