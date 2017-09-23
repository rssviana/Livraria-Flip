<template>
  <div class="grid">
    <div class="grid__card card" v-for="product in products" track-by="id">
      <div class="card__left">
        <img class="card__image"  v-bind:src="product.imageURL" alt="folder">
      </div>
      <div class="card__right">
        <h2 class="card__title">{{product.name}}</h2>
        <p class="card__subtitle">{{product.description}}</p>
        <p class="card__price">{{product.price}}</p>
        <div class="card__actions">
          <router-link class="card__link" to="/checkout">Comprar</router-link>
          <a class="card__link" href="http://sobresagas.com/resenha-maze-runner/" target="_blank">Resenha</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Maze Runner',
          imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
          description: 'A Prova de Fogo',
          price: 'R$28,90'
        },
        {
          id: 2,
          name: 'Cronicas de Gelo e Fogo',
          imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
          description: 'Livro da Saga Game of thrones',
          price: 'R$28,90'
        },
        {
          id: 3,
          name: 'Maze Runner',
          imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
          description: 'A Prova de Fogo',
          price: 'R$28,90'
        },
        {
          id: 4,
          name: 'Cronicas de Gelo e Fogo',
          imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
          description: 'Livro da Saga Game of thrones',
          price: 'R$28,90'
        },
        {
          id: 5,
          name: 'Maze Runner',
          imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
          description: 'A Prova de Fogo',
          price: 'R$28,90'
        },
        {
          id: 6,
          name: 'Cronicas de Gelo e Fogo',
          imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
          description: 'Livro da Saga Game of thrones',
          price: 'R$28,90'
        },
        {
          id: 7,
          name: 'Maze Runner',
          imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
          description: 'A Prova de Fogo',
          price: 'R$28,90'
        },
        {
          id: 8,
          name: 'Cronicas de Gelo e Fogo',
          imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
          description: 'Livro da Saga Game of thrones',
          price: 'R$28,90'
        },
        {
          id: 9,
          name: 'Maze Runner',
          imageURL: 'http://culturaproximaleitura.com/wp-content/uploads/2015/01/Resenha-Maze-Runner-Prova-de-Fogo-James-Dashner-Livro-Capa.jpg',
          description: 'A Prova de Fogo',
          price: 'R$28,90'
        },
        {
          id: 10,
          name: 'Cronicas de Gelo e Fogo',
          imageURL: 'http://www.vailendo.com.br/wp-content/uploads/2015/09/capa-guerra-dos-tronos.jpg',
          description: 'Livro da Saga Game of thrones',
          price: 'R$28,90'
        }
      ]
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
  justify-content: space-around;
  width: 210px;
  padding: 0 10px;
  text-align: center;
}

.card__image {
  border-radius: 7px 0 0 7px;
  height: 100%;
}
.card__title{
  font-family: 'Roboto', sans-serif;
  font-size: 1.4em;
}
.card__subtitle{
  font-family: 'Roboto', sans-serif;

}
.card__price{
  font-family: 'Roboto', sans-serif;
}
.card__link{
  color: #FF9800;
  background: #fff;
  border: 1px solid #FF9800;
  border-radius: 60px;
  font-family: 'roboto', sans-serif;
  font-size: 1em;
  padding: 6px 16px;
  -webkit-transition: all .2s; 
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

/*
@media (min-width: 992px) {

}


@media (min-width: 1200px) {

}
*/
</style>
