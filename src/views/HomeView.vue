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
        <h1 class='heading' v-if="lang == 'srb'">Poslednje tri ponude</h1>
        <h1 class='heading' v-if="lang == 'uk'">Last 3 offers</h1>
        <table class="table  table-hover table-bordered tbl-com">
          <tbody>
            <tr>
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
                    {{offer.username}}
                </td>

                <td>
                    {{offer.offer}} K $
                </td>

                <td class="text-start">
                    {{offer.comment}}
                </td>

            </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.heading{
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
    let ad = this.makeAD(3);
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
      let offers = JSON.parse(localStorage.getItem("offers"));
      offers = offers.reverse();
      offers.length = Math.min(offers.length, offCnt);
      return offers;
    }
  }
}
</script>
