<template>
    <div>
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
                            <td><input type="text" id="username-log"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Sifra: </td>
                            <td v-if="lang == 'uk'">Password: </td>
                            <td><input type="password" id="password-log"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="tdbtn">
                                <button @click="login()" v-if="lang == 'srb'">Uloguj se</button>
                                <button @click="login()" v-if="lang == 'uk'">Log in</button>
                            </td>
                        </tr>
                    </table>
                    <div id='log-message' class='alert-danger'>
                    </div>
                    <div id='pos-log-message' class='alert-success'>
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
                            <td><input type="text" id="username-sign"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Ime: </td>
                            <td v-if="lang == 'uk'">First name: </td>
                            <td><input type="text" id="fname"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Prezime: </td>
                            <td v-if="lang == 'uk'">Last name: </td>
                            <td><input type="text" id="lname"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Sifra: </td>
                            <td v-if="lang == 'uk'">Password: </td>
                            <td><input type="password" id="password-sign"></td>
                        </tr>
                        <tr>
                            <td v-if="lang == 'srb'">Ponovite sifru: </td>
                            <td v-if="lang == 'uk'">Repeat password: </td>
                            <td><input type="password" id="re-password"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="tdbtn">
                                <button @click="signup()" v-if="lang == 'srb'">Kreiraj nalog</button>
                                <button @click="signup()" v-if="lang == 'uk'">Sign up</button>
                            </td>
                        </tr>
                    </table>
                    <div id='sign-message' class='alert-danger'></div>
                    <div id='pos-sign-message' class='alert-success'></div>
                </div>
            </div>
        </div>
        <div id='logged-in' v-else>
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
                        <button @click="logout()">Log out</button>
                    </td>
                </tr>
            </table>
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

</style>

<script>

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
        ret['lang'] = localStorage.getItem('language');
        return ret;
    },
    mounted: function(){
        //as onload
    },
    methods: {
        login()
        {
            let username = document.getElementById("username-log").value;
            let pass = document.getElementById("password-log").value;
            if(!('users' in localStorage))
            {
                document.getElementById("log-message").innerHTML = "Bad credentials";
                return;
            }
            let users = JSON.parse(localStorage.getItem('users'));
            if(!(username in users))
            {
                document.getElementById("log-message").innerHTML = "Bad credentials";
                return;
            }
            if(users[username]['pass'] != pass)
            {
                document.getElementById("log-message").innerHTML = "Bad credentials";
                return;
            }
            localStorage.setItem('username', username);
            document.getElementById("pos-log-message").innerHTML = "Successfully logged in";
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
                document.getElementById("sign-message").innerHTML = "Username is taken";
                return;
            }
            let pass = document.getElementById("password-sign").value;
            let re_pass = document.getElementById("re-password").value;
            if(pass != re_pass)
            {
                document.getElementById("sign-message").innerHTML = "Passwords don't match";
                return;
            }
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            users[username] = {"pass": pass, "fname": fname, "lname": lname};
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById("pos-sign-message").innerHTML = "Succesfully signed up";
            localStorage.setItem('username', username);
            location.reload();
        },
        logout(){
            localStorage.removeItem('username');
            location.reload();
        }
    }
}
</script>
