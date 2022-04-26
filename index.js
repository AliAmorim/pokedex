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
    nome: 'Charmander',
    id: 2,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    descricao:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    tipo: 'Fire'
  },

  {
    nome: 'Squirtle',
    id: 3,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    descricao:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    tipo: 'Water'
  },
  {
    nome: 'Pidgey',
    id: 4,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    descricao:
      'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
    tipo: 'Normal'
  },

  {
    nome: 'Rattata',
    id: 5,
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    descricao:
      'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
    tipo: 'Normal'
  },
]
let pokemon = undefined
//rotas
app.get('/', function (req, res) {
  res.render('index.ejs', { pokedex, pokemon })
})

app.post('/cadastro', (req, res) => {
  const pokemon = req.body
  pokemon.id = pokedex.length + 1
  pokedex.push(pokemon)

  res.redirect('/#cards')
})

app.get('/detalhes/:id', (req, res) => {
  const id = +req.params.id

  pokemon = pokedex.find(pokemon => pokemon.id === id)
  res.redirect('/')
})

app.post('/update/:id', (req, res) => {
  const id = +req.params.id - 1
  const newPokemon = req.body
  newPokemon.id = id + 1
  pokedex[id] = newPokemon
  pokemon = undefined

  res.redirect('/#cards')
})

app.get('/delete/:id', (req, res) => {
  const id = +req.params.id - 1

  delete pokedex[id]

  res.redirect('/#cards')
})

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})
