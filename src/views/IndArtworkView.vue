<template>
    <div class="container-fluid art-cont" v-if="artwork_data">
        <div id="artwork-container" class="container">
            <div class="row">
                <div class="col-sm-2 d-flex">
                    <button @click='previous' class='lr-btn btn btn-secondary' >&lt;</button>
                </div>
                <div class="col-sm-8">
                    <img :src="require(`@/assets/imgs/${for_gallery[currInd].src}`)" v-if="for_gallery[currInd].type == 'p'">
                    <video v-if="for_gallery[currInd].type == 'v'" controls>
                        <source :src="require(`@/assets/videos/${for_gallery[currInd].src}`)" type="video/mp4">
                    </video>
                </div>
                <div class="col-sm d-flex">
                    <button @click="next" class='lr-btn btn btn-secondary'>&gt;</button>
                </div>
            </div>
            
            
            <!-- <img :src="require(`@/assets/imgs/${artwork_data.src}`)">
            <img :src="require(`@/assets/imgs/${p}`)" v-for="p in artwork_data.other_photos" :key="p">
            <video v-for="v in artwork_data.videos" :key='v' controls>
                <source :src="require(`@/assets/videos/${v}`)" type="video/mp4">
            </video> -->
            <artwork-data :artwork_info="artwork_data" :right="false" :ind="true" :key="artwork_data.id"></artwork-data>
        </div>
        <div class="row x">
            <div class="col-sm-12 d-flex justify-content-center mb-5">
                <table class="table">
                    <!-- <tr>
                        <td colspan="2">
                            <h1 v-if="lang == 'srb'">Uloguj se</h1>
                            <h1 v-if="lang == 'uk'">Log in</h1>
                        </td>
                    </tr> -->
                    <tr>
                        <td v-if="lang == 'srb'">Ponuda: </td>
                        <td v-if="lang == 'uk'">Offer: </td>
                        <td class="text-start"><input type="number" class="form-control" id="password-log" v-model="new_offer.offer"></td>
                    </tr>
                    <tr>
                        <td v-if="lang == 'srb'">Komentar: </td>
                        <td v-if="lang == 'uk'">Comment: </td>
                        <td><textarea rows="5" cols="50" v-model="new_offer.comment" class="form-control" ></textarea></td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <button @click="leaveOffer()" v-if="lang == 'srb'" class="btn btn-secondary">Ostavi Ponudu</button>
                            <button @click="leaveOffer()" v-if="lang == 'uk'" class="btn btn-secondary ">Leave Offer</button>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" class="text-danger">
                            {{error}}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-sm-12 mb-3">
                 <strong v-if="lang == 'srb'">Ponude i Komentari</strong>
                <strong v-if="lang == 'uk'">Offers and Comments</strong>
            </div>
            <div class="col-sm-12">
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

                        <template v-for="offer in tmp_offers" :key="offer.username">
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

                            <td v-if="offer.username == username">
                                <button class="btn btn-secondary" @click="removeOffer(offer)" v-if="lang == 'uk'">Remove</button>
                                <button class="btn btn-secondary" @click="removeOffer(offer)" v-if="lang == 'srb'">Ukloni</button>
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
.x {
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 3%;
}
th, td {
  padding: 15px;
}
.tbl-input{
    padding: 20px;
}

/* #artwork-container{
    max-height: 1200px;
} */

img{
    width: 80%;
    padding: 20px;
}

video{
    width: 80%;
    padding: 20px;  
}

.lr-btn{
    margin-top: auto; 
    margin-bottom: auto;
}

</style>
<script>
import artworks from '@/data/art-data'
import ArtworkData from '@/components/ArtworkData.vue'
export default {
    name: "IndArtworkView",
    components: {
        ArtworkData
    },
    data(){
        return {
            artwork_data: null,
            lang: localStorage.getItem("language"),
            new_offer: {
                username: "",
                comment: "",
                for: -1,
                offer: 0,
            },
            tmp_offers: [],
            offers: [],
            error: "",
            lang: "",
            username: localStorage.getItem('username'),
            currInd: 0,
        }
    },
    mounted(){
        this.lang = localStorage.getItem("language")
        let tmpId = Number(this.$route.params.id)
        let tmp =  artworks.find(aw => aw.id == tmpId);
        this.new_offer.for = tmpId;

        this.offers = JSON.parse(localStorage.getItem("offers") || "[]")
        this.tmp_offers = this.offers.filter(o => o.for == tmpId)
        this.artwork_data = {...tmp[localStorage.getItem("language")], src: tmp.src, id: tmp.id, estPrice: tmp.estPrice, estOld: tmp.estOld, other_photos: tmp.other_photos, videos: tmp.videos}
        this.makeForGallery();
    },
    watch: {
      currentPV() {
        this.currPV = this.for_gallery[this.currInd];
      }
    },
    methods: {
        leaveOffer(){
            let uname = localStorage.getItem("username");
            if(!uname){
                this.error="Morate biti ulogovani da biste ostavili ponudu!";
                return
            }
            else{
                this.new_offer.username = uname;
                this.tmp_offers.push({...this.new_offer})
                this.offers.push({...this.new_offer})
                localStorage.setItem("offers", JSON.stringify(this.offers))
            }
        },
        removeOffer(offer){
            let oac = JSON.parse(localStorage.getItem("offers"));
            let flag = false;
            oac = oac.filter(a=> {
                if(!flag && JSON.stringify(a) === JSON.stringify(offer))
                {
                    flag = true;
                    return false;
                }
                else
                    return true;
            });
            flag=false;
            this.tmp_offers = this.tmp_offers.filter(a=> {
                if(!flag && JSON.stringify(a) === JSON.stringify(offer))
                {
                    flag = true;
                    return false;
                }
                else
                    return true;
            });
            localStorage.setItem("offers", JSON.stringify(oac));
            // location.reload();
        },
        makeForGallery(){
            let ret = [];
            ret.push({
                src: this.artwork_data.src,
                type: 'p',
            })
            for(let i = 0; i < this.artwork_data.other_photos.length; ++i)
            {
                ret.push({
                    src: this.artwork_data.other_photos[i],
                    type: 'p',
                });
            }
            for(let i = 0; i < this.artwork_data.videos.length; ++i)
            {
                ret.push({
                    src: this.artwork_data.videos[i],
                    type: 'v',
                })
            }
            this.for_gallery = ret;
            this.currInd = 0;
            this.currPV = ret[0];
        },
        next(){
            this.currInd = (this.currInd + 1)%this.for_gallery.length;
            this.currPV = this.for_gallery[this.currInd];
        },
        previous(){
            this.currInd = (this.currInd - 1 + this.for_gallery.length)%this.for_gallery.length;
            this.currPV = this.for_gallery[this.currInd];
        },
    }
}
</script>
