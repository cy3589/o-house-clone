import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollHeight: 0,
};

const userSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll(state, action: { payload: number }) {
      const stateCopy = state;
      stateCopy.scrollHeight = action.payload;
    },
    initScroll(state) {
      const stateCopy = state;
      stateCopy.scrollHeight = 0;
    },
  },
});

export default userSlice;
