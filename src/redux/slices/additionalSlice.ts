import { createSlice } from '@reduxjs/toolkit'

export const additionalSlice = createSlice({
    name: 'AdditionalSlice',
    initialState: {
        loader: false
    },
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload
        },
    },
})

// generate the action creators
export const { setLoader } = additionalSlice.actions

// export reducers
export default additionalSlice.reducer
