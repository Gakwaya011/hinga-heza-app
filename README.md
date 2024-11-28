Hinga Heza - Agricultural Land Listing Platform
Hinga Heza is a platform designed to connect buyers and sellers of agricultural land in Rwanda. It provides users with detailed listings of agricultural land, including essential information like soil quality, water availability, and crop history, along with photos and contact details.

Features
Frontend:
Explore available agricultural land listings with detailed descriptions.
Search by title and filter by location.
Responsive design for mobile, tablet, and desktop users.
Google Sign-In integration for secure user authentication.
Pagination for seamless browsing of multiple listings.
Backend:
RESTful API for serving land listing data to the frontend.
Admin functionalities for creating, updating, and deleting land listings.
MySQL database integration with Sequelize ORM for data management.
JWT authentication for secure admin routes.
Technologies Used
Frontend:
React (with Vite)
Material-UI (MUI)
Tailwind CSS
Framer Motion
Axios
Backend:
Express.js
Sequelize ORM
MySQL
JWT
Deployment:
Frontend: Deployed on Netlify
Backend: Locally hosted or hosted on a preferred platform
Installation and Setup
Prerequisites:
Node.js
MySQL
Backend Setup:
Clone the repository and navigate to the backend folder:

bash
Copy code
git clone https://github.com/Gakwaya011/hinga-heza-app.git
cd backend
Install dependencies:

bash
Copy code
npm install



bash
Copy code
npx sequelize-cli db:migrate
Start the backend server:

bash
Copy code
npm start
Frontend Setup:
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install



Copy code
VITE_API_URL=http://localhost:3000
Start the development server:

bash
Copy code
npm run dev
Deployment
Frontend:
The frontend is deployed on Netlify. Visit the live version at: Live Site Link

Backend:
Ensure the backend is hosted and accessible. Update the VITE_API_URL environment variable in Netlify to point to the live backend URL.

Usage
For Users:
Browse available land listings.
Use search and filter functionalities to refine results.
View land details and contact information.
For Admins:
Access admin functionalities to manage land listings.
Future Enhancements
Enable users to save and favorite listings.
Implement a landowner dashboard for managing their listings.
Add secure payment integration for transactions.