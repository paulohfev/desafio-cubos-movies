import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { GenerosService } from '../services/generos.service';

const initialState: any = {};

export const obterGeneros = createAsyncThunk(
  'filmes/obterGeneros',
  async () => await GenerosService.obterGeneros()
);

export const generosSlice = createSlice({
  name: 'generos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterGeneros.fulfilled, (state, { payload }) => {
      return payload;
    })
  }
});

export const selecionarGeneros = (state: RootState) => state.generos.genres;

export default generosSlice.reducer;