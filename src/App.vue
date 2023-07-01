<template>
  <div class='page_container'>
    <Navigation></Navigation>
    <bread-crumb></bread-crumb>
    <router-view :key="$route.path"/>
    <footer v-if="lang == 'srb'">
      © 2023, Ilija Obradović i Savo Cvijetić, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu.
    </footer>
    <footer v-if="lang == 'uk'">
      © 2023, Ilija Obradović i Savo Cvijetić, University of Belgrade, School of Electrical Engineering, Software Enginerring Department.
    </footer>
  </div>
</template>

<style>
:root {
  --lightest-green: #edf1d6;
  --light-green: #9dc08b;
  --dark-green: #609966;
  --darkest-green: #40513b;
  --darker-brown: rgba(0, 0, 0, 0.466);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("assets/imgs/brick_wall.webp");
  background-size: 100% 100%;
  background-attachment: fixed;
  /* background-color: white; */
  text-align: center;
  color: #000000;
  display: flex;
}

.page_container{
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  width: 100%;
}

input[type="text"], input[type="number"], input[type="password"], textarea{

  border: 1px solid #000
}


footer{
  background-color: black;
  color: white;
  /* margin-left: 5%;
  margin-right: 5%; */
  min-height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  /* border-top-right-radius: 15px;
  border-top-left-radius: 15px; */
  margin-top: auto;
}


@import 'bootstrap/dist/css/bootstrap.min.css';
</style>

<script>
import Navigation from '@/components/Navigation.vue'
import BreadCrumb from './components/BreadCrumb.vue'
export default {
  name: 'App',
  data(){
    return {
      'lang': localStorage.getItem('language'),
    }
  },
  components: {
    Navigation,
    BreadCrumb,
  }
}
</script>
