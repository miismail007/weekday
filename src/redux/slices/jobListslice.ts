import { createSlice } from '@reduxjs/toolkit'

export const jobListSlice = createSlice({
    name: 'JobList',
    initialState: {
        data: {
            jdList: [],
            totalCount: 0,
            offset: 0
        },
        error: false,
    },
    reducers: {
        setJdList: (state, action) => {
            state.data.jdList = action.payload
        },
        setJdListCount: (state, action) => {
            state.data.totalCount = action.payload
        },
        setOffset: (state, action) => {
            state.data.offset = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

// generate the action creators
export const { setJdList, setJdListCount, setOffset, setError } = jobListSlice.actions

// export reducers
export default jobListSlice.reducer
