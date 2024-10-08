import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'regions',
  initialState: [],
  reducers: {
    setRegions: (state, action) => action.payload,
  },
});

export const { setRegions } = regionSlice.actions;
export default regionSlice.reducer;
