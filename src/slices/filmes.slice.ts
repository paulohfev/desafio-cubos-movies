import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { FilmesService } from '../services/filmes.service';

const initialState: any = {};

export const obterFilmes = createAsyncThunk(
  'filmes/obterFilmes',
  async () => await FilmesService.obterFilmes()
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
