# Zonekart

This is a React application with routing and context management. It provides a simple e-commerce-like interface with various pages, such as product listing, category, cart, product detail, search, home, and sign-in pages. It provides various features like product listing, category filtering, brands filtering, cart management, product detail view, and search functionality.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
- [Components](#components)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Demo

![Project Video](./src/assets/Zonekart.mp4)

[Check Zonekart](https://zonekart-react.netlify.app/)

## Structure

![Project Structure Image](./src/assets/app-structure.png)

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd [project-folder]`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start dev`
2. Open your web browser and navigate to `http://localhost:5173`.

## Pages

1. **Home Page (/)**:
   - Displays the landing page of the application.

2. **Sign-In Page (/signin)**:
   - Provides a sign-in form for users to log in to the application.

3. **Product Listing Page (/products)**:
   - Shows a list of available products.

4. **Category Page (/category)**:
   - Displays products based on their categories.

5. **Product Detail Page (/detail/:id)**:
   - Shows the detailed information of a selected product. The ":id" parameter corresponds to the product's unique identifier.

6. **Cart Page (/cart)**:
   - Allows users to view and manage their shopping cart.

7. **Search Page (/search/:query)**:
   - Displays search results based on the specified "query" parameter.

## Components

1. **Navbar**:
   - The Navbar component is a responsive navigation bar that allows users to search for products, navigate to different pages, and log out if they are authenticated. It includes features like search functionality, mobile menu toggle, and dynamic navigation highlighting.

2. **Footer**:
   - Renders the footer at the bottom of the page.

3. **CartItem Component**:
   - The CartItem component represents a single item in the user's shopping cart. It displays the product image, title, price, quantity, and a button to increment or decrement the item's quantity. Additionally, it shows the item's total price and provides a delete button (FaTrash icon) to remove the item from the cart. The deleteHandler, increment, and decrement functions are passed as props to handle these actions.

4. **CategoryCarousel Component**:
   - The CategoryCarousel component displays a carousel of product cards filtered by a specific category. It uses the Slider component from the react-slick library to create the carousel effect. The component receives the products, label, and value props, where products is an array of product data, label is the category label, and value is the category value used for filtering.

5. **ProductCard Component**:
   - The ProductCard component represents an individual product card with its image, title, category, price, rating, and a button to add the product to the cart. If the product has a discount, it displays the discount percentage as well. The component uses the Link component from react-router-dom to link to the product detail page when the product image is clicked. The handleAddToCart function is responsible for adding the product to the cart when the "Add to Cart" button is clicked. If the user is not logged in, it navigates to the sign-in page.

## Features

- Product Listing: View a list of available products.
- Category Filtering: Filter products based on their categories.
- Brand Filtering: Filter products based on their brands.
- Rating Filtering: Filter products based on their ratings.
- Sorting: Sort products based on their prices.
- Cart Management: Add, remove, and update items in the shopping cart.
- Product Detail View: View detailed information about a selected product.
- Search Functionality: Search for products using keywords.
- User Authentication: Allow users to sign in to the application with a test user.


## Technologies Used

- React
- React Router
- React Icons
- React Toastify
- Context API
- CSS (Tailwind CSS)
- React Slick (for the carousel)

Thank you for using Zonekart!