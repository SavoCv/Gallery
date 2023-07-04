<template>
    <div class='container'>
        <div id="not-logged-in" v-if="username == ''">
            <div class='row row-sized'>
                <div class='col-sm-4 offset-sm-1'>
                    <table>
                        <tr>
                            <td class="text-center" colspan="2">
                                <h1 v-if="lang == 'srb'">Uloguj se</h1>
                                <h1 v-if="lang == 'uk'">Log in</h1>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Korisnicko ime: </td>
                            <td v-if="lang == 'uk'">Username: </td>
                            <td><input type="text" id="username-log" class="form-control"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Sifra: </td>
                            <td v-if="lang == 'uk'">Password: </td>
                            <td><input type="password" id="password-log" class="form-control"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="tdbtn">
                                <button @click="login()" v-if="lang == 'srb'" class="btn btn-secondary">Uloguj se</button>
                                <button @click="login()" v-if="lang == 'uk'" class="btn btn-secondary">Log in</button>
                            </td>
                        </tr>
                    </table>
                    <div id='log-message' class='alert-danger'>
                        {{login_message0}}
                    </div>
                    <div id='pos-log-message' class='alert-success'>
                        {{login_message1}}
                    </div>
                </div>
                <div class='col-sm-4 offset-sm-2'>
                    <table>
                        <tr>
                            <td class="text-center" colspan="2">
                                <h1 v-if="lang == 'srb'">Kreiraj nalog</h1>
                                <h1 v-if="lang == 'uk'">Sign up</h1>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Korisnicko ime: </td>
                            <td v-if="lang == 'uk'">Username: </td>
                            <td><input type="text" id="username-sign" class="form-control"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Ime: </td>
                            <td v-if="lang == 'uk'">First name: </td>
                            <td><input type="text" id="fname" class="form-control"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Prezime: </td>
                            <td v-if="lang == 'uk'">Last name: </td>
                            <td><input type="text" id="lname" class="form-control"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Sifra: </td>
                            <td v-if="lang == 'uk'">Password: </td>
                            <td><input type="password" id="password-sign" class="form-control"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Ponovite sifru: </td>
                            <td v-if="lang == 'uk'">Repeat password: </td>
                            <td><input type="password" id="re-password" class="form-control"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="tdbtn">
                                <button @click="signup()" v-if="lang == 'srb'" class="btn btn-secondary">Kreiraj nalog</button>
                                <button @click="signup()" v-if="lang == 'uk'" class="btn btn-secondary">Sign up</button>
                            </td>
                        </tr>
                    </table>
                    <div id='sign_message' class='alert-danger'>{{signup_message0}}</div>
                    <div id='pos-sign_message' class='alert-success'>{{signup_message1}}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-sm justify-content-center" style='display:flex;'>
                    <table>
                        <tr>
                            <td>First name: </td>
                            <td>{{user.fname}}</td>
                        </tr>
                        <tr>
                            <td>Last name: </td>
                            <td>{{user.lname}}</td>
                        </tr>
                        <tr>
                            <td>Username: </td>
                            <td>{{username}}</td>
                        </tr>
                        <tr>
                            <td colspan="2" class='tdbtn'>
                                <button @click="logout()" class="btn btn-secondary">Log out</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="row">
                <h1 v-if="lang == 'uk'">My offers and comments</h1>
                <h1 v-if="lang == 'srb'">Moje ponude i komentari</h1>
                <table class="table table-hover table-bordered tbl-com">
                    <tbody>
                        <tr>
                            <th>
                                <strong v-if="lang == 'srb'">Delo</strong>
                                <strong v-if="lang == 'uk'">Artwork</strong>
                            </th>
                            <th>
                                <strong v-if="lang == 'srb'">Ponuda</strong>
                                <strong v-if="lang == 'uk'">Offer</strong>
                            </th>
                            <th style="width: 60%">
                                <strong v-if="lang == 'srb'">Komentar</strong>
                                <strong v-if="lang == 'uk'">Comment</strong>
                            </th>
                        </tr>

                        <template v-for="offer in offers" :key="offer.username">
                        <tr>

                            <td>
                                <router-link :to="'/artworks/showArtwork/' + offer.for">
                                    {{offer.name}}
                                </router-link>
                            </td>

                            <td>
                                {{offer.offer}} K $
                            </td>

                            <td class="text-start">
                                {{offer.comment}}
                            </td>

                            <td v-if="offer.username == username" style="text-align: center;">
                                <button class="btn btn-secondary" @click="removeOffer(offer)" v-if="lang == 'uk'">Remove</button>
                                <button class="btn btn-secondary" @click="removeOffer(offer)" v-if="lang == 'srb'">Ukloni</button>
                            </td>

                        </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
