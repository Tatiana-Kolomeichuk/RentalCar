import CatalogClient from './CatalogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RentalCar | Catalog',
  description:
    'Browse available rental cars and filter them by brand, price, and mileage.',
  openGraph: {
    title: 'RentalCar | Catalog',
    description:
      'Browse available rental cars and filter them by brand, price, and mileage.',
    url: '/catalog',
    siteName: 'RentalCar',
    images: [
      {
        url: '/hero-car.jpg',
        width: 1200,
        height: 630,
        alt: 'RentalCar catalog',
      },
    ],
    type: 'website',
  },
};

export default function CatalogPage() {
  return <CatalogClient/>;
}