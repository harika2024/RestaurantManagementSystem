import { createSlice } from '@reduxjs/toolkit'

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cart")
    if (localCartData)
        return JSON.parse(localCartData)
    else
        return []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: getLocalCartData(),
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item._id !== action.payload)
        },
    }
})


export const { add, remove } = cartSlice.actions

export default cartSlice.reducer