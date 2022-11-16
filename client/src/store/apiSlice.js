import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

// fetchBaseQuery is a wrapper around the base function of the fetch in javascript
// that makes a request to the server. We pass this function to the bassQuery

// This is a very small wrapper around fetch that aims to simplify HTTP requests. It is not a full-blown replacement for axios, superagent, or any other more heavyweight library, but it will cover the vast majority of your HTTP request needs.

// fetchBaseQuery is a factory function that generates a data fetching method compatible with RTK Query's baseQuery confiugration option.

// builder parameter is used to build a query

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        // get categories
        getCategories : builder.query({
            // get: 'http://localhost:8080/api/categories'
            query: () => '/api/categories',
            providesTags: ['categories']
        }),

        // get labels
        getLabels : builder.query({
            // get: 'http://localhost:8080/api/labels'
            query : () => '/api/labels',
            providesTags: ['transaction']
        }),

        // add new Transaction
        addTransaction : builder.mutation({
            query : (initialTransaction) => ({
                  // post: 'http://localhost:8080/api/transaction'
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction : builder.mutation({
            query : recordId => ({
                // delete: 'http://localhost:8080/api/transaction'
                url : '/api/transaction',
                method : "DELETE",
                body : recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
})

export default apiSlice;