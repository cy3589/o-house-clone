import { combineReducers } from '@reduxjs/toolkit';

import scrollSlice from '@slices/scroll';

const rootReducer = combineReducers({
  scroll: scrollSlice.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
