<template>
    <div class="row art-row" v-if="right">
        <div :class="info_classes">
            <ArtworkInfo :artwork_info="artwork_info"></ArtworkInfo>
        </div>

        <div :class="img_classes">
            <a href="#"><img class="img img-fluid" :src="getImgUrl(artwork_info.src)" ></a>
        </div>
    </div>
    
    <div class="row art-row" v-else>
        <div :class="img_classes">
            <a href="#"><img :src="getImgUrl(artwork_info.src)"></a>
        </div>

        <div :class="info_classes">
            <ArtworkInfo :artwork_info="artwork_info"></ArtworkInfo>         
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
    padding: 7%;
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

img{
    transition: transform .2s;
}

img:hover{
     transform: scale(1.1);
}
</style>

<script>
    import ArtworkInfo from './ArtworkInfo.vue'
    export default{
        
        name: 'ArtworkData',
        props: [
            'artwork_info',
            'right'
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
                info_classes: "col-sm-9 info",
                img_classes: "col-sm-3 pt-5 pb-5 art fancy-border hover-zoom"
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