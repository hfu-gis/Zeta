<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app dark color="red"
      right
    >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              My Berry
            </v-list-item-title>
            <v-list-item-subtitle>
              Menü
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

         <v-list dense>

        <v-list-item link :to="{name:'Login'}">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Startseite.vue'}">
        <v-list-item-action>
          <v-icon>mdi-home-heart</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Startseite</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        <v-list-item link :to="{name:'Kalender'}">
          <v-list-item-action>
            <v-icon>mdi-calendar-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kalender</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Information'}">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Info</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app right dark
       src="https://www.landwirtschaft.de/fileadmin/_processed_/2/b/csm_Erdbeeren_AdobeStock_139579677_Tim-UR_460d6ba1ef.jpg">
      <v-img
              class="mx-2"
              src="http://localhost:8080/strawberry_icon.png"
              max-height="40"
              max-width="40"
              contain
      ></v-img>
      <v-toolbar-title>MyBerry</v-toolbar-title>
      <v-icon></v-icon>
      <v-spacer />


      <!--<v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>-->
          <v-btn icon :to="{name:'Registration'}">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>
    <v-content class="mx-6" light>
      <v-container fluid class="fill-height">
        <router-view  @login="isLoggedIn=$event"/>
      </v-container>
      Hallo
      test
    </v-content>

    <v-footer app>
      <v-row
                  justify="center"
                  no-gutters
          >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
            >
              {{ link }}
            </v-btn>
            <v-col
                    class="red py-4 text-center white--text"
                    cols="12"
            >
             <div align="center">
              <v-img
                      class="mx-2"
                      position="margin"
                      src="https://i.ibb.co/K9kpKxY/myberry-logo.jpg" max-height="100"
                      max-width="120" alt="">

              </v-img>
             </div>
            </v-col>
          </v-row>
        </v-footer>
  </v-app>
</template>

<script>
import Layout from './components/Layout';
export default {
  name: 'App',

  components: {
    Layout
  },
  props: {
    source: String
  },
  data() {
    return {
      isLoggedIn: false,
      drawer: false,
    }
  },
  methods: {
  },
  created() {
    this.$router.push({name: 'Overview'})
  }
}
</script>