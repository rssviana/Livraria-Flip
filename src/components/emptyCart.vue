<template>
  <div class="emptyCart">
    <img class="emptyCart__image" src="https://martjackstorage.blob.core.windows.net/in-resources/e866404d-b89f-48e0-b961-37d8d9c194e3/Images/userimages/empty-cart-icon.jpg" alt="empty cart">
    <div class="emptyCart__paragraph">
      <h2 class="emptyCart__title">Hey, Seu carrinho ainda está vazio. Realize uma compra clicando em um dos cards na pagina inicial e seja feliz.</h2> 
      <router-link class="emptyCart__link" to="/products">Voltar para página de produtos</router-link> 
    </div>   
  </div>
</template>

<style scoped>
  .emptyCart {
    display: flex;
    justify-content: center;
    padding: 15vh 5vw;
    text-align: center;
  }
  .emptyCart__image {
    width: 500px;
    margin-right: 30px;
  }
  .emptyCart__title {
    margin-bottom: 50px;
  }
  .emptyCart__link {
    font-size: 1.4em;
  }
  .emptyCart__link:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 890px) {
    .emptyCart {
      flex-direction: column;
    }
    .emptyCart__image {
      margin: 0 auto 70px;
      width: 320px;
    }
  }
</style>
