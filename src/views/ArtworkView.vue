<template>
    <div class="container-fluid art-cont">
      <artwork v-for="artwork_data, index in artworks_data" :artwork_info="artwork_data" :right="index%2" :key="artwork_data.id" @load="onLoaded"></artwork>
    </div>
    <div @load="onLoaded()"></div>
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

    if(lang === "srb"){  
      ad = artworks.map(a => {
            return  {...a.srb, src: a.src, id: a.id, type: a.type}
      })  
    }
    else{
      ad = artworks.map(a => {
            return  {...a.eng, src: a.src, id: a.id, type: a.type}
      })
    }

    return {
      artworks_data: ad,
    }
  },
  mounted(){
    let p = this.$route.path.split('/').splice(-1);

    if(!(p[0] === "artworks"))
      this.artworks_data = this.artworks_data.filter(a => {
        return a.type === p[0];
      })

  }
}
</script>