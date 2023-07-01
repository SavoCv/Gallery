<template>
    <div class="container-fluid art-cont">
      <artwork-data v-for="artwork_data, index in artworks_data" :artwork_info="artwork_data" :ind="false" :right="index%2" :key="artwork_data.id" ></artwork-data>
    </div>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import ArtworkData from '@/components/ArtworkData.vue'
import artworks from '../data/art-data.js'

export default {
  name: 'ArtworkView',
  components: {
    ArtworkData,
  },
  data(){
    return {
      artworks_data: [],

    }
  },
  mounted(){

    let lang = localStorage.getItem("language")
    if(!lang) lang = "srb";

      
    this.artworks_data = artworks.map(a => {
          return  {...a[lang], src: a.src, id: a.id, type: a.type, estOld: a.estOld, estPrice: a.estPrice}
    })  
    

    // alert("joooj")
    let p = this.$route.path.split('/').slice(-1);
    // console.log(p)


    if(!(p[0] === "artworks"))
      this.artworks_data = this.artworks_data.filter(a => {
        return a.type === p[0];
      })

  }
}
</script>