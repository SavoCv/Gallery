<template>
    <div class="row art-row">
        <div :class="['order-sm-2', {'order-lg-2': right, 'order-lg-1': !right, 'col-lg-3': !ind, 'imgc': !ind},img_classes]">
            <router-link :to="'/artworks/showArtwork/' + artwork_info.id"><img :src="getImgUrl(artwork_info.src)"></router-link>
        </div>

        <div :class="['order-sm-1',{'order-lg-1': right, 'order-lg-2': !right, 'col-lg-9': !ind},info_classes]">
            <ArtworkInfo :artwork_info="artwork_info"></ArtworkInfo>         
        </div>

    </div>
    
</template>

<style scoped>
img{
    height: auto;
    max-height: 80%;
    max-height: 1000px;
    max-width: 80%; 
    box-shadow: 3px 3px 5px;
}

/* .fancy-border {
    border: 5px solid #1b1818;
    background: radial-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.4));
} */

.art{
    display: flex;
    justify-content: center;
    align-items: center;
    
}


.art-row{
    
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
}

h2{
    margin-bottom: 5%;
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color:black; 
    text-decoration:none; 
    cursor:pointer;  
}

img, span{
    justify-self: center;
}

.imgc{
    transition: transform .2s;
}

.imgc:hover{
     transform: scale(1.1);
}
</style>

<script>
    import ArtworkInfo from './ArtworkInfo.vue'
    export default{
        
        name: 'ArtworkData',
        props: [
            'artwork_info',
            'right',
            'ind',
        ],
        components: {
            ArtworkInfo
        },
        methods:{ 
            getImgUrl(pic) {
                return require(`@/assets/imgs/${pic}`)
            },
        },
        data(){
            return {
                info_classes: "col-sm-12  info",
                img_classes: "col-sm-12 pt-5 pb-5 art fancy-border hover-zoom"
            }
        },
        mounted(){
            let elem = this.$el.querySelector("img")
            
            if(elem & elem.height < elem.width){
                elem.style.height = "unset"
                elem.style.maxWidth = "unset"
                elem.style.width = "120%"
                elem.style.maxHeight = "unset"
            }   
        }
    }
       
</script>