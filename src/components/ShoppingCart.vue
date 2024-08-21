<template>
  <div class="shopping-cart-container">
    <div v-if="cart.length">
      <h2>Panier</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          <span>{{ item.name || 'Nom indisponible' }}</span>
          <span>{{ item.price ? `$${item.price.toFixed(2)}` : 'Prix indisponible' }}</span>
          <button @click="removeFromCart(item)">Retirer</button>
        </li>
      </ul>
      <div>
        <strong>Total: ${{ totalPrice }}</strong>
      </div>
    </div>
    <div v-else>
      <p>Le panier est vide.</p>
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
      // Émettre un événement avec l'index de l'article à retirer
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
  top: 16px; 
  right: 16px;
  max-width: 300px;
  margin-left: auto;
  background-color: #f8f9fa;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
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

h2 {
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 8px;
}
</style>
