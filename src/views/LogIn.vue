<template>
<div>
    <div class="login-box">
        <h1>Loginbereich</h1>
        <div class="textbox">
            <input type="text" placeholder="Username" name="" value="">
        </div>
        <div class="textbox">
            <input type="passwort" placeholder="Passwort" name="" value="">
        </div>

        <input class="btn" type="button" name="" value="Sign in">
    </div>
</div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        font-family: serif;
        background-color: lightpink;
        font-size: 20px
    }



    .login-box{
        width: 280px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
</style>