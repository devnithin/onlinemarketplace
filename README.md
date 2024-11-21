# Online Marketplace (E-commerce Platform)  
A full-stack e-commerce web application where users can browse products, search, filter by price, add items to the cart, and manage their shopping seamlessly. The application features user authentication, advanced search, price filtering, and pagination.  

# Features  
# 🛍️ Marketplace Features  
Search Products: Search bar to find products by name.  
Price Filtering: Use a slider to filter products within a selected price range.  
Pagination: Navigate between pages of products efficiently.  
Add to Cart: Add products to your shopping cart and view the cart items.  
# 🔐 Authentication  
Sign Up: Secure user registration with hashed passwords.  
Log In: JWT-based user login with session management.  
Protected Routes: Only authenticated users can access specific features like the cart.  
# 💻 Tech Stack  
Frontend: React, Tailwind CSS  
Backend: Node.js, Express  
Database: MongoDB (via Mongoose)  
Authentication: JWT (JSON Web Tokens)  
# Demo  
![Marketplace Screenshot](https://i.imgur.com/i80jRKO.png)


Installation and Setup  
Follow the steps below to set up and run the project on your local machine:  

1. Clone the repository  
bash  
git clone https://github.com/yourusername/online-marketplace.git  
cd online-marketplace  
2. Install Dependencies  
Backend  
Navigate to the /server folder:  

cd server  
npm install  
Frontend  
Navigate to the /client folder:   

cd ../client  
npm install  
3. Set Environment Variables  
Create a .env file in the /server folder and configure the following variables:  

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret_key  
4. Start the Application  
Backend  
Navigate to the /server folder and start the backend server:  
npm run start  
Frontend  
Navigate to the /client folder and start the React application:  

npm start  
The application will run at http://localhost:5173 by default.  


# Contributions are welcome! Feel free to open an issue or submit a pull request for any bug fixes or new features.

