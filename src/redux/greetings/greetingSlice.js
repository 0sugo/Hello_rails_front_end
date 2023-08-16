import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/random_greeting');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
      });
  },
});

export default greetingSlice.reducer;
