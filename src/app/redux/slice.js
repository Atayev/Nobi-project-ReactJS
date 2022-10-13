import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:''
}
export const slice = createSlice({
    name: 'nobi',
    initialState,
    reducers: {
        filteredData: (state = initialState, action) => {
            const filterItem = action.payload.data
            state.data=filterItem
        }
    }
})
export const {filteredData} = slice.actions
export default slice.reducer