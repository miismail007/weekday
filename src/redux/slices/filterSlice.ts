import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'Filters',
    initialState: {
        roles: [
            {value: "Frontend", isSelected: false},
            {value: "Backend", isSelected: false},
            {value: "FullStack", isSelected: false},
            {value: "IOS", isSelected: false},
            {value: "Android", isSelected: false},
            {value: "Flutter", isSelected: false},
            {value: "ReactNative", isSelected: false},
        ],
        remote: [
            {value: "Remote", isSelected: false},
            {value: "Hybrid", isSelected: false},
            {value: "In-Office", isSelected: false},
        ],
        companyName: "",
    },
    reducers: {
        setRoles: (state, action) => {
            state.roles = action.payload
        },
        setRemote: (state, action) => {
            state.remote = action.payload
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload
        },
    },
})

// generate the action creators
export const { setRoles, setRemote, setCompanyName } = filterSlice.actions

// export reducers
export default filterSlice.reducer
