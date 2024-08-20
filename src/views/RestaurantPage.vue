<template>
  <div>
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
          name: 'Pizza Place', 
          cuisine: 'Italian', 
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
          name: 'Sushi Spot', 
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
          name: 'Burger Joint', 
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
          name: 'Mexican Fiesta', 
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
.restaurant-image {
  width: 50%;
  height: auto;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

button {
  margin: 16px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h3 {
  margin-top: 24px;
  margin-bottom: 16px;
}

div {
  margin-bottom: 24px;
}
</style>
