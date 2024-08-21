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
  
  <style scoped>.restaurant-card {
    display: inline-block;
    width: 30%; /* Taille fixe pour chaque carte */
    height: 400px; /* Hauteur fixe pour uniformiser toutes les cartes */
    border: 1px solid #0d9c0034;
    border-radius: 12px;
    padding: 24px;
    margin: 12px; /* Ajouter un espacement uniforme entre les cartes */
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    vertical-align: top; /* Assure l'alignement des cartes */
    position: relative; /* Assure que le bouton reste à l'intérieur de la carte */
  }
  
  .restaurant-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .restaurant-image {
    width: 80%; /* Taille de l'image en proportion de la carte */
    height: 150px; /* Hauteur fixe pour uniformiser les images */
    object-fit: cover; /* Assure que l'image reste proportionnelle tout en remplissant l'espace */
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
    margin-bottom: 12px;
    color: #333333;
    overflow: hidden; /* Empêche le débordement du texte */
    text-overflow: ellipsis;
    white-space: nowrap; /* Assure que le titre ne prenne qu'une ligne */
  }
  
  p {
    font-size: 1em;
    color: #666666;
    margin-bottom: 16px;
  }
  
  .view-details {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
    position: absolute; /* Pour placer le bouton en bas de la carte */
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .view-details:hover {
    background-color: #0056b3;
    transform: translate(-50%, -4px);
  }
  
  .view-details:active {
    transform: translate(-50%, 2px);
  }
  
  </style>
  