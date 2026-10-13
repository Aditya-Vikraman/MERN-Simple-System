#### Frontend Create-React-App
- npm install
- npm run build = creates build folder => then serve build folder as static assets to express in backend

#### Backend

#### Setup
npm install 

#### Database Connection
1. Setup .env in the root
2. Add MONGO_URI with correct value to .env
3. Setup database by running command "node populate.js"

#### Routers
- laptops.js
- products.js

#### Commands
- npm run dev = runs frontend in development mode @port: 3000 and concurrently runs backend @port: 5000
- npm start = runs backend @port: 5000 (only if frontend build folder is created)