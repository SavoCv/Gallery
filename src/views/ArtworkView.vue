<template>
    <div class="container-fluid art-cont">
      <div class="row srch-row d-flex justify-content-center">        
        <div class="col-auto">
          <input type="text" class="form-control " v-model="srch_text">
        </div>
        <div class="col-auto">
          <span v-if="lang==='srb'">
            Pretrazi i sortiraj prema:
          </span>
          <span v-else>
            Search and sort by:
          </span>
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1"  v-model="chk_artist" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btncheck1">
              <span v-if="lang==='uk'">Artist Name</span>
              <span v-else>Nazivu Umetnika</span>
            </label>
            <input type="checkbox" class="btn-check" id="btncheck2" checked v-model="chk_artwork" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btncheck2">
              <span v-if="lang==='uk'">Artwork Name</span>
              <span v-else>Nazivu Umetnine</span>
            </label>
          </div>
        </div>
        <button class="btn btn-secondary col-auto" @click="searchfn()"> Search</button>
        
      </div>
      <artwork-data v-for="artwork_data, index in searched_data" :artwork_info="artwork_data" :ind="false" :right="index%2" :key="artwork_data.id" ></artwork-data>
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
      searched_data: [],
      chk_artwork: false,
      chk_artist: false,
      srch_text: "",
      lang: localStorage.getItem("language"),
    }
  },
  mounted(){

    this.lang = localStorage.getItem("language")
    if(!this.lang) this.lang = "srb";

      
    this.artworks_data = artworks.map(a => {
          return  {...a[this.lang], src: a.src, id: a.id, type: a.type, estOld: a.estOld, estPrice: a.estPrice}
    })  
    

    // alert("joooj")
    let p = this.$route.path.split('/').slice(-1);
    // console.log(p)


    if(!(p[0] === "artworks"))
      this.artworks_data = this.artworks_data.filter(a => {
        return a.type === p[0];
      })
    this.searched_data = this.artworks_data;

  },
  methods:{
    searchfn(){
      if(this.chk_artist && this.chk_artwork){
        this.searched_data = this.artworks_data.filter(a => a.name.toUpperCase().includes(this.srch_text.toUpperCase()) 
                                                      || a.author.toUpperCase().includes(this.srch_text.toUpperCase()))
                                                      
                                                      .sort((a, b) => {
                                                        if(a.name.toUpperCase() === b.name.toUpperCase()){
                                                          return a.author.toUpperCase().localeCompare(b.author.toUpperCase())
                                                        }else{
                                                          return a.name.toUpperCase().localeCompare(b.name.toUpperCase())
                                                        }
                                                      })

      }else if(this.chk_artwork){
        this.searched_data = this.artworks_data.filter(a => a.name.toUpperCase().includes(this.srch_text.toUpperCase()))
                                                      
                                                      .sort((a, b) => {
                                                          return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
                                                      })
      }else if(this.chk_artist){
        this.searched_data = this.artworks_data.filter(a => a.author.toUpperCase().includes(this.srch_text.toUpperCase()))
                                                      
                                                      .sort((a, b) => {
                                                          return a.author.toUpperCase().localeCompare(b.author.toUpperCase());
                                                      })
      }
    }
  }
}
</script>