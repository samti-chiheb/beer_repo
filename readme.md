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

## **Challenges Faced**

Developing the Beer App was a rich learning process with several challenges to overcome.

- **Calculating the last page**: The API I used did not provide an endpoint for the length, so calculating the last page was a challenge. I opted to dynamically set the last page with each API call, which proved to be an effective workaround for this issue.

- **Caching data**: Caching data was also a challenge as I initially did not know how to do it. I initially cached pages and a single product, but later realized I could fetch pages to get the single product. This realization greatly improved the efficiency of caching within the application.

- **Practice with React and styled-components**: This project was an excellent opportunity to practice with React and styled-components. I learned new techniques and enhanced my skills in these technologies while developing a functional and useful application.

These challenges significantly contributed to my growth as a developer and I am looking forward to overcoming more challenges in my future projects.


## **Future Development**

Several enhancements are planned for the Beer App:

- **Navigation Buttons in Beer Details**: I plan to introduce navigation buttons in the Beer Details page. This feature will allow users to navigate to the next or previous beer without having to return to the Beer List.
- **Optimized Filter and Search**: I am working on improving the filtering and search functionality by displaying filter and search tags that can be removed with a single click. This will allow users to easily see and manage their active filters and search queries.
- **Improved Caching**: Currently, the application uses session storage for caching. I plan to optimize this functionality for better performance and user experience.
- **Image Placeholder**: For beers that do not have associated images, I plan to implement an image placeholder to improve the visual consistency of the application.
- **Search Bar in Navbar**: I am planning to add a search bar in the navbar. This feature will allow users to search for a beer by name from anywhere within the application. I also plan to introduce search suggestions to help users find their desired beers more quickly.

These improvements aim to enhance the user experience, increase the application's performance, and provide more efficient beer browsing. Stay tuned for these updates!

## **Contributing**

Contributions to the Beer App project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## **License**

The Beer App is open source and available under the **[MIT License](https://opensource.org/licenses/MIT)**.