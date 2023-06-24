<template>
    <div class="row artist-row">
        <div :class="[{'order-2':right}, 'col-sm-9']">
            <ArtistInfo :artist="artist"></ArtistInfo>
        </div>
        <div :class="[{'order-1':right}, 'col-sm-3', 'pt-5', 'pb-5']">
            <img :src="getImgUrl(artist.src)" class="img img-fluid">
        </div>
    </div>
</template>

<style scoped>
img{
    height: auto;
    max-height: 80%;
    max-width: 80%; 
    box-shadow: 3px 3px 5px;
}

.artist{
    display: flex;
    justify-content: center;
    align-items: center;
}


.artist-row{
    
    margin-left: 5%;
    margin-right: 5%;
    padding: 3%;
}

.info{
    display: flex;
    text-align: justify;
    text-justify: inter-word;
    justify-content: center;
    flex-direction: column;
    padding: 7%;
}

h2{
    margin-bottom: 5%;
}

img, span{
    justify-self: center;
}
</style>

<script>
    import ArtistInfo from './ArtistInfo.vue'

    export default {
        name: 'ArtistData',
        props: [
            'artist',
            'right',
        ],
        components: {
            ArtistInfo,
        },
        methods:{ 
            getImgUrl(pic) {
                return require(`@/assets/imgs/${pic}`);
            }
        },
    }
</script>
