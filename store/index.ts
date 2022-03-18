import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from '@store/reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type Appdispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<Appdispatch>();
