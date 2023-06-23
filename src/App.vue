<template>
  <div>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<style>
:root {
  --lightest-green: #edf1d6;
  --light-green: #9dc08b;
  --dark-green: #609966;
  --darkest-green: #40513b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
