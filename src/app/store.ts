import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import filmesReducer from '../slices/filmes.slice';
import todosFilmesReducer from '../slices/filmes.slice';
import generosReducer from '../slices/generos.slice';

export const store = configureStore({
  reducer: {
    filmesPorPesquisa: filmesReducer,
    todosFilmes: todosFilmesReducer,
    generos: generosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
