import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import FilmesService from '../services/filmes.service';
import { ObterFilmesParams, ObterFilmesResposta } from '../interfaces/ObterFilmes';

const initialState: ObterFilmesResposta = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
};

export const obterFilmesPorPesquisa = createAsyncThunk(
  'filmes/obterFilmesPorPesquisa',
  async (params: ObterFilmesParams) => await FilmesService.obterFilmesPorPesquisa(params)
);

export const obterTodosFilmes = createAsyncThunk(
  'filmes/obterTodosFilmes',
  async (paginaAtual: number) => await FilmesService.obterTodosFilmes(paginaAtual)
);

export const filmesPorPesquisaSlice = createSlice({
  name: 'filmes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterFilmesPorPesquisa.fulfilled, (state, { payload }) => {
      return payload;
    });
  }
});

export const todosFilmesSlice = createSlice({
  name: 'todosFilmes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterTodosFilmes.fulfilled, (state, { payload }) => {
      return payload;
    });
  }
})

export const selectionarFilmes = (state: RootState) => state.filmesPorPesquisa;
export const selecionarTodosFilmes = (state: RootState) => state.todosFilmes;

export default combineReducers({
  filmesPorPesquisa: filmesPorPesquisaSlice.reducer,
  todosFilmes: todosFilmesSlice.reducer,
})
