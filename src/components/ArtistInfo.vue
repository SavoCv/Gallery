<template>
    <div>
        <h1 class="mb-3" v-if="lang == 'uk'">{{artist.name}}</h1>
        <h1 class="mb-3" v-if="lang == 'srb'">{{artist.name_srb}}</h1>
        <span v-if="lang == 'uk'">{{ artist.info }}</span>
        <span v-if="lang == 'srb'">{{ artist.info_srb }}</span>
    </div>
</template>

<style scoped>

div{
    text-align: left;
}

</style>

<script>
export default {
    name: 'ArtistInfo',
    data(){
        return {
            'lang': localStorage.getItem('language'),
        }
    },
    props: [
        'artist',
    ],
}
</script>
