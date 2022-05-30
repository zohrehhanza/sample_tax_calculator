import { configureStore } from '@reduxjs/toolkit';
import taxcalReducer from '../features/TaxCalculator/taxCalculatorSlice';

export const store = configureStore({
  reducer: {
    taxcalculator: taxcalReducer
  },
});
