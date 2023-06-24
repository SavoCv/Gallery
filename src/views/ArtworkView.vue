<template>
    <div class="container-fluid art-cont">
      <artwork v-for="artwork_data, index in artworks_data" :artwork_info="artwork_data" :right="index%2" :key="artwork_data.id"></artwork>
    </div>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import Artwork from '@/components/ArtworkData.vue'
import artworks from '../data/art-data.js'

export default {
  name: 'ArtworkView',
  components: {
    Artwork,
  },
  data(){
    let lang = localStorage.getItem("language")
    if(!lang) lang = "srb";
    artworks.map(a => a.srb)

    if(lang === "srb"){
        console.log(artworks.map(a => a.srb))
        return {
            artworks_data: artworks.map(a => a.srb)
        }
    }
    else
        return {
            artworks_data: artworks.map(a => a.eng)
        }
    
  }
}
</script>