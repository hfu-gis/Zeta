<template>
    <v-app id="inspire">
        <v-content>
            <v-container

                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="box">
                            <v-toolbar
                                    color="red"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            class="haja"
                                            label="Name"
                                            name="name"
                                            type="text"
                                            v-model="username"
                                    />

                                    <v-text-field
                                            class="hanoi"
                                            id="password"
                                            label="Passwort"
                                            name="password"
                                            type="password"
                                            v-model="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="red">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name:"Login",
        props: {
            source: String,
        },
        date(){
            return {
                password:' ',
                username:' '
            }
        },
    };
</script>
<style scoped>
.box{width: 1000px}
</style>}
