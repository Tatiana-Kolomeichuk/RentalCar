'use client';

import { useState } from 'react';

import styles from './Filters.module.css';
import { CarFilters } from '@/types/car';
import { prices } from '@/lib/constants';
import { onlyNumbers } from '@/utils/onlyNumbers';
import { useBrands } from '@/hooks/useBrands';
import { formatMileageInput } from '@/utils/formatMileageInput';

type FiltersProps = {
  onSubmit: (filters: CarFilters) => void;
};

export default function Filters({ onSubmit }: FiltersProps) {
  const {
    data: brands = [],
    isLoading: isBrandsLoading,
    isError: isBrandsError,
  } = useBrands();
  const [brand, setBrand] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    });
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Car brand</span>
        <select
          className={styles.select}
          value={brand}
          disabled={isBrandsLoading || isBrandsError}
          onChange={(event) => setBrand(event.target.value)}
        >
          <option value=''>
            {isBrandsLoading
              ? 'Loading brands...'
              : isBrandsError
                ? 'Brands unavailable'
                : 'Choose a brand'}
          </option>
          {brands.map((brandItem: string) => (
            <option key={brandItem} value={brandItem}>
              {brandItem}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Price / 1 hour</span>

        <div className={styles.inputBox}>
          {rentalPrice && <span className={styles.prefix}>To $</span>}

          <select
            className={rentalPrice ? styles.selectWithPrefix : styles.select}
            value={rentalPrice}
            onChange={(event) => setRentalPrice(event.target.value)}
          >
            <option value=''>Choose a price</option>

            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
      </label>

      <div className={styles.mileage}>
        <label className={styles.mileageInput}>
          <span className={styles.prefix}>From</span>
          <input
            className={styles.inputWithPrefix}
            type='text'
            inputMode='numeric'
            value={formatMileageInput(minMileage)}
            onChange={(event) => setMinMileage(onlyNumbers(event.target.value))}
          />
        </label>

        <label className={styles.mileageInput}>
          <span className={styles.prefix}>To</span>
          <input
            className={styles.inputWithPrefix}
            type='text'
            inputMode='numeric'
            value={formatMileageInput(maxMileage)}
            onChange={(event) => setMaxMileage(onlyNumbers(event.target.value))}
          />
        </label>
      </div>

      <button type='submit' className={styles.button} disabled={isBrandsLoading}>
        Search
      </button>
    </form>
  );
}
