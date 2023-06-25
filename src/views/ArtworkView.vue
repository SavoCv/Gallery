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
    
    let ad = null;
    let p = this.$route.path.split('/').splice[-1];
    if(! p === "artworks")
      ad = artworks.filter(a => {
        return a.type === p;
      })

    if(lang === "srb"){  
      ad = artworks.map(a => {
            return  {...a.srb, src: a.src}
      })  
    }
    else{
      ad = artworks.map(a => {
            return  {...a.eng, src: a.src}
      })
    }

    return {
      artworks_data: ad,
    }
    
  }
}
</script>