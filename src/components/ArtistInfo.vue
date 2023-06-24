<template>
    <div>
        <h1 class="mb-3">{{artist.name}}</h1>
        <span>{{ artist.info }}</span>
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
    props: [
        'artist',
    ],
}
</script>
