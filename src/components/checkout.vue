<template>
    <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Buy</th>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  <tr>
    <td>Maze Runner: A Prova de fogo</td>
    <td>R$ 28,90</td>
    <td><button v-on:click="buy">Comprar</button></td>
  </tr>
  
</table>
</template>

<script>
export default {
  name: 'CheckoutComponent',
  methods: {
    buy: function () {
      alert('Compra Realizada com Sucesso!')
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="css" scoped>
h1, h2, h3, h4, h5, p, a{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} 
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}  
</style>
