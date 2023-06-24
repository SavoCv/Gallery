<template>
    <h1 class="mb-3">{{artwork_info.name}}</h1>
    <h2>{{artwork_info.author}}</h2>
    <span>{{ artwork_info.info }}</span>
</template>

<script>
    export default{
        name: 'ArtworkInfo',
        props: [
            'artwork_info',
        ],
    }
       
</script>