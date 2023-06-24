<template>
  <div class='page_container'>
    <Navigation></Navigation>
    <router-view/>
    <footer>

      © 2023, Ilija Obradović i Savo Cvijetić, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu.
    </footer>
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
  display: flex;
}

.page_container{
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  width: 100%;
}

footer{
  background-color: var(--dark-green);
  color: var(--darkest-green);
  margin-left: 5%;
  margin-right: 5%;
  min-height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  margin-top: auto;
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
