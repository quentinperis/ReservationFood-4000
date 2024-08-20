<template>
    <div>
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-card">
        <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-image" />
        <h3>{{ restaurant.name }}</h3>
        <p>Cuisine: {{ restaurant.cuisine }}</p>
        <router-link :to="{ name: 'RestaurantPage', params: { id: restaurant.id } }" class="view-details">
          Voir Détails
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RestaurantList',
    props: {
      restaurants: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .restaurant-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    text-align: center;
  }
  
  .restaurant-image {
    width: 10%;
    height: auto;
    border-radius: 8px;
  }
  
  .view-details {
    display: inline-block;
    margin-top: 8px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .view-details:hover {
    background-color: #0056b3;
  }
  </style>
  