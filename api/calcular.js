module.exports = (req, res) => {
  const { operacao, a, b } = req.query;

  // Converter os valores recebidos para números
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  // Verificação de erros nos parâmetros
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos. Passe dois números válidos.' });
  }

  let resultado;

  // Lógica da operação
  switch (operacao) {
    case 'soma':
      resultado = numA + numB;
      break;
    case 'subtracao':
      resultado = numA - numB;
      break;
    case 'multiplicacao':
      resultado = numA * numB;
      break;
    case 'divisao':
      if (numB === 0) {
        return res.status(400).json({ erro: 'Erro: Divisão por zero não permitida.' });
      }
      resultado = numA / numB;
      break;
    default:
      return res.status(400).json({ erro: 'Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".' });
  }

  // Retornar o resultado como JSON
  res.json({ resultado });
};
