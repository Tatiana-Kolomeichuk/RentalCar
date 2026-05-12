import Image from 'next/image';
import { getCarById } from '@/lib/api';
import styles from './carDetails.module.css';
import RentalForm from '@/components/RentalForm/RentalForm';

type CarDetailsProps = {
  params: Promise<{
    carId: string;
  }>;
};

export default async function CarDetailsPage({ params }: CarDetailsProps) {
  const { carId } = await params;

  const car = await getCarById(carId);

  const addressParts = car.address.split(', ');
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  return (
 <main className={styles.details}>
  <div className="container">
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.imageWrapper}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="640px"
            className={styles.image}
            priority
          />
            </div>
          <RentalForm carId={car.id} />
      </div>
       
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>
            {car.brand} {car.model}, {car.year}
          </h1>

          <span className={styles.carId}>Id: {car.id.slice(0, 4)}</span>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg className={styles.icon}>
              <use width="12px" height="15px" href="/sprite.svg#icon-location" />
            </svg>
            {city}, {country}
          </span>

          <span>Mileage: {car.mileage.toLocaleString('en-US')} km</span>
        </div>

        <p className={styles.price}>${car.rentalPrice}</p>

        <p className={styles.description}>{car.description}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rental Conditions:</h2>

          <ul className={styles.list}>
            {car.rentalConditions.map((condition: string) => (
              <li key={condition} className={styles.item}>
                <svg className={styles.icon}>
                  <use width="16px" height="16px" href="/sprite.svg#icon-check-circle" />
                </svg>
                {condition}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Car Specifications:</h2>

          <ul className={styles.list}>
            <li className={styles.item}>
              <svg className={styles.icon}>
                <use width="16px" height="16px" href="/sprite.svg#icon-calendar" />
              </svg>
              Year: {car.year}
            </li>

            <li className={styles.item}>
              <svg className={styles.icon}>
                <use width="16px" height="16px" href="/sprite.svg#icon-car" />
              </svg>
              Type: {car.type}
            </li>

            <li className={styles.item}>
              <svg className={styles.icon}>
                <use width="16px" height="16px" href="/sprite.svg#icon-fuel" />
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>

            <li className={styles.item}>
              <svg className={styles.icon}>
                <use width="16px" height="16px" href="/sprite.svg#icon-gear" />
              </svg>
              Engine Size: {car.engineSize}
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Accessories and functionalities:
          </h2>

          <ul className={styles.list}>
            {[...car.accessories, ...car.functionalities].map(
              (item: string) => (
                <li key={item} className={styles.item}>
                  <svg className={styles.icon}>
                    <use width="16px" height="16px" href="/sprite.svg#icon-check-circle" />
                  </svg>
                  {item}
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  </div>
</main>
  );
}