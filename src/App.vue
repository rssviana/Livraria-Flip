<template>
<div class="container">
  <header class="header">
    <div class="header__logo">
      <img class="header__image" src="./assets/images/logo-flip.png" alt="">
      <hgroup>
        <h1 class="header__title"><router-link to="/products">Livraria Flip</router-link></h1>
        <h5 class="header__subtitle">Onde ler bons livros faz a diferença</h5>
      </hgroup>
      
    </div>   
    <router-link class="header__cart" to="/checkout">carrinho</router-link>
  </header>
  <router-view></router-view>
  <footer class="footer">
    <h2 class="footer__title">Livraria Flip.</h2>
    <p class="footer__text"> Onde ler bons livros faz a diferença</p>
  </footer>
</div> 
</template>

<script>
export default {
  name: 'FlipComponent'
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

.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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
  margin-right: 12px;
}
.header__title{
  margin-bottom: 6px;
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
.header__subtitle {
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
}
.header__item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
.header__cart {
  content: url(./assets/images/logo-cart.png);
  display: block;
  text-align: center;
  max-width: 50px;
}
.footer{
  align-items: center;
  background: #7B1FA2;
  background: -webkit-linear-gradient(top left, #7B1FA2, #FF9800);
  background: -o-linear-gradient(top left, #7B1FA2, #FF9800);
  background: linear-gradient(to bottom right, #7B1FA2, #FF9800);
  display: flex;
  flex-direction: column;
  padding: 50px 5vw;
}
.footer__title, .footer__text {
  color: #fff;
}
.footer__title {
  font-size: 2em;
  margin-bottom: 12px;
}
.footer__text {
  font-size: 1.2em;
}


/* Breakpoints */
@media screen and (max-width: 720px) {
  .header__logo {
    flex-direction: column;
    margin: 0 auto;
    transform: translateX(30px);
    text-align: center;
  }
  .header__image{
    margin-bottom: 25px;
  }
  .header__title {
    margin-bottom: 12px;
  }
  .header__cart {
    align-self: flex-start;
  }
}
</style>
