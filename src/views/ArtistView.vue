<template>
    <div class="container-fluid">
        <ArtistData v-for='artist, i in artists' :artist="artist" :right="i%2" :key="artist.id"></ArtistData>
    </div>
</template>



<script>
import ArtistData from '@/components/ArtistData.vue'
import artists from '../data/artist-data.js'

export default {
    name: 'ArtistView',
    components: {
        ArtistData,
    },
    data(){
        return {
            artists: artists,
        }
    },
}
</script>
