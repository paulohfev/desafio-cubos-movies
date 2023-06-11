import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import FilmesService from '../services/filmes.service';
import { ObterFilmesParams, ObterFilmesResposta } from '../interfaces/ObterFilmes';
import { DetalhesFilme } from '../interfaces/DetalhesFilme';

const initialState: ObterFilmesResposta = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
};

const estadoInicialDetalhesFime: DetalhesFilme = {
  budget: 0,
  genres: [],
  id: 0,
  original_language: '',
  overview: '',
  poster_path: '',
  release_date: '',
  revenue: 0,
  runtime: 0,
  status: 'string',
  spoken_languages: [],
  title: 'string',
  vote_average: 0,
};

export const obterFilmesPorPesquisa = createAsyncThunk(
  'filmes/obterFilmesPorPesquisa',
  async (params: ObterFilmesParams) => await FilmesService.obterFilmesPorPesquisa(params)
);

export const obterTodosFilmes = createAsyncThunk(
  'filmes/obterTodosFilmes',
  async (paginaAtual: number) => await FilmesService.obterTodosFilmes(paginaAtual)
);

export const obterDetalhesFilmePorID = createAsyncThunk(
  'filmes/obterDetalhesFilmePorID',
  async (filmeId: string) => await FilmesService.obterDetalhesFilmePorID(filmeId)
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
});

export const detalhesFilmePorIdSlice = createSlice({
  name: 'detalhesFilmePorId',
  initialState: estadoInicialDetalhesFime,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterDetalhesFilmePorID.fulfilled, (state, { payload }) => {
      return payload;
    });
  }
});

export const selectionarFilmes = (state: RootState) => state.filmesPorPesquisa;
export const selecionarTodosFilmes = (state: RootState) => state.todosFilmes;
export const selecionarDetalhesFilmePorId = (state: RootState) => state.detalhesFilmePorId;

export default combineReducers({
  filmesPorPesquisa: filmesPorPesquisaSlice.reducer,
  todosFilmes: todosFilmesSlice.reducer,
  detalhesFilmePorId: detalhesFilmePorIdSlice.reducer,
})
