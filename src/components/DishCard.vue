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
  .dish-card {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
  }
  .dish-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
  </style>
  