import { Idade } from "./Idade";

test('ReceberIdadeInteiro_VerificarSeEhNumeroInteiro_RetornaIdadeValida', () => {
  // Arrange - Preparar dados
  const entradaIdade = 19;
  const retornoEsperado = "Idade é válida";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});

test('ReceberIdadeString_VerificarSeNumeroNaoEhInteiro_RetornaIdadeInvalida', () => {
  // Arrange - Preparar dados
  const entradaIdade = "abcd";
  const retornoEsperado = "Idade é inválida";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});

test('ReceberIdadeDecimal_VerificarSeNumeroNaoEhInteiro_RetornaIdadeInvalida', () => {
  // Arrange - Preparar dados
  const entradaIdade = "3.21";
  const retornoEsperado = "Idade é inválida";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});

test('ReceberIdadeInteiro_VerificarSeEhNumeroMenorQueZero_RetornaIdadeInvalida', () => {
  // Arrange - Preparar dados
  const entradaIdade = -5;
  const retornoEsperado = "Idade é menor que 0";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});

test('ReceberIdadeInteiro_VerificarSeEhNumeroMaiorQueCentroETrinta_RetornaIdadeInvalida', () => {
  // Arrange - Preparar dados
  const entradaIdade = 135;
  const retornoEsperado = "Idade é maior que idade máxima";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});

test('ReceberIdadeInteiro_VerificarSeEhAdulto_RetornaIdadeInvalida', () => {
  // Arrange - Preparar dados
  const entradaIdade = 10;
  const retornoEsperado = "Pessoa não é adulta";

  // ACT - o que a ação vai fazer
  const idade = new Idade();
  const resultado = idade.validaIdade(entradaIdade);

  // Assert - o acerto, a comparação
  expect(resultado).toEqual(retornoEsperado);
});