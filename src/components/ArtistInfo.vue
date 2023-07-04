<template>
    <div>
        <h1 class="mb-3" v-if="lang == 'uk'">{{artist.name}}</h1>
        <h1 class="mb-3" v-if="lang == 'srb'">{{artist.name_srb}}</h1>
        <span v-if="lang == 'uk'">{{ artist.info }}</span>
        <span v-if="lang == 'srb'">{{ artist.info_srb }}</span>
        <br>
        <button @click="overviewArts" v-if="lang == 'uk'" class="btn btn-secondary">Overview of artworks</button>
        <button @click="overviewArtsSrb" v-if="lang == 'srb'" class="btn btn-secondary">Pregled dela</button>
    </div>
</template>

<style scoped>

div{
    text-align: left;
}

</style>

<script>
import html2pdf from "html2pdf.js";
import artworks from "../data/art-data.js";

export default {
    name: 'ArtistInfo',
    data(){
        return {
            'lang': localStorage.getItem('language'),
        }
    },
    props: [
        'artist',
    ],
    methods: {
        makeOverview(heading, arts, name, a_d){
            let htmlStr = "";
            htmlStr += "<center><h1>" + heading + "</h1></center><br>";
            htmlStr += "<ul>";
            arts.forEach(element => {
                htmlStr += "<li>";
                htmlStr += element.name;
                htmlStr += "</li>";
            });
            htmlStr += "</ul>";
            html2pdf(htmlStr, {
                margin: 5,
                filename: name + " " + a_d + ".pdf",
            });
        },
        overviewArts(){
            let arts = artworks.map(a => {
                return  {...a.eng, src: a.src};
            });
            arts = arts.filter(a => {
                return a.author == this.artist.name;
            })
            this.makeOverview("List of artworks by the artist " + this.artist.name, arts, this.artist.name, "artworks");
        },
        overviewArtsSrb(){
            let arts = artworks.map(a => {
                return  {...a.srb, src: a.src};
            });
            arts = arts.filter(a => {
                return a.author == this.artist.name_srb;
            })
            this.makeOverview("Lista dela od " + this.artist.name_srb, arts, this.artist.name_srb, "dela");
        },
    }
}
</script>
