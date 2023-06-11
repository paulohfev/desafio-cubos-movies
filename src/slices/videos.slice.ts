import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import VideosService from '../services/videos.service';
import { RootState } from '../app/store';
import { ObterVideosResposta } from '../interfaces/ObterVideos';

const initialState: ObterVideosResposta = {
  id: 0,
  results: [],
};

export const obterVideoFilmePorID = createAsyncThunk(
  'filmes/obterVideoFilmePorID',
  async (filmeId: string) => await VideosService.obterVideoFilmePorID(filmeId)
);

export const videoFilmePorIdSlice = createSlice({
  name: 'videoFilmePorId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterVideoFilmePorID.fulfilled, (state, { payload }) => {
      return payload;
    });
  }
});

export const selecioarVideoFilmePorId = (state: RootState) => state.videoFilmePorId;

export default videoFilmePorIdSlice.reducer;
