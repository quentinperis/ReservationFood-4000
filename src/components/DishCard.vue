<template>
    <div class="dish-card">
      <img :src="dish.image" alt="Dish Image" class="dish-image"/>
      <h4>{{ dish.name }}</h4>
      <p>Prix: ${{ dish.price }}</p>
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DishCard',
    props: {
      dish: Object
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.dish);
      }
    }
  }
  </script>
  
  <style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
}
  .dish-card {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
    background-color: black;
    
  }
  .dish-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }
h4, p {
  font-family: monospace;
    color: #FFFFFF;
}

  button {
  padding: 12px 24px;
  border: none;
  background-color: rgb(63, 192, 96);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  margin: 16px 0;
  text-align: center;
  text-transform: uppercase;
}

button:hover {
  background-color: rgb(55, 214, 95);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
  </style>
  