import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCounterValue } from './counterApi';

const counterState = {
    value: 0
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchAsyncCounter',
    async (amount) => {
        const response = await fetchCounterValue(amount);
        return response.data;
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: counterState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload
        })
    }
})
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// Redux Selector
export const selectCounterValue = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCounterValue(getState());
    if(currentValue % 2 == 1) {
        dispatch(incrementByAmount(amount));
    }
}

// Necesito exportar el Reducer Global
export default counterSlice.reducer; // counterReducer
