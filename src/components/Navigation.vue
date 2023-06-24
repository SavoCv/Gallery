<template>
    <nav class="navigation row align-items-center">
        <div class="logo col-lg-1 col-sm-12">
            <img src="@/assets/logo.png" id="logo_img">
        </div>
        <ul class="nav-pills navigation col-lg-5">
        <!-- <ul class="nav-pills navigation col-lg-5 col-sm-12"> -->
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/artworks" class="nav-link">Artworks</router-link></li>
            <li class="nav-item"><router-link to="/artists" class="nav-link">Artists</router-link></li>
            <li class="nav-item"><router-link to="/account" class="nav-link">My account</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About us</router-link></li>
        </ul>
        <div class="title col-lg-4 justify-content-center">
        <!-- <div class="title offset-lg-2 col-lg-2 col-sm-12 justify-content-center"> -->
            <h1><b>Gallery</b></h1>
        </div>
        <div class="nav-item offset-lg-1 col-lg-1 justify-content-end" id="flag_div">
        <!-- <div class="nav-item offset-lg-1 col-lg-1 col-sm-12 justify-content-end" id="flag_div"> -->
            <button @load="set_flag()" @click="change_language()"> <!-- it's not working yet -->
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
}


nav, ul{
    /* height: 80px; */
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
    width: 30%;
    transition: transform .2s;
}

#flag:hover{
     transform: scale(1.5);
}

#flag_div{
    
    /* padding-right: 15px; */
}

button{
    border: none;
    padding: 0;
    background: transparent;
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
    methods:{
        change_language(){
            let t = localStorage.getItem("language")
            if(t === "srb"){
                localStorage.setItem("language", "uk")
                document.getElementById("flag").setAttribute("src", require('@/assets/uk_flag.png'))    
            }
            else{
                localStorage.setItem("language", "srb")
                document.getElementById("flag").setAttribute("src", require('@/assets/serbia_flag.png'))
            }
            this.$router.go(this.$route)
        },
    },
    mounted(){
            if(!localStorage.getItem("language"))
                localStorage.setItem("language", "srb")

            let t = localStorage.getItem("language")
            console.log(t)
            if(t === "srb")
                document.getElementById("flag").setAttribute("src", require('@/assets/serbia_flag.png'))
            else
                document.getElementById("flag").setAttribute("src", require('@/assets/uk_flag.png'))
    }
}

</script>
