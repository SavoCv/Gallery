<template>
    <div>
        <div id="not-logged-in">
            <div class='row'>
                <div class='col-sm-4 offset-sm-1'>
                    <div>
                        <h1>Log in</h1>
                    </div>
                    <table>
                        <tr>
                            <td>Username: </td>
                            <td><input type="text" id="username-log"></td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td><input type="password" id="password-log"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button @click="login()">Log in</button>
                            </td>
                        </tr>
                    </table>
                    <div id='log-message' class='alert-danger'>
                    </div>
                    <div id='pos-log-message' class='alert-success'>
                    </div>
                </div>
                <div class='col-sm-4 offset-sm-2'>
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <table>
                        <tr>
                            <td>Username: </td>
                            <td><input type="text" id="username-sign"></td>
                        </tr>
                        <tr>
                            <td>First name: </td>
                            <td><input type="text" id="fname"></td>
                        </tr>
                        <tr>
                            <td>Last name: </td>
                            <td><input type="text" id="lname"></td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td><input type="password" id="password-sign"></td>
                        </tr>
                        <tr>
                            <td>Repeat password: </td>
                            <td><input type="password" id="re-password"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button @click="signup()">Sign up</button>
                            </td>
                        </tr>
                    </table>
                    <div id='sign-message' class='alert-danger'></div>
                    <div id='pos-sign-message' class='alert-success'></div>
                </div>
            </div>
        </div>
        <div id='logged-in'>
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
                    <td colspan="2" id='tdbtn'>
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
#tdbtn{
    text-align: center;
}
</style>

<script>

export default{
    name: "AccountView",
    data(){
        if('username' in localStorage)
        {
            let username = localStorage.getItem('username');
            let users = JSON.parse(localStorage.getItem('users'));
            return {
                'username': username,
                'user': users[username]
            };
        }
        return {
            'username': '',
            'user': {'pass': "", 'fname': "", 'lname': "" }
        }
    },
    mounted: function(){
        if('username' in localStorage)
        {
            document.getElementById("not-logged-in").style.display = 'none';
        }
        else
        {
            document.getElementById("logged-in").style.display = 'none';
        }
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
