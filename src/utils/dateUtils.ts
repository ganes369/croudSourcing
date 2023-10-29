export class FormatadorDeHoras {
  static formatarHorasPassadas(dataHora: number) {
    const dataAtual = new Date().getTime();
    const diferencaEmMilissegundos = dataAtual - dataHora;
    const diferencaEmHoras = Math.floor(
      diferencaEmMilissegundos / (1000 * 60 * 60)
    );

    if (diferencaEmHoras === 1) {
      return `Há 1 hora atrás`;
    } else {
      return `Há ${diferencaEmHoras} horas atrás`;
    }
  }
}
