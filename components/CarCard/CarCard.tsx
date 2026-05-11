import Link from 'next/link';
import Image from 'next/image';
import type { Car } from '@/types/car';
import styles from './CarCard.module.css';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const addressParts = car.address.split(', ');
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          width={276}
          height={268}
          className={styles.image}
        />
      </div>

      <div className={styles.titleRow}>
        <h2 className={styles.title}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h2>

        <p className={styles.price}>${car.rentalPrice}</p>
      </div>

      <p className={styles.info}>
        {city} | {country} | {car.rentalCompany} | {car.type} |{' '}
        {car.mileage.toLocaleString('en-US')} km
      </p>

      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
        className={styles.button}
      >
        Read more
      </Link>
    </li>
  );
}