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
    display: inline-block;
    width: 30%; 
    height: 500px; 
    border: 1px solid #0d9c0034;
    border-radius: 12px;
    padding: 24px;
    margin: 12px; 
    text-align: center;
    background-color: #000000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    vertical-align: top; 
    position: relative; 
  }
  
  .restaurant-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .restaurant-image {
    width: 80%; 
    height: 250px; 
    object-fit: cover; 
    border-radius: 12px;
    margin-bottom: 16px;
    transition: opacity 0.3s ease;
  }
  
  .restaurant-card:hover .restaurant-image {
    opacity: 0.9;
  }
  
  h3 {
    font-size: 1.5em;
    font-weight: 600;
    font-family: monospace;
    color: #ffffff;
    margin-bottom: 12px;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  
  p {
    font-size: 1em;
    font-family: monospace;
    color: #ffffff;
    margin-bottom: 16px;
  }
  
  .view-details {
    display: inline-block;
    padding: 12px 24px;
    background-color: rgb(63, 192, 96);
    text-decoration: none;
    border-radius: 8px;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.3s ease, transform 0.3s ease;
    position: absolute; 
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .view-details:hover {
    background-color: rgb(40, 223, 85);
    transform: translate(-50%, -4px);
  }
  
  .view-details:active {
    transform: translate(-50%, 2px);
  }
  
  </style>
  