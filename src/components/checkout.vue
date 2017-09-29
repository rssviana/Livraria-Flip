<template>
<div class="wrapper">
  <table class="table">
    <tr class="table__tr">
      <th class="table__th">Produto</th>
      <th class="table__th">Quantidade</th>
      <th class="table__th">Preço</th>
    </tr>
    <tr class="table__tr" v-for="product in products">
      <td class="table__td">
        <h4 class="table__name">{{ product.name }}</h4>
        <img class="table__image"  v-bind:src="product.imageURL" alt="folder">
      </td>
      <td class="table__td">
        <p>{{ chosenProduct.idOfProduct }}</p>
      </td>
      <td class="table__td">
        <p class="table__price">{{ formatPrice(product.price) }} a unidade</p>
      </td>
    </tr>  
    <tr>     
      <td><p>Total acumulado: R$ 10000000000</p></td>
      <td class="table__td"><button class="table__button" v-on:click="buy">Comprar</button></td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'CheckoutComponent',
  props: ['id'],
  computed: {
    products: function () {
      return this.$store.getters.loadProducts
    },
    chosenProduct: function () {
      return this.$store.getters.loadChosenProduct
    }
  },
  methods: {
    buy: function () {
      return alert('Compra de foi realizada com sucesso!')
    },
    formatPrice: function (value) {
      let val = (value / 100).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style lang="css" scoped>
h1, h2, h3, h4, h5, p, a{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} 
.wrapper{
  padding: 100px 5vw 100px;
  min-height: 500px;
}
.table {
  font-family: arial, sans-serif;
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
}
.table__td, .table__th {
  border: 1px solid #dddddd;
  font-family: 'roboto', sans-serif;
  font-size: 1.3em;
  font-weight: bold;
  text-align: left;
  padding: 15px;
}
.table__tr:nth-child(even) {
  background-color: #dddddd;
}
.table__image{
  width: 120px;
}
.table__price::before {
  content: "R$ "
}  
</style>
