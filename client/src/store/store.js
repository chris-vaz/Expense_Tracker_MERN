import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './reducer';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer : {
        expense : expenseSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

// Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action. 
// Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.