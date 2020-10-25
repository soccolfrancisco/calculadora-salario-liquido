const formatter = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });

function formatNumber(value) {
  return formatter.format(value);
}

export { formatNumber };
