const express = require('express');
const app = express();
const port = 3000;

app.get('/calcular', (req, res) => {
  const { operacao, a, b } = req.query;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  let resultado;

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
      if (numB === 0) return res.status(400).json({ erro: 'Divisão por zero' });
      resultado = numA / numB;
      break;
    default:
      return res.status(400).json({ erro: 'Operação inválida' });
  }

  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`API de calculadora rodando em http://localhost:${port}`);
});
