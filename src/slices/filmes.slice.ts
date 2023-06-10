import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import FilmesService from '../services/filmes.service';
import { ObterFilmesParams, ObterFilmesResposta } from '../interfaces/ObterFilmes';

const initialState: ObterFilmesResposta = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
};

export const obterFilmes = createAsyncThunk(
  'filmes/obterFilmes',
  async (params: ObterFilmesParams) => await FilmesService.obterFilmes(params)
);

export const filmesSlice = createSlice({
  name: 'filmes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterFilmes.fulfilled, (state, { payload }) => {
      return payload;
    })
  }
});

export const selectionarFilmes = (state: RootState) => state.filmes;

export default filmesSlice.reducer;
