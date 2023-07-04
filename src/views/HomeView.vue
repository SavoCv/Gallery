<template>
  <div class="home container">
    <class class="row">
      <div class="col-sm">
        <h1 class='heading' v-if="lang == 'srb'">Poslednje tri ponude</h1>
        <h1 class='heading' v-if="lang == 'uk'">Last 3 offers</h1>
        <table class="table  table-hover table-bordered tbl-com">
          <tbody>
            <tr>
                <th>
                    <strong v-if="lang == 'srb'">Delo</strong>
                    <strong v-if="lang == 'uk'">Artwork</strong>
                </th>
                <th>
                    <strong v-if="lang == 'srb'">Korisničko ime</strong>
                    <strong v-if="lang == 'uk'">Username</strong>
                </th>
                <th>
                    <strong v-if="lang == 'srb'">Ponuda</strong>
                    <strong v-if="lang == 'uk'">Offer</strong>
                </th>
                <th style="width: 60%">
                    <strong v-if="lang == 'srb'">Komentar</strong>
                    <strong v-if="lang == 'uk'">Comment</strong>
                </th>
            </tr>

            <template v-for="offer in offers" :key="offer.username">
            <tr>

                <td>
                  <router-link :to="'/artworks/showArtwork/' + offer.for">
                    {{offer.name}}
                  </router-link>
                </td>

                <td>
                    {{offer.username}}
                </td>

                <td>
                    {{offer.offer}} K $
                </td>

                <td class="text-start text-wrap">
                    {{offer.comment}}
                </td>

            </tr>
            </template>
          </tbody>
        </table>
      </div>
    </class>
    <div class="row">
      <div class="col-sm">
        <h1 class='heading' v-if="lang == 'srb'" style="padding-top: 30px;">Nekoliko interesantnih umetnina</h1>
        <h1 class='heading' v-if="lang == 'uk'" style="padding-top: 30px;">Some interesting artwokrs</h1>
        <div class="container-fluid art-cont">
          <artwork-data v-for="artwork_data, index in artworks_data" :artwork_info="artwork_data" :ind="false" :right="index%2" :key="artwork_data.id" ></artwork-data>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.heading{
  font-weight: bold;
}
th, td {
  padding: 15px;
  max-width: fit-content;
  /* display: inline-block; */
}

.text-wrap{
  word-wrap:break-all;
}

table{
  max-width: fit-content;
  display: inline-block;
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
    let ad = this.makeAD(3);
    this.lang = localStorage.getItem('language');
    let lo = this.makeLastOffers(3);

    return {
      artworks_data: ad,
      lang : localStorage.getItem('language'),
      offers : lo,
    }
  },
  methods: {
    makeAD(artCnt)  // artCnt - how much arts will be shown on homepage
    {
      this.lang = localStorage.getItem("language")
      if(!this.lang) this.lang = "srb";
      
      let ad = null;

      ad = artworks.map(a => {
            return  {...a[this.lang], src: a.src, id: a.id, type: a.type, estOld: a.estOld, estPrice: a.estPrice}
      })


      for(let i = ad.length - 1; i >= 0; --i)
      {
        let rndI = Math.floor(Math.random() * (i + 1));
        let tmp = ad[i];
        ad[i] = ad[rndI];
        ad[rndI] = tmp;
      }
      ad.length = Math.min(ad.length, artCnt);
      return ad;
    },
    makeLastOffers(offCnt) // artCnt - how much offers will be shown on homepage
    {
      let oac = JSON.parse(localStorage.getItem("offers"));
      oac = oac.reverse();
      oac.length = Math.min(oac.length, offCnt);
      for(let i = 0; i < oac.length; ++i)
      {
          if(this.lang == 'uk'){
              oac[i]['name'] = artworks.find(a=>{
                  return a.id == oac[i].for;
              }).uk.name;
          }
          if(this.lang == 'srb')
              oac[i]['name'] = artworks.find(a=>{
                  return a.id == oac[i].for;
              }).srb.name;
      }
      return oac;
    }
  }
}
</script>
