# Season fruits - Landing page

This project is a web application developed with **React and Vite**, consuming the **Fruityvice API** to display information about different fruits. Local images for each fruit are included, with a fallback image in case a specific fruit image is unavailable.  

## Live Demo

You can view the live demo of the project at [this link](https://xMarioOP.github.io/season-fruits-landing-page/).

## Technologies Used  

- **React**  
- **Vite**  
- **JavaScript (ES6+)**  
- **SCSS (for styles)**  
- **Fetch API** (for consuming the external API)  

---

## Project Structure  

```plaintext
📦 project-name
 ┣ 📂 public
 ┃ ┗ 📂 images
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ Card.jsx
 ┃ ┃ ┣ GeneralInformation.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ ProductFilters.jsx
 ┃ ┃ ┗ ProductList.jsx
 ┃ ┣ 📂 styles
 ┃ ┃ ┗ variables.scss 
 ┃ ┣ index.scss
 ┃ ┣ App.scss
 ┃ ┣ App.jsx
 ┃ ┣ main.jsx
 ┗ package.json
 ┗ vite.config.js
 ┗ README.md
 ┗ .gitignore
```
## Node.js and npm Versions

- **Node.js**: v23.6.0
- **npm**: v10.9.2

## Installation and Setup

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
    ```
2. **Install dependencies**  
   ```sh
   npm install
    ```
3. **Run the development server**  
   ```sh
   npm run dev
    ```
4. Then open the browser and visit http://localhost:5173.

## API Consumption

The app fetches fruit data from the Fruityvice API:

### 📌 Endpoint used:
```ruby
https://www.fruityvice.com/api/fruit/all
```
### 📌 Sample API response:
```json
[
  {
    "name": "Lychee",
    "id": 67,
    "family": "Sapindaceae",
    "order": "Sapindales",
    "genus": "Litchi",
    "nutritions": {
      "calories": 66,
      "carbohydrates": 16.5,
      "protein": 0.8,
      "fat": 0.4,
      "sugar": 15.2
    }
  }
]
```
## How the Code Works

This React app is designed to display a list of fruits, allowing users to filter and sort them based on different properties such as family, genus, and order. It also provides detailed nutritional information about the selected fruits.

### State Management
The app uses `useState` to manage the following states:
- `fruits`: Stores the list of fruits fetched from the API.
- `currentCards`: Keeps track of how many fruits should be displayed on the screen.
- `isLoading`: Indicates whether the data is still being fetched.
- `filters`: Contains various filters (e.g., search query, category filter, sort order) applied to the fruit list.

### Fetching Data
Using the `useEffect` hook, the app fetches fruit data from the `/api/fruit/all` endpoint when the component mounts. The `fetchData` function is asynchronous and handles the fetching and error handling. After the data is fetched, it is stored in the `fruits` state.

### Filtering and Sorting
The app provides several ways to filter and sort the fruits:
- **Search**: Filters fruits by name based on the user's input.
- **Category Filter**: Filters fruits by specific properties such as `family`, `genus`, and `order`.
- **Sort**: Sorts fruits alphabetically in ascending or descending order.
The filtered fruits are calculated using the `useMemo` hook to optimize performance and prevent unnecessary re-renders.

### Unique Values for Filters
The `getUniqueValues` function extracts unique values for each filter category (e.g., family, genus, order). These unique values are cached using `useMemo` to avoid recalculating them on every render.

### Displaying Fruits
The filtered list of fruits is passed to the `ProductList` component, which renders them as cards using the `Card` component. The `Card` component displays the fruit's image, taxonomic information, and nutritional details (calories, fats, sugars, carbs, proteins). The `ProductList` component also includes a "See More" button to load additional fruits.

### Like Feature
Each fruit card has a "like" button, implemented with the heart icon. When clicked, it toggles the "liked" status of the fruit, and the state is stored in `localStorage` so that the like status persists across page reloads.

### General Information
The `GeneralInformation` component displays summary information about the filtered fruits, including the total number of products and the sum of their nutritional properties.

### Components Breakdown
- `Header`: Displays the title and subtitle of the app.
- `ProductFilters`: Provides the UI for searching and filtering fruits.
- `ProductList`: Renders the filtered fruits in a list, allowing the user to see more items.
- `Card`: Displays individual fruit information, including the like button and nutritional details.
- `GeneralInformation`: Shows general and nutritional information for the currently displayed fruits.

The app is styled using SCSS, and the components are modularized for better readability and maintainability.

## Notes
If the backend blocks requests due to CORS, make sure to configure a proxy in vite.config.js to avoid the error.

📌 Example of proxy configuration in vite.config.js:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://www.fruityvice.com',
    }
  }
})

```
