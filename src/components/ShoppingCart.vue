<template>
  <div class="shopping-cart-container">
    <div v-if="cart.length">
      <h2>Panier</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          <div class="item-details">
            <span>{{ item.name || 'Nom indisponible' }}</span>
            <span>{{ item.price ? `    ${item.price.toFixed(2)}€   ` : 'Prix indisponible' }}</span>
          </div>
          <button @click="removeFromCart(item)">Retirer</button>
          <hr>
        </li>
      </ul>
      <div id="total">
        <strong>Total: ${{ totalPrice }}</strong>
      </div>
    </div>
    <div v-else>
      <p id="paniervide">Le panier est vide.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2);
    }
  },
  methods: {
    removeFromCart(item) {
      const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.$emit('remove-from-cart', index);
      }
    }
  }
}
</script>

<style scoped>
.shopping-cart-container {
  position: fixed;
  width: 20%;
  min-width: 400px;
  height: auto;
  top: 16px; 
  right: 16px;
  max-width: 500px;
  background-color: #000000;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 2px solid rgb(63, 192, 96);
}

button {
  padding: 8px 16px;
  border: none;
  background-color: rgb(63, 192, 96);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: rgb(50, 150, 80);
}

h2 {
  margin-top: 0;
  color: #FFFFFF;
}

ul {
  list-style-type: none; 
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
}

.item-details {
  flex: 1; 
  display: flex;
  justify-content: space-between; 
  margin-right: 5%;
  font-family: monospace;
  font-weight: bold;
  color: #FFFFFF;
}

hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0;
}

#total {
  color: rgb(63, 192, 96);
  font-family: monospace;
  font-size: x-large;
}

#paniervide {
  font-family: monospace;
  font-weight: bold;
  color: rgb(63, 192, 96);
}
</style>
