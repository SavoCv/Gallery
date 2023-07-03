<template>
    <div class="container">
        <div aria-label="col-sm-6 offset-sm-3 breadcrumb w-100">
            <ul class="breadcrumb d-flex justify-content-center">
                <li v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                :class="[{'active': !breadcrumb.link}, 'breadcrumb-item']">
                <router-link v-if="breadcrumb.link" :to="breadcrumb.link">
                    {{ breadcrumb.name }}
                </router-link>
                <span v-else >
                    {{ breadcrumb.name }}
                </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
a {
    color: gray;
}
</style>

<script>
import artworks from '@/data/art-data'


export default {
    name: 'BreadCrumb',
    data(){
        return {
            breadcrumbList: []
        }
    },
    // mounted(){ this.updateList() },
    watch: { '$route' () { this.updateList() }},
    methods:{
        updateList() { 
            
            if(localStorage.getItem('language') === "uk"){

                this.breadcrumbList = JSON.parse(JSON.stringify(this.$route.meta.breadcrumb_eng))
                
            }
            else{
                // console.log(this.$route.meta.breadcrumb_srb)
                this.breadcrumbList = JSON.parse(JSON.stringify(this.$route.meta.breadcrumb_srb))
                // console.log(this.breadcrumbList)
            }
            
            let n = this.breadcrumbList.length-1
            if(this.breadcrumbList[n].name === "generic"){
                let x = this.$route.path.split("/").slice(-2)
            
                if(x[0] === "showArtwork"){
                    this.breadcrumbList[n].name = artworks.find(a => a.id == Number(x[1]))[localStorage.getItem('language')].name;
                }
                else{
                    this.breadcrumbList[n].name = x[1];
                }
            }
        }
    }
}
</script>
