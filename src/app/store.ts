import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import filmesReducer from '../slices/filmes.slice';
import todosFilmesReducer from '../slices/filmes.slice';
import generosReducer from '../slices/generos.slice';
import detalhesFilmePorIdReducer from '../slices/filmes.slice';
import videoFilmePorIdReducer from '../slices/videos.slice';

export const store = configureStore({
  reducer: {
    detalhesFilmePorId: detalhesFilmePorIdReducer,
    filmesPorPesquisa: filmesReducer,
    todosFilmes: todosFilmesReducer,
    generos: generosReducer,
    videoFilmePorId: videoFilmePorIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
