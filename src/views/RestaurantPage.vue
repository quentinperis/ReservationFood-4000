<template>
  <div class="restaurantdishes">
    <button @click="goBack">Retour à la liste des restaurants</button>
    <h2>{{ restaurant.name }}</h2>
    <p>Cuisine: {{ restaurant.cuisine }}</p>
    <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-image" />

    <!-- Section Plats -->
    <div>
      <h3>Plats</h3>
      <DishCard 
        v-for="dish in restaurant.dishes" 
        :key="dish.id" 
        :dish="dish" 
        @add-to-cart="addToCart" 
      />
    </div>

    <!-- Section Boissons -->
    <div>
      <h3>Boissons</h3>
      <DishCard 
        v-for="drink in restaurant.drinks" 
        :key="drink.id" 
        :dish="drink" 
        @add-to-cart="addToCart" 
      />
    </div>

    <!-- Section Desserts -->
    <div>
      <h3>Desserts</h3>
      <DishCard 
        v-for="dessert in restaurant.desserts" 
        :key="dessert.id" 
        :dish="dessert" 
        @add-to-cart="addToCart" 
      />
    </div>

    <!-- Unique ShoppingCart Component -->
    <ShoppingCart :cart="cart" @remove-from-cart="handleRemoveFromCart" />
  </div>
</template>

