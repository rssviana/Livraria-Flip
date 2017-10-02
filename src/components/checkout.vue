<template>
<div class="wrapper">
  <table class="table">
    <tr class="table__tr">
      <th class="table__th">Produto</th>
      <th class="table__th">Quantidade</th>
      <th class="table__th">Preço</th>
    </tr>
    <tr class="table__tr">
      <td class="table__td">
        <h4 class="table__name">{{ product.name }}</h4>
        <p class="table__codeProduct">codigo do produto ({{ product.id }})</p>
        <img class="table__image"  v-bind:src="product.imageURL" alt="folder">
      </td>
      <td class="table__td">
        <p class="table__text">Máximo de 5 unidades</p>
        <select v-model="quantify">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </td>
      <td class="table__td">
        <p class="table__price">{{ formatPrice(product.price) }}</p>
      </td>
    </tr>  
    <tr>     
      <td class="table__td">
        Valor total: 
        <p class="table__price">{{ formatPrice(totalprice(parseInt(quantify), product.price)) }}</p>
      </td>
      <td></td>
      <td class="table__td"><button class="table__button" v-on:click="buy">Comprar</button></td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'CheckoutComponent',
  props: ['id'],
  data () {
    return {
      quantify: 1
    }
  },
  computed: {
    product: function () {
      const result = this.$store.getters.loadProduct(this.id)
      return result
    }
  },
  methods: {
    formatPrice: function (value) {
      let val = (value / 100).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    buy: function () {
      if (confirm('Deseja Realmente comprar este produto ? ') === true) {
        alert('Compra do produto foi realizada com sucesso!')
      } else {
        alert('Procure outro livro interessante em nosso catalogo.')
      }
    },
    totalprice: function (multiplier, productPrice) {
      return productPrice * multiplier
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
  text-align: center;
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
.table__codeProduct{
  font-size: 0.6em;
  font-weight: 400;
  margin-bottom: 24px;
} 
.table__button {
    border: none;
    color: white;
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4em;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: #fff; 
    color: #4CAF50; 
    border: 2px solid #4CAF50;
    outline: none;
}

.table__button:hover {
    background-color: #4CAF50;
    color: #fff;
}
</style>
