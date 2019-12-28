<template>
    <div id="app">
        <v-app id="inspire">
            <v-list dense>
                <<v-list-item link :to="{name:'App'}">
                <v-list-item-action>
                    <v-icon>home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Startseite</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
                <v-list-item link :to="{name:'LogIn'}">
                    <v-list-item-action>
                        <v-icon>login</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="{name:'Kalender'}">
                    <v-list-item-action>
                        <v-icon>calendar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Kalender</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="{name:'Arzt_finden'}">
                    <v-list-item-action>
                        <v-icon>map</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Frauenarzt finden</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Kontakt</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-content>
                <v-container
                        fluid
                        fill-height
                >
                    <v-layout
                            align-center
                            justify-center
                    >
                        <v-flex
                                xs12
                                sm8
                                md4
                        >
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="primary"
                                        dark
                                        flat
                                >
                                    <v-toolbar-title>Login form</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                    :href="source"
                                                    icon
                                                    large
                                                    target="_blank"
                                                    v-on="on"
                                            >
                                                <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Source</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                    icon
                                                    large
                                                    href="https://codepen.io/johnjleider/pen/pMvGQO"
                                                    target="_blank"
                                                    v-on="on"
                                            >
                                                <v-icon>mdi-codepen</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Codepen</span>
                                    </v-tooltip>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                                label="Login"
                                                name="login"
                                                prepend-icon="person"
                                                type="text"
                                        ></v-text-field>

                                        <v-text-field
                                                id="password"
                                                label="Password"
                                                name="password"
                                                prepend-icon="lock"
                                                type="password"
                                        ></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary">Login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
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