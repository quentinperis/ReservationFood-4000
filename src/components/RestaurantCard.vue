<template>
    <div class="restaurant-card">
      <img :src="restaurant.image" alt="Restaurant Image" class="restaurant-image"/>
      <h3>{{ restaurant.name }}</h3>
      <p>Cuisine: {{ restaurant.cuisine }}</p>
      <router-link :to="{ name: 'RestaurantPage', params: { id: restaurant.id } }">Voir le menu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RestaurantCard',
    props: {
      restaurant: Object
    }
  }
  </script>
  
  <style scoped>
  *{
  background-color: #000000;
  margin: 0;
  padding: 0;
}
  .restaurant-card {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .restaurant-image {
    width: 10%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
  </style>
  