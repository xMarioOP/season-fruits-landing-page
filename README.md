# Season fruits - Landing page

This project is a web application developed with **React and Vite**, consuming the **Fruityvice API** to display information about different fruits. Local images for each fruit are included, with a fallback image in case a specific fruit image is unavailable.  

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
