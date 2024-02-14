# Car-Hub

## Overview

This project is a car catalog web application called Car Hub. It allows users to discover and explore various cars based on different parameters such as manufacturer, year, fuel type, and more.

## Features

- **Car Catalog:** Explore a wide range of cars available in the catalog.
- **Search Functionality:** Search for cars by manufacturer, year, model, and fuel type.
- **Custom Filters:** Filter cars based on fuel type and year of production.
- **Car Details:** View detailed information about each car, including specifications and images.
- **Responsive Design:** The application is responsive and works well on various screen sizes.

## Technologies Used

- **Next.js:** Used for building the frontend of the web application.
- **React:** Used for creating reusable UI components.
- **Tailwind CSS:** Used for styling the components and layouts.
- **Headless UI:** Used for creating accessible and composable React components.
- **RapidAPI:** Used for fetching car data from an external API.

## Project Structure
```
app/
├── layout.tsx
└── page.tsx
components/
├── CarCard.tsx
├── CarDetails.tsx
├── CustomButton.tsx
├── CustomFilter.tsx
├── Footer.tsx
├── Hero.tsx
├── Navbar.tsx
├── SearchBar.tsx
├── SearchManufacturer.tsx
└── ShowMore.tsx
constants/
└── index.tsx
types/
└── index.tsx
utils/
└── index.tsx
```

## File Structure and Information

### app > layout.tsx

- Defines the layout for the application, including the navbar and footer.

### app > page.tsx

- Represents the main page of the application where users can explore cars.

### components > CarCard.tsx

- Displays information about a single car.

### components > CarDetails.tsx

- Provides detailed information about a car in a modal dialog.

### components > CustomButton.tsx

- Custom button component with optional right icon.

### components > CustomFilter.tsx

- Component for filtering cars based on fuel type and year of production.

### components > Footer.tsx

- Footer component displaying company information and links.

### components > Hero.tsx

- Hero section introducing the application with a call-to-action button.

### components > Navbar.tsx

- Navigation bar component displaying the logo and sign-in button.

### components > SearchBar.tsx

- Component for searching cars by manufacturer and model.

### components > SearchManufacturer.tsx

- Component for searching car manufacturers using a dropdown.

### components > ShowMore.tsx

- Component for displaying a button to load more cars.

### constants > index.tsx

- Contains arrays of manufacturers, years of production, and fuel types.

### types > index.tsx

- Contains TypeScript interfaces for various props used in the application.

### utils > index.tsx

- Contains utility functions for fetching cars, generating car image URLs, calculating car rent, and updating search parameters.
- **Exports**: `fetchCars`, `generateCarImageUrl`, `calculateCarRent`, `updateSearchParams` functions.


## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Obtain a RapidAPI key and add it to the appropriate environment file.
5. Run the development server using `npm run dev` or `yarn dev`.
6. Open your browser and go to `http://localhost:3000` to view the application.
