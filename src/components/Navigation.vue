<template>
    <nav class="navigation">
        <div class="logo col-sm-1">
            <img src="@/assets/logo.png" id="logo_img">
        </div>
        <ul class="nav-pills navigation col-sm-5">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/artworks" class="nav-link">Artworks</router-link></li>
            <li class="nav-item"><router-link to="/artists" class="nav-link">Artists</router-link></li>
            <li class="nav-item"><router-link to="/account" class="nav-link">My account</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About us</router-link></li>
        </ul>
        <div class="title offset-2 col-sm-2">
            <h1><b>Gallery</b></h1>
        </div>
         <div class="nav-item offset-1 col-sm-1" id="flag">
            <button @click="change_language()"> <!-- it's not working yet -->
                <img src="@/assets/serbia_flag.png" id="flag">
            </button>
         </div>
    </nav>
</template>


<style scoped>
nav{
    margin-left: 5%;
    margin-right: 5%;
}

nav, ul{
    height: 80px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    list-style-type: none;
    background-color: var(--dark-green);
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
    color: var(--darkest-green);
}

div{
    display: flex;
}

#logo_img{
    height: 80px;
    width: 80px;
}

#flag{
    width: 30px;
}

button{
    border: none;
    padding: 0;
    background: transparent;
}

</style>

<script>

export default {
    name: 'Navigation'
}

function change_language(){
    console.log("nesto");
    console.log(this.$router.currentRoute);
}

function say(message) {
  alert(message)
}

</script>
