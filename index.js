const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())

const pokedex = [
  {
    nome: 'Bulbasaur',
    id: 1,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    descricao:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    tipo: 'Grass'
  },

  {
    nome: 'Ivysaurr',
    id: 2,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    descricao:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    tipo: 'Grass'
  },

  {
    nome: 'Venusaur',
    id: 3,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    descricao:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    tipo: 'Grass'
  }
]

//rotas
app.get('/', function (req, res) {
  res.render('index.ejs', { pokedex })
})

app.post('/add', (req, res) => {
  const pokemon = req.body
  pokemon.id = pokedex.length + 1
  pokedex.push(pokemon)

  res.redirect('/')
})

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})
