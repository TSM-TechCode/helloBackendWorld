// server.js 
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world. Backend rodando 🚀');
});

app.get('/api', (req, res) => {
  res.json({ mensagem: 'hello world!', funciona: 'backend rodando...' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('servidor rodando na porta ' + PORT);
})
