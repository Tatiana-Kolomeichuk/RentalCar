# RentalCar

RentalCar is a web application for browsing and renting cars. The project was
built with Next.js, TypeScript, TanStack Query, and CSS Modules.

## Description

The application allows users to view available rental cars, filter them by
brand, price, and mileage, load more cars with pagination, open a detailed page
for each car, and submit a booking request form.

## Main Features

- Home page with hero section and navigation to the catalog
- Car catalog page
- Backend filtering by:
  - brand
  - rental price
  - mileage from / to
- Pagination with Load More
- Car details page
- Booking request form
- Success and error toast notifications
- Loaders during asynchronous requests
- Error and empty states
- SEO metadata and Open Graph data
- Desktop layout based on the Figma design

## Tech Stack

- Next.js
- TypeScript
- App Router
- TanStack Query
- Axios
- Formik
- React DatePicker
- React Hot Toast
- CSS Modules
- modern-normalize

## Backend API

The project uses the RentalCar API:


https://car-rental-api.goit.global

Available endpoints used in the project:

GET /cars
GET /cars/{id}
GET /brands
POST /cars/{carId}/booking-requests
Installation

Clone the repository:

git clone  https://github.com/Tatiana-Kolomeichuk

Go to the project folder:

cd rental-car

Install dependencies:

npm install

Run the development server:

npm run dev

Open the application in your browser:

http://localhost:3000
Available Scripts
npm run dev

Runs the project in development mode.

npm run build

Builds the project for production.

npm run start

Starts the production build.

npm run lint

Runs code linting.

## Project Structure


src/
├─ app/
│  ├─ catalog/
│  │  ├─ [carId]/
│  │  ├─ CatalogClient.tsx
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ CarCard/
│  ├─ Filters/
│  ├─ Header/
│  ├─ Hero/
│  ├─ Loader/
│  └─ RentalForm/
│
├─ hooks/
├─ lib/
├─ providers/
├─ types/
└─ utils/
Deployment

The project can be deployed on Vercel or Netlify.

Production URL:

rental-car-olive-three.vercel.app <br>
Author

Tetiana Kolomeichuk
````
