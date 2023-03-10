import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
}

const searchReducer = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        getSearchInput: (state, action) => {
            state.search = action.payload
        },
    },
})

export const { getSearchInput } = searchReducer.actions

export default searchReducer.reducer
