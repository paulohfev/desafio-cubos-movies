export const formatarData = (data: string) => {
  const novaData = new Date(data);
  const mes = novaData.getMonth();

  const obterMes = () => mes.toString().length === 1 ? `0${mes}` : `${mes}`;

  const resultado = `${novaData.getDate()}/${obterMes()}/${novaData.getFullYear()}`
  return resultado;
}