<script>
import DishCard from '@/components/DishCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'RestaurantPage',
  components: {
    DishCard,
    ShoppingCart
  },
  data() {
    return {
      restaurant: null,
      cart: []
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const goBack = () => {
      router.push('/')
    }

    return {
      route,
      router,
      goBack
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(id) {
        this.loadRestaurantData(id)
      }
    }
  },
  methods: {
    loadRestaurantData(id) {
      const allRestaurants = [
        { 
          id: 1, 
          name: 'Fratello', 
          cuisine: 'Italien', 
          image: require('@/assets/img/pizzeria/restaurant-pizza.jpg'), 
          dishes: [
            { id: 1, name: 'Margherita Pizza', price: 12, image: require('@/assets/img/pizzeria/pizza-margherita.jpg') },
            { id: 2, name: 'Pepperoni Pizza', price: 15, image: require('@/assets/img/pizzeria/pizza-pepperoni.jpg') },
            { id: 3, name: 'Vegetarian Pizza', price: 13, image: require('@/assets/img/pizzeria/pizza-vegetarian.jpg') },
            { id: 4, name: 'BBQ Chicken Pizza', price: 16, image: require('@/assets/img/pizzeria/pizza-bbq-chicken.jpg') },
            { id: 5, name: 'Hawaiian Pizza', price: 14, image: require('@/assets/img/pizzeria/pizza-hawaiian.jpg') }
          ],
          drinks: [
            { id: 1, name: 'Coca-Cola', price: 3, image: require('@/assets/img/drinks/coke.jpg') },
            { id: 2, name: 'Pepsi', price: 3, image: require('@/assets/img/drinks/pepsi.jpg') }
          ],
          desserts: [
            { id: 1, name: 'Tiramisu', price: 6, image: require('@/assets/img/desserts/tiramisu.jpg') },
            { id: 2, name: 'Cheesecake', price: 5, image: require('@/assets/img/desserts/cheesecake.jpg') }
          ]
        },
        { 
          id: 2, 
          name: 'Sushi Shooop', 
          cuisine: 'Japanese', 
          image: require('@/assets/img/sushi/restaurant-sushi.jpg'), 
          dishes: [
            { id: 1, name: 'California Roll', price: 10, image: require('@/assets/img/sushi/california-roll.jpg') },
            { id: 2, name: 'Spicy Tuna Roll', price: 12, image: require('@/assets/img/sushi/spicy-tuna-roll.jpg') },
            { id: 3, name: 'Tempura Udon', price: 14, image: require('@/assets/img/sushi/tempura-udon.jpg') },
            { id: 4, name: 'Salmon Sashimi', price: 16, image: require('@/assets/img/sushi/salmon-sashimi.jpg') },
            { id: 5, name: 'Ebi Nigiri', price: 11, image: require('@/assets/img/sushi/ebi-nigiri.jpg') }
          ],
          drinks: [
            { id: 1, name: 'Sake', price: 7, image: require('@/assets/img/drinks/sake.jpg') },
            { id: 2, name: 'Green Tea', price: 4, image: require('@/assets/img/drinks/green-tea.jpg') }
          ],
          desserts: [
            { id: 1, name: 'Mochi', price: 5, image: require('@/assets/img/desserts/mochi.jpg') },
            { id: 2, name: 'Matcha Ice Cream', price: 6, image: require('@/assets/img/desserts/matcha-ice-cream.jpg') }
          ]
        },
        { 
          id: 3, 
          name: 'Burgerland', 
          cuisine: 'American', 
          image: require('@/assets/img/burger/restaurant-burger.jpg'), 
          dishes: [
            { id: 1, name: 'Cheeseburger', price: 10, image: require('@/assets/img/burger/cheeseburger.jpg') },
            { id: 2, name: 'Bacon Burger', price: 12, image: require('@/assets/img/burger/bacon-burger.jpg') },
            { id: 3, name: 'Veggie Burger', price: 11, image: require('@/assets/img/burger/veggie-burger.jpg') },
            { id: 4, name: 'BBQ Burger', price: 13, image: require('@/assets/img/burger/bbq-burger.jpg') },
            { id: 5, name: 'Chicken Burger', price: 12, image: require('@/assets/img/burger/chicken-burger.jpg') }
          ],
          drinks: [
            { id: 1, name: 'Milkshake', price: 5, image: require('@/assets/img/drinks/milkshake.jpg') },
            { id: 2, name: 'Root Beer', price: 3, image: require('@/assets/img/drinks/root-beer.jpg') }
          ],
          desserts: [
            { id: 1, name: 'Brownie', price: 4, image: require('@/assets/img/desserts/brownie.jpg') },
            { id: 2, name: 'Apple Pie', price: 5, image: require('@/assets/img/desserts/apple-pie.jpg') }
          ]
        },
        { 
          id: 4, 
          name: 'El Paraiso del tacos', 
          cuisine: 'Mexican', 
          image: require('@/assets/img/mexican/restaurant-mexican.jpg'), 
          dishes: [
            { id: 1, name: 'Tacos', price: 8, image: require('@/assets/img/mexican/tacos.jpg') },
            { id: 2, name: 'Burritos', price: 9, image: require('@/assets/img/mexican/burritos.jpg') },
            { id: 3, name: 'Quesadillas', price: 10, image: require('@/assets/img/mexican/quesadillas.jpg') },
            { id: 4, name: 'Enchiladas', price: 11, image: require('@/assets/img/mexican/enchiladas.jpg') },
            { id: 5, name: 'Nachos', price: 7, image: require('@/assets/img/mexican/nachos.jpg') }
          ],
          drinks: [
            { id: 1, name: 'Margarita', price: 6, image: require('@/assets/img/drinks/margarita.jpg') },
            { id: 2, name: 'Corona', price: 4, image: require('@/assets/img/drinks/corona.jpg') }
          ],
          desserts: [
            { id: 1, name: 'Churros', price: 5, image: require('@/assets/img/desserts/churros.jpg') },
            { id: 2, name: 'Flan', price: 5, image: require('@/assets/img/desserts/flan.jpg') }
          ]
        }
      ]

      this.restaurant = allRestaurants.find(r => r.id === parseInt(id))
    },
    addToCart(item) {
      this.cart.push(item)
    },
    handleRemoveFromCart(index) {
      // Supprimer l'article du panier à l'index fourni
      this.cart.splice(index, 1);
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
body {
  font-family: 'Roboto', sans-serif;
  background-color: #000000;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.restaurantdishes {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.restaurant-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 24px auto;
}

.restaurant-image:hover {
  transform: scale(1.05);
}

button {
  padding: 12px 24px;
  border: none;
  background-color: rgb(63, 192, 96);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin: 16px 0;
  text-align: center;
  text-transform: uppercase;
}

button:hover {
  background-color: rgb(55, 214, 95);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
  font-family: monospace;
    color: #ffffff;
}

p {
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;
  font-family: monospace;
    color: #ffffff;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 24px;
  text-align: center;
  font-family: monospace;
    color: #ffffff;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
}

.dish-card {
  display: inline-block;
  text-align: center;
  background-color: #000000;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33.333% - 16px);
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-right: 5px
}

.dish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.dish-card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

.dish-card h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  color: #333;
}

.dish-card p {
  font-size: 16px;
  margin-bottom: 16px;
  color: #777;
}

.dish-card button {
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  background-color: #1d72b8;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dish-card button:hover {
  background-color: #155a8a;
}

.shopping-cart {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  position: fixed;
  right: 24px;
  top: 24px;
}

@media (max-width: 768px) {
  .dish-card {
    width: calc(50% - 16px);
  }

  .shopping-cart {
    width: 100%;
    max-width: 100%;
    position: static;
    margin-top: 24px;
  }
}

@media (max-width: 480px) {
  .dish-card {
    width: 100%;
  }
}
</style>
