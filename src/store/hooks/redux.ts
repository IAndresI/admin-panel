import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSilector: TypedUseSelectorHook<RootState> = useSelector;