#logged-in{
    justify-content: center;
    display: flex;
    text-align: left;
}

td{
    text-align: left;
}

.tdbtn{
    text-align: center;
}

.row-sized{
    width: 100%;
}

#logged-in, #not-logged-in{
    padding-top: 20px;
}

th, td {
  padding: 15px;
}

#log-message, #sign_message{
    color: red;
}

#pos-log-message, #pos-sign_message{
    color: green;
}

</style>

<script>
import artworks from '../data/art-data.js'

export default{
    name: "AccountView",
    data(){
        let ret = {}
        if('username' in localStorage)
        {
            let username = localStorage.getItem('username');
            let users = JSON.parse(localStorage.getItem('users'));
            ret = {
                'username': username,
                'user': users[username]
            };
        }
        else
            ret =  {
                'username': '',
                'user': {'pass': "", 'fname': "", 'lname': "" }
            }
        this.lang = localStorage.getItem('language');
        ret['offers'] = this.getMyOffersAndComments();
        ret['login_message0'] = '';
        ret['login_message1'] = '';
        ret['signup_message0'] = '';
        ret['signup_message1'] = '';
        return ret;
    },
    methods: {
        login()
        {
            let username = document.getElementById("username-log").value;
            let pass = document.getElementById("password-log").value;
            let badC;
            if(this.lang == 'uk')
                badC = "Bad credentials";
            else
                badC = "Losi kredencijali";
            if(!('users' in localStorage))
            {
                this['login_message0'] = badC;
                return;
            }
            let users = JSON.parse(localStorage.getItem('users'));
            if(!(username in users))
            {
                this['login_message0'] = badC;
                return;
            }
            if(users[username]['pass'] != pass)
            {
                this['login_message0'] = badC;
                return;
            }
            localStorage.setItem('username', username);
            this['login_message0'] = "";
            if(this.lang == 'uk')
                this['login_message1'] = "Successfully logged in";
            else
            this.login_message1 = "Uspesno ulogovan";
            location.reload();
        },
        signup()
        {
            if(!('users' in localStorage))
                localStorage.setItem('users', JSON.stringify({}));
            let users = JSON.parse(localStorage.getItem('users'));
            let username = document.getElementById("username-sign").value;
            if(username in users)
            {
                if(this.lang == 'uk')
                    this.signup_message0 = "Username is taken";
                else
                    this.signup_message0 = "Korisnicko ime je zauzeto";
                return;
            }
            let pass = document.getElementById("password-sign").value;
            let re_pass = document.getElementById("re-password").value;
            if(pass != re_pass)
            {
                if(this.lang == 'uk')
                    this.signup_message0 = "Passwords don't match";
                else
                    this.signup_message0 = "Lozinke se ne poklapaju";
                return;
            }
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            users[username] = {"pass": pass, "fname": fname, "lname": lname};
            localStorage.setItem('users', JSON.stringify(users));
            this.signup_message0 = "";
             if(this.lang == 'uk')
                this.signup_message1 = "Succesfully signed up";
            else
                this.signup_message1 = "Nalog uspesno kreiran";
            localStorage.setItem('username', username);
            location.reload();
        },
        logout(){
            localStorage.removeItem('username');
            location.reload();
        },
        getMyOffersAndComments(){
            let oac = JSON.parse(localStorage.getItem("offers"));
            let username = localStorage.getItem('username');
            oac = oac.filter(a => {
                return a.username == username;
            });
            for(let i = 0; i < oac.length; ++i)
            {
                if(this.lang == 'uk'){
                    oac[i]['name'] = artworks.find(a=>{
                        return a.id == oac[i].for;
                    }).uk.name;
                }
                if(this.lang == 'srb')
                    oac[i]['name'] = artworks.find(a=>{
                        return a.id == oac[i].for;
                    }).srb.name;
            }
            return oac;
        },
        removeOffer(offer){
            let oac = JSON.parse(localStorage.getItem("offers"));
            let flag = false;
            oac = oac.filter(a=> {
                if(!flag && JSON.stringify(a) == JSON.stringify(offer))
                {
                    flag = true;
                    return false;
                }
                else
                    return true;
            });
            localStorage.setItem("offers", JSON.stringify(oac));
            location.reload();
        },
    }
}
</script>
