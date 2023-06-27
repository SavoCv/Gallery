<template>
    <nav class="navigation row align-items-center">
        <div class="logo col-lg-1 col-sm-12">
            <img src="@/assets/logo.png" id="logo_img">
        </div>
        <ul class="nav-pills navigation col-lg-5">
        <!-- <ul class="nav-pills navigation col-lg-5 col-sm-12"> -->
            <li class="nav-item">
                <router-link to="/" class="nav-link r-link">
                    <span v-if="lang == 'srb'">Početna</span>
                    <span v-if="lang == 'uk'">Home</span>
                </router-link>
            </li>
            <li class="nav-item dropdown" id="joooj">
                <button class="nav-link r-link dropdown-toggle" id="dd-artworks" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span v-if="lang == 'srb'"><strong>Umetnine</strong></span>
                    <span v-if="lang == 'uk'"><strong>Artworks</strong></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark ddm" aria-labelledby="dd-artworks">
                    <li><router-link to="/artworks" class="dropdown-item">
                        <span v-if="lang == 'srb'">Sve</span>
                        <span v-if="lang == 'uk'">All</span>
                    </router-link></li>
                    <li>
                        <router-link to="/artworks/paintings" class="dropdown-item" >
                            <span v-if="lang == 'srb'">Slike</span>
                            <span v-if="lang == 'uk'">Paintings</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/artworks/sculptures" class="dropdown-item">
                            <span v-if="lang == 'srb'">Skulpture</span>
                            <span v-if="lang == 'uk'">Sculptures</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/artists" class="nav-link r-link">
                    <span v-if="lang == 'srb'">Umetnici</span>
                    <span v-if="lang == 'uk'">Artists</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/account" class="nav-link r-link">
                    <span v-if="lang == 'srb'">Moj nalog</span>
                    <span v-if="lang == 'uk'">My account</span>
                </router-link>
            
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link r-link">
                    <span v-if="lang == 'srb'">O nama</span>
                    <span v-if="lang == 'uk'">About us</span>
                </router-link>
            </li>
        </ul>
        <div class="title col-lg-4 justify-content-center">
        <!-- <div class="title offset-lg-2 col-lg-2 col-sm-12 justify-content-center"> -->
            <h1><b>Gallery</b></h1>
        </div>
        <div class="nav-item offset-lg-1 col-lg-1 justify-content-end" id="flag_div">
        <!-- <div class="nav-item offset-lg-1 col-lg-1 col-sm-12 justify-content-end" id="flag_div"> -->
            <button @click="change_language()">
                <img src="@/assets/serbia_flag.png" id="flag">
            </button>
         </div>
    </nav>
</template>


<style scoped>

nav a.router-link-exact-active {
  color: var(--light-green);
  font-weight: bold;
}

nav{
    /* margin-left: 5%;
    margin-right: 5%; */
    flex-wrap: wrap;
    background-color: rgb(0, 0, 0); 
    color: white;
    margin-right: 0;
}


nav, ul{
    /* height: 80px; */
    /* border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px; */
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    list-style-type: none;
}

ul{
    padding-top: 15px;
}

li:hover{
    background-color: var(--lightest-green) !important;
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

a, a:hover, a:active{
    text-decoration: none;
    font-weight: bold;
    color: rgb(255, 255, 255);
}

div, nav{
    display: flex;
    /* padding: 5px; */
}

.logo{
    min-width: 80px;
}

.title{
    text-align: center;
}

#logo_img{
    height: 80px;
    width: 80px;
}

#flag{
    width: 20px;
    transition: transform .2s;
}

#flag:hover{
     transform: scale(1.5);
}

#flag_div{
    padding: 10px;
}

button{
    border: none;
    padding: 0;
    background: transparent;
    margin-right: 20px;
}


.ddm{
    display: none;
}

.r-link{
    margin-right: 20px;
}

@media only screen and (max-width: 500px){
    ul {
        flex-direction: column;
    }
}

</style>

<script>

export default {
    name: 'Navigation',
    data(){
        return {
            'lang': localStorage.getItem('language'),
        }
    },
    methods:{
        change_language(){
            let t = localStorage.getItem("language")
            if(t === "srb"){
                localStorage.setItem("language", "uk")
                this.$el.querySelector("#flag").setAttribute("src", require('@/assets/uk_flag.png'))  
            }
            else{
                localStorage.setItem("language", "srb")
                this.$el.querySelector("#flag").setAttribute("src", require('@/assets/serbia_flag.png'))
            }
            this.$router.go(this.$route)
        }
    },
    mounted(){
            //var $ = require('jquery')

            if(!localStorage.getItem("language"))
                localStorage.setItem("language", "srb")

            let t = localStorage.getItem("language")
            console.log(t)
            if(t === "srb")
                this.$el.querySelector("#flag").setAttribute("src", require('@/assets/serbia_flag.png'))
            else
                this.$el.querySelector("#flag").setAttribute("src", require('@/assets/uk_flag.png'))
    

    }
}

</script>
