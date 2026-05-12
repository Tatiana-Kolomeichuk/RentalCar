'use client';

import { useState } from 'react';
import CarCard from '@/components/CarCard/CarCard';
import Filters from '@/components/Filters/Filters';
import { useCars } from '@/hooks/useCars';
import { CarFilters } from '@/types/car';
import styles from './catalog.module.css';
import Loader from '@/components/Loader/Loader';


export default function CatalogPage() {
  const [filters, setFilters] = useState<CarFilters>({});

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isError } =
    useCars(filters);

  const cars = data?.pages.flatMap(page => page.cars) ?? [];

  if (isError) {
  return (
    <main className={styles.catalog}>
      <div className="container">
        <p className={styles.error}>
          Something went wrong. Please try again.
        </p>
      </div>
    </main>
  );
}

  return (
    <main className={styles.catalog}>
      <div className="container">
        <Filters onSubmit={setFilters} />

        {isLoading && <Loader />}

        {!isLoading && (
          <>
            <ul className={styles.list}>
              {cars.map((car, index) => (
                <CarCard key={car.id} car={car} priority={index < 4} />
              ))}
            </ul>

            {cars.length === 0 && (
              <p className={styles.empty}>No cars found</p>
            )}

            {hasNextPage && (
              <button
                type="button"
                className={styles.loadMore}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? 'Loading...' : 'Load more'}
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
}
