# Foodie

Foodie is a modern food ordering web application built with React, Redux, and Tailwind CSS. It allows users to browse restaurants, view menus, add items to a cart, and place orders—all with a smooth and responsive user interface.

## Features

- 🏠 Home page with restaurant listings
- 🍽️ Detailed restaurant menus
- 🛒 Shopping cart with Redux state management
- 🔍 Lazy-loaded grocery section for performance
- ⚡ Shimmer UI for loading states
- 📱 Responsive design with Tailwind CSS
- 🚦 Online status detection
- 🗺️ Client-side routing with React Router

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Foodie.git
   cd Foodie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
  App.js
  components/
    About.js
    Body.js
    Cart.js
    Contacts.js
    Error.js
    Grocery.js
    Header.js
    ItemList.js
    RestaurantMenu.js
    Shimmer.js
    User.js
  utils/
    appStore.js
    cartSlice.js
    constants.js
    useOnlineStatus.js
    useRestaurantMenu.js
public/
  index.html
tailwind.config.js
package.json
```

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS

## About

Foodie is designed to provide a seamless food ordering experience. Users can explore a variety of restaurants, view detailed menus, and manage their cart with ease. The application leverages modern React features like lazy loading and hooks, and uses Redux for efficient state management.

## License

This project is licensed under the MIT License.

---

**Happy Ordering!**