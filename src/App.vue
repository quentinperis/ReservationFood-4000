<template>
  <div id="app">
    <a href="/"><h1>ReservationFood4000</h1></a>
    <router-view />
    <!-- <ShoppingCart /> -->
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  background-color: black;
  color: white; 
}


#app {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  background-color: black; 
}


h1 {
  font-weight: bold;
  font-size: 40px;
  font-family: monospace;
  color: rgb(63, 192, 96);
  margin-left: 3%;
  margin-bottom: 2%;
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>