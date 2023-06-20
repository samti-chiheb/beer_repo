# **Beer App**

The Beer App is a web application that allows users to browse and save information about different beers. It provides features such as searching for beers, applying filters, and viewing beer details. Users can also save their favorite beers for future reference.

## **Features**

- View a list of beers with details such as name, first brewed date, ABV, and IBU.
- Search for beers by name.
- Apply filters to refine the beer list.
- View detailed information about a specific beer.
- Save favorite beers for later reference.
- Responsive design for optimal viewing on different devices.

## **Installation**

To run the Beer App locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:
    
    ```
    npm install
    ```
    
4. Start the development server by running the following command:
    
    ```
    npm run dev
    ```
    
5. Open your web browser and visit **`http://localhost:5173`** to access the Beer App.

## **Technologies Used**

The Beer App is built using the following technologies:

- Vite: A fast development server and build tooling for modern web applications.
- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Axios: A promise-based HTTP client for making API requests.
- styled-components: A CSS-in-JS library for styling React components.

## **Architecture**

### **tree**
├── App.jsx
├── Container
│   ├── BeerDetails.jsx
│   ├── BeerList.jsx
│   └── NotFound.jsx
├── assets
│   └── react.svg
├── components
│   ├── BeerCard.jsx
│   ├── Filter.jsx
│   ├── ListTable.jsx
│   ├── Pagination.jsx
│   ├── Search.jsx
│   ├── common
│   │   ├── SaveButton.jsx
│   │   └── ShowAlert.jsx
│   └── navbar
│       └── Navbar.jsx
├── hook
│   └── useBeers.jsx
├── index.css
├── main.jsx
└── utils
    └── ApiHandler.js


The Beer App follows a component-based architecture. Here's an overview of the major components and their responsibilities:

- **App**: The root component that sets up routing and renders the main pages of the application.
- **BeerList**: Renders the list of beers and handles search, filtering, and pagination functionality.
- **BeerDetails**: Displays detailed information about a specific beer.
- **Navbar**: Provides navigation links for different sections of the application.
- **ListTable**: Renders the table of beers with their basic details.
- **Pagination**: Handles pagination functionality for navigating through the list of beers.
- **SearchComponent**: Provides the search bar for searching beers by name.
- **FilterComponent**: Allows users to apply filters to refine the beer list.
- **BeerCard**: Displays detailed information about a beer in a card format.
- **SaveButton**: Allows users to save a beer as a favorite.

The application utilizes the **`ApiHandler`** class and the **`useApi`** hook for API handling.

- **ApiHandler**: The **`ApiHandler`** class is responsible for making API requests to retrieve beer data. It uses the Axios library for handling HTTP requests. The class provides methods for fetching a list of beers, retrieving a beer by ID, fetching a random beer, and saving a beer. It also handles error handling and provides a configurable **`per_page`** value for pagination.
- **useApi**: The **`useApi`** hook is a custom hook that simplifies API handling in functional components. It takes care of fetching data from the API and managing loading states, error handling, and caching. The hook accepts parameters such as **`isCaching`** (to enable/disable caching), **`filtreQuery`** (for applying filters to the API request), and **`searchQuery`** (for searching beers by name). It returns an object with data, current page, last page, loading state, and functions to navigate through the pages.

By using the **`ApiHandler`** class and the **`useApi`** hook, the Beer App separates the API logic from the presentation components, promoting code modularity and reusability.

This component-based and API-centric architecture allows for scalability, maintainability, and separation of concerns, making it easier to extend and enhance the application's functionality in the future.

## **Contributing**

Contributions to the Beer App project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## **License**

The Beer App is open source and available under the **[MIT License](https://opensource.org/licenses/MIT)**.