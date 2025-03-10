# Food Delivery Website

Welcome to the Food Delivery Website repository! This project provides a functional platform for browsing food items, applying filters, and making payments.

## Features

### User Part
- **Food Menu**: Browse a variety of food items with detailed descriptions and prices.
- **Filters**: Filter items by categories such as cuisine, price range, or availability.
- **Cart Management**: Add items to the cart, delete items from the cart, view the current cart, and edit details directly in the cart.
- **Payment Integration**: Secure payment gateway (Stripe) to complete transactions seamlessly.
- **Order History**: View your past orders for reference.

### Admin Part
- **Manage Menu**: Add, update, or delete food items in the menu.
- **Order Overview**: Monitor user orders and update their statuses.
- **Order History**: View the order history of all users.

## Live Links
- **User Frontend**: [Food Delivery User App](https://food-del-frontend-xo6i.onrender.com)
- **Admin Panel**: [Food Delivery Admin Panel](https://food-del-admin-m5aq.onrender.com)

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB 
- **Payment Integration**: Stripe API
- **Authentication**: JWT

## Installation

### Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/food-delivery-app.git
```

### Backend
1. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file with necessary environment variables (e.g., database connection strings, Stripe keys).
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Admin Panel
1. Navigate to the admin folder and install dependencies:
   ```bash
   cd admin
   npm install
   ```
2. Start the admin development server:
   ```bash
   npm run dev
   ```


