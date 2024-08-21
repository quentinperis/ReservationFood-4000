<template>
  <div>
    <h2>Restaurants</h2>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un restaurant..."
      class="search-bar"
    />
    
    <RestaurantList :restaurants="filteredRestaurants" />
        <!-- <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" /> -->
  </div>
</template>

<script>
import RestaurantList from '@/components/RestaurantList.vue'
// import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  name: 'HomePage',
  components: {
    RestaurantList,
    // ShoppingCart
  },
  data() {
    return {
      searchQuery: '',
      restaurants: [
        { id: 1, name: 'Pizza Place', cuisine: 'Italian', image: require('@/assets/img/pizzeria/restaurant-pizza.jpg'), dishes: [
          { id: 1, name: 'Margherita Pizza', price: 12, image: require('@/assets/img/pizzeria/pizza-margherita.jpg') },
          { id: 2, name: 'Pepperoni Pizza', price: 15, image: require('@/assets/img/pizzeria/pizza-pepperoni.jpg') },
          { id: 3, name: 'Vegetarian Pizza', price: 13, image: require('@/assets/img/pizzeria/pizza-vegetarian.jpg') },
          { id: 4, name: 'BBQ Chicken Pizza', price: 16, image: require('@/assets/img/pizzeria/pizza-bbq-chicken.jpg') },
          { id: 5, name: 'Hawaiian Pizza', price: 14, image: require('@/assets/img/pizzeria/pizza-hawaiian.jpg') }
        ], drinks: [
          { id: 1, name: 'Coca-Cola', price: 3, image: require('@/assets/img/drinks/coke.jpg') },
          { id: 2, name: 'Pepsi', price: 3, image: require('@/assets/img/drinks/pepsi.jpg') }
        ], desserts: [
          { id: 1, name: 'Tiramisu', price: 6, image: require('@/assets/img/desserts/tiramisu.jpg') },
          { id: 2, name: 'Cheesecake', price: 5, image: require('@/assets/img/desserts/cheesecake.jpg') }
        ]},
        { id: 2, name: 'Sushi Spot', cuisine: 'Japanese', image: require('@/assets/img/sushi/restaurant-sushi.jpg'), dishes: [
          { id: 1, name: 'California Roll', price: 10, image: require('@/assets/img/sushi/california-roll.jpg') },
          { id: 2, name: 'Spicy Tuna Roll', price: 12, image: require('@/assets/img/sushi/spicy-tuna-roll.jpg') },
          { id: 3, name: 'Tempura Udon', price: 14, image: require('@/assets/img/sushi/tempura-udon.jpg') },
          { id: 4, name: 'Salmon Sashimi', price: 16, image: require('@/assets/img/sushi/salmon-sashimi.jpg') },
          { id: 5, name: 'Ebi Nigiri', price: 11, image: require('@/assets/img/sushi/ebi-nigiri.jpg') }
        ], drinks: [
          { id: 1, name: 'Sake', price: 7, image: require('@/assets/img/drinks/sake.jpg') },
          { id: 2, name: 'Green Tea', price: 4, image: require('@/assets/img/drinks/green-tea.jpg') }
        ], desserts: [
          { id: 1, name: 'Mochi', price: 5, image: require('@/assets/img/desserts/mochi.jpg') },
          { id: 2, name: 'Matcha Ice Cream', price: 6, image: require('@/assets/img/desserts/matcha-ice-cream.jpg') }
        ]},
        { id: 3, name: 'Burger Joint', cuisine: 'American', image: require('@/assets/img/burger/restaurant-burger.jpg'), dishes: [
          { id: 1, name: 'Cheeseburger', price: 10, image: require('@/assets/img/burger/cheeseburger.jpg') },
          { id: 2, name: 'Bacon Burger', price: 12, image: require('@/assets/img/burger/bacon-burger.jpg') },
          { id: 3, name: 'Veggie Burger', price: 11, image: require('@/assets/img/burger/veggie-burger.jpg') },
          { id: 4, name: 'BBQ Burger', price: 13, image: require('@/assets/img/burger/bbq-burger.jpg') },
          { id: 5, name: 'Chicken Burger', price: 12, image: require('@/assets/img/burger/chicken-burger.jpg') }
        ], drinks: [
          { id: 1, name: 'Milkshake', price: 5, image: require('@/assets/img/drinks/milkshake.jpg') },
          { id: 2, name: 'Root Beer', price: 3, image: require('@/assets/img/drinks/root-beer.jpg') }
        ], desserts: [
          { id: 1, name: 'Brownie', price: 4, image: require('@/assets/img/desserts/brownie.jpg') },
          { id: 2, name: 'Apple Pie', price: 5, image: require('@/assets/img/desserts/apple-pie.jpg') }
        ]},
        { id: 4, name: 'Mexican Fiesta', cuisine: 'Mexican', image: require('@/assets/img/mexican/restaurant-mexican.jpg'), dishes: [
          { id: 1, name: 'Tacos', price: 8, image: require('@/assets/img/mexican/tacos.jpg') },
          { id: 2, name: 'Burritos', price: 9, image: require('@/assets/img/mexican/burritos.jpg') },
          { id: 3, name: 'Quesadillas', price: 10, image: require('@/assets/img/mexican/quesadillas.jpg') },
          { id: 4, name: 'Enchiladas', price: 11, image: require('@/assets/img/mexican/enchiladas.jpg') },
          { id: 5, name: 'Nachos', price: 7, image: require('@/assets/img/mexican/nachos.jpg') }
        ], drinks: [
          { id: 1, name: 'Margarita', price: 6, image: require('@/assets/img/drinks/margarita.jpg') },
          { id: 2, name: 'Corona', price: 4, image: require('@/assets/img/drinks/corona.jpg') }
        ], desserts: [
          { id: 1, name: 'Churros', price: 5, image: require('@/assets/img/desserts/churros.jpg') },
          { id: 2, name: 'Flan', price: 5, image: require('@/assets/img/desserts/flan.jpg') }
        ]}
      ]
    }
  },
  computed: {
    filteredRestaurants() {
      const query = this.searchQuery.toLowerCase()
      return this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query)
      )
    }
  }
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}
</style>
