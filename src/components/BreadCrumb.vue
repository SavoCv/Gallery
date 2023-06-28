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

<script>
export default {
    name: 'BreadCrumb',
    data(){
        return {
            breadcrumbList: []
        }
    },
    mounted(){ this.updateList() },
    watch: { '$route' () { this.updateList() }},
    methods:{
        updateList() { 
            
            if(localStorage.getItem('language') === "uk"){

                this.breadcrumbList =this.$route.meta.breadcrumb_eng
                
            }
            else{
                console.log(this.$route.meta.breadcrumb_srb)
                this.breadcrumbList = JSON.parse(JSON.stringify(this.$route.meta.breadcrumb_srb))
            
            }
            
            let n = this.breadcrumbList.length-1
            if(this.breadcrumbList[n].name === "generic")
                this.breadcrumbList[n].name = this.$route.path.split("/").slice(-1)[0]
        }
    }
}
</script>
