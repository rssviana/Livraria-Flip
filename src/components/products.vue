<template> 
  <div class="grid">
    <div class="grid__card card" v-for="product in products" :key="product.id">
      <div class="card__left">
        <img class="card__image"  v-bind:src="product.imageURL" alt="folder">
      </div>
      <div class="card__right">
        <hgroup>
          <h3 class="card__head">{{product.name}}</h3>
          <h4 class="card__subhead">{{ product.subtitle }}</h4>
        </hgroup>
        <p class="card__description">{{ product.description }}</p>
        <p class="card__price">{{ formatPrice(product.price) }}</p>
        <div class="card__actions">
          <router-link class="card__link" :to="'/checkout/'+ product.id">Comprar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products: function () {
      return this.$store.getters.loadProducts
    }
  },
  methods: {
    formatPrice: function (value) {
      let val = (value / 100).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style lang="css" scoped>
.grid{
  background: #e8e5e5;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 0 100px;
  height: 100%;

} 

.card {
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  width: 350px;
  margin: 40px 0;
  transition: 0.3s;
}  
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card__left {
  height: 210px;
  width: 160px;
}

.card__right{
  background: #fff;
  border-radius: 0 7px 7px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  padding: 10px;
  text-align: center;
}

.card__image {
  border-radius: 7px 0 0 7px;
  height: 100%;
}
.card__head{
  font-family: 'Roboto', sans-serif;
  font-size: 1.4em;
  margin-bottom: 8px;

}
.card__description {
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  max-height: 40px;
  overflow: hidden;
}
.card__price{
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  color: #7B1FA2;
}
.card__price::before {
  content: 'R$ '
}
.card__link{
  color: #FF9800;
  background: #fff;
  border: 1px solid #FF9800;
  border-radius: 60px;
  font-family: 'roboto', sans-serif;
  font-size: 1em;
  padding: 6px 16px;
  margin-bottom: 10px;
  transition: all .2s;
}
.card__link:hover{
  color: #fff;
  background: #FF9800;
  border: 1px solid #FF9800;
}

@media (max-width: 768px) {
  .grid { padding: 0 5vw; }
  .card { width: 100%;}
  .card__right { width: 100%; }
}

</style>
