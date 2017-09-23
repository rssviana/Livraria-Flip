<template>
<div class="world">
  <header class="header">
    <div class="header__logo">
      <img class="header__image" src="./assets/logo-flip.png" alt="">
      <h1 class="header__title">
        <router-link to="/products">{{ title }}</router-link>
      </h1>
    </div>   
    <router-link to="/checkout">carrinho</router-link>
  </header>
  <router-view></router-view>
  <footer class="footer">
    <p class="footer__text">Livraria Flip. Onde ler bons livros faz a diferença</p>
  </footer>
</div> 
</template>

<script>
export default {
  name: 'FlipComponent',

  data () {
    return {
      title: 'Livraria-Flip'
    }
  },

  methods: {}
}
</script>

<style>
html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, p, span, a, li{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}

a:hover{
  text-decoration: none;
}

.world{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>

<style scoped>
.header {
  align-items: center;
  background: #7B1FA2;
  background: -webkit-linear-gradient(top left, #7B1FA2, #FF9800);
  background: -o-linear-gradient(top left, #7B1FA2, #FF9800);
  background: linear-gradient(to bottom right, #7B1FA2, #FF9800);
  display: flex;
  justify-content: space-between;
  padding: 50px 5vw;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__image {
  height: 100px;
  margin-right: 10px;

}
.header__title a {
  color: #fff;
  font-family: 'Roboto';
  font-size: 1.5em;
}
.header__title a:hover {
  color: #fff;
  text-decoration: none;
}
.header__item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer{
  align-items: center;
  background: #7B1FA2;
  background: -webkit-linear-gradient(top left, #7B1FA2, #FF9800);
  background: -o-linear-gradient(top left, #7B1FA2, #FF9800);
  background: linear-gradient(to bottom right, #7B1FA2, #FF9800);
  display: flex;
  justify-content: space-between;
  padding: 50px 5vw;
}
</style>
