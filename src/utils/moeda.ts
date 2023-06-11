class ValorMoeda {
  static format(valor: number) {
    const NumberFormatInstance = new Intl.NumberFormat('en-US', {
      compactDisplay: 'short',
      currency: 'USD',
      style: 'currency',
    });
    const valorFormatado = NumberFormatInstance.format(valor);

    return valorFormatado;
  };
};

export const formatarValorMonetario = (value: number) => {
  return ValorMoeda.format(value);
};
