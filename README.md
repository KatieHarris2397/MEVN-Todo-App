# MEVN-Todo-App
Simple MEVN todo app based off tutorial at https://signoz.io/blog/mevn-stack-tutorial/

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- VueClI (version 5.0.8 or higher)
- Docker: Required for containerizing the application

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KatieHarris2397/MEVN-Todo-App.git
   cd MEVN-Todo-App
   ```
2. **Navigate to vue/mevn-todo-app and install dependencies**:
   ```bash
   cd vue/mevn-todo-app
   npm install
   ```
3. **Create a Vue build**:
   ```bash
   npm run build
   ```
4. **Build Docker container for frontend**:
   ```bash
   docker build -t mevn-vue-todo:latest .
   ```
5. **Navigate to express folder**:
   ```bash
   cd ../../express
   ```
6. **Build Docker container for backend**:
   ```bash
   docker build -t mevn-express-todo:latest .
   ```
7. **Navigate to mongoDB folder**:
   ```bash
   cd ../mongoDB
   ```
8. **Build Docker container for mongoDB**:
   ```bash
   docker build -t mongodb-with-admin-access-to-db-created:latest .
   ```
