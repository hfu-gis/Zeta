<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app dark
      right
    >
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
    </v-navigation-drawer>

    <v-app-bar app right dark
       src="http://picsum.photos/1920/100?blur">
      <v-toolbar-title>Gras-Shoppers</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon :to="{name:'Order'}">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>

    <v-content light>
      <v-container fluid class="fill-height">
        <router-view  @login="isLoggedIn=$event"/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
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
