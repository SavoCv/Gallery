<template>
    <h1 class="mb-3">{{artwork_info.name}}</h1>
    <h2>{{artwork_info.author}}</h2>
    <span>{{ artwork_info.info }}</span>
    <div class = "mb-3 mt-3">
        <strong v-if="lang === 'uk'">Estimated age: </strong>
        <strong v-else>Procenjena starots: </strong>
        {{artwork_info.estOld.year}} 
        <span v-if="lang === 'uk'">years</span>
        <span v-else>godina</span>
        {{artwork_info.estOld.months}}
        <span v-if="lang === 'uk'">months</span>
        <span v-else>meseci</span>
        {{artwork_info.estOld.days}}
        <span v-if="lang === 'uk'">days</span>
        <span v-else>dana</span>
    </div>
    <div> 
        <strong v-if="lang === 'uk'">Estimated value: </strong>
        <strong v-else>Procenjena vrednost: </strong>
        {{artwork_info.estPrice}} K $
    </div>
</template>

<script>
    export default{
        name: 'ArtworkInfo',
        props: [
            'artwork_info',
        ],
        data(){
            return {
                lang: localStorage.getItem("language")
            }
        }
    }
       
</script>