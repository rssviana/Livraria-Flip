import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedProducts: [
      {
        id: 1,
        name: 'Maze Runner',
        subtitle: 'A prova de fogo',
        description: 'Terceiro livro da saga Maze Runner',
        imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
        author: 'James Dashner',
        price: 2890
      },
      {
        id: 2,
        name: 'Cronicas de Gelo e Fogo',
        subtitle: 'Game of Thrones',
        description: 'Primeiro livro da Saga as cronicas de gelo e fogo',
        imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
        author: 'George R. R. Martin',
        price: 2890
      },
      {
        id: 3,
        name: 'O Despertar do Príncipe',
        subtitle: 'Col. Deuses do Egito',
        description: 'Livro 1',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8895293&qld=90&l=430&a=-1',
        author: 'Colleen Houck',
        price: 3090
      },
      {
        id: 4,
        name: 'O Duelo Dos Imortais',
        subtitle: 'Precursor da Série Deuses do Egito ',
        description: 'Prelude de Deuses do Egito',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9727615&qld=90&l=430&a=-1',
        author: 'Colleen Houck',
        price: 2090
      },
      {
        id: 5,
        name: 'O Coração da Esfinge',
        subtitle: 'Col. Deuses do Egito',
        description: 'Livro 2',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9360739&qld=90&l=430&a=-1',
        author: 'Colleen Houck',
        price: 3090
      },
      {
        id: 6,
        name: 'Maze Runner',
        subtitle: 'O Código da Febre',
        description: 'Saga Maze Runner',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9379317&qld=90&l=430&a=-1',
        author: 'James Dashner',
        price: 3140
      },
      {
        id: 7,
        name: 'Deuses Americanos ',
        subtitle: 'Edição preferida do autor',
        description: 'Obra-prima de Neil Gaiman',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9378911&qld=90&l=430&a=-1',
        author: 'Neil Gaiman',
        price: 3790
      },
      {
        id: 8,
        name: 'Os Filhos de Anansi ',
        subtitle: 'Edição preferida do autor',
        description: ' Uma história fantástica sobre divindades vingativas.',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8868724&qld=90&l=430&a=-1',
        author: 'Neil Gaiman',
        price: 3140
      },
      {
        id: 9,
        name: 'Lugar Nenhum',
        subtitle: 'Edição preferida do autor',
        description: 'Primeiro romance de Neil.',
        imageURL: 'http://voceetaolivro.com.br/wp-content/uploads/2016/06/capa.png',
        author: 'Neil Gaiman',
        price: 2890
      },
      {
        id: 10,
        name: 'A Tormenta de Espadas',
        subtitle: 'As Crônicas de Gelo e Fogo',
        description: 'Livro Três',
        imageURL: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9054623&qld=90&l=430&a=-1',
        author: 'George R. R. Martin',
        price: 3990
      }
    ],
    showchosenProduct: {
      idOfProduct: 0
    }
  },
  mutations: {},
  actions: {},
  getters: {
    // get all products
    loadProducts: function (state) {
      return state.loadedProducts
    },
    loadChosenProduct: function (state) {
      return state.showchosenProduct
    }
  }
})
