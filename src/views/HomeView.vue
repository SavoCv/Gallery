<template>
  <div class="home container">
    <div class="row">
      <div class="col-sm-8">
        <h1 class='heading' v-if="lang == 'srb'">Nekoliko interesantnih umetnina</h1>
        <h1 class='heading' v-if="lang == 'uk'">Some interesting artwokrs</h1>
        <div class="container-fluid art-cont">
          <artwork-data v-for="artwork_data, index in artworks_data" :artwork_info="artwork_data" :ind="false" :right="index%2" :key="artwork_data.id" ></artwork-data>
        </div>
      </div>
      <div class="col-sm-4">
        Some content
      </div>
    </div>
    
  </div>
</template>

<style scoped>
h1{
  font-weight: bold;
}
</style>

<script>
// @ is an alias to /src
import ArtworkData from '@/components/ArtworkData.vue'
import artworks from '../data/art-data.js'

export default {
  name: 'HomeView',
  components: {
    ArtworkData,
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

    let artCnt = 3; // how much arts will be shown on homepage
    for(let i = ad.length - 1; i >= 0; --i)
    {
      let rndI = Math.floor(Math.random() * (i + 1));
      let tmp = ad[i];
      ad[i] = ad[rndI];
      ad[rndI] = tmp;
    }
    ad.length = Math.min(ad.length, artCnt);

    return {
      artworks_data: ad,
      lang : localStorage.getItem('language'),
    }
  },
}
</script>
