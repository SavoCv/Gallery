<template>
    <div class="container-fluid art-cont">
        <artwork-data :artwork_info="artwork_data" :right="false" :ind="true" :key="artwork_data.id"></artwork-data>
    </div>
</template>

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
            artwork_data: {}
        }
    },
    created(){
        let tmpId = Number(this.$route.params.id)
        let tmp =  artworks.find(aw => aw.id == tmpId);
        if(localStorage.getItem("language") === "uk")
            this.artwork_data = {...tmp.eng, src: tmp.src, id: tmp.id}
        else
            this.artwork_data = {...tmp.srb, src: tmp.src, id: tmp.id}
    }
}
</script>
