import { configureStore } from '@reduxjs/toolkit';
import additionalSlice from '../slices/additionalSlice';
import filterSlice from '../slices/filterSlice';
import jobListslice from '../slices/jobListslice';

export const store = configureStore({
    reducer: {
        jobList: jobListslice,
        filters: filterSlice,
        additional: additionalSlice
    },
});

