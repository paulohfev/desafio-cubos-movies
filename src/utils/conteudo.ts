export const formatarData = (data: string) => {
  const novaData = new Date(data);
  const mes = novaData.getMonth();

  const obterMes = () => mes.toString().length === 1 ? `0${mes}` : `${mes}`;

  const resultado = `${novaData.getDate()}/${obterMes()}/${novaData.getFullYear()}`
  return resultado;
}

export const converterTempo = (tempoEmMinutos: number) => {
  const horas = (tempoEmMinutos / 60);
  const rhoras = Math.floor(horas);
  const minutos = (horas - rhoras) * 60;
  const rminutos = Math.round(minutos);
  return `${rhoras}h ${rminutos}min`;
}

export const obterURLPosterFilme = (caminho: string) => {
  return `https://image.tmdb.org/t/p/original/${caminho}`;
}