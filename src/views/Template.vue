<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Startseite</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kalender</v-list-item-title>
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

    <v-app-bar
            app
            color="red darken-2"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      hallo
      <v-container
              fluid
              fill-height
      >
        <v-layout
                align-center
                justify-center
        >
          <v-flex text-xs-center>
            <v-tooltip left>

<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
  </div>
</template>

<script>
  export default {
    // gebt jeder Page einen eigenen Namen
    name: 'template',
    // benötigte Komponenten
    components: {},
    // entspricht den HTML-Attributen
    props: {},
    // Variablen-Speicher
    data() {
      return {}
    },
    // reagieren auf prop-Veränderung
    watch: {},
    // interne Methoden
    methods: [],
    // Initialisierung
    created() {}
  }
</script>

<style scoped>
  /* CSS für diese Seite hier einfügen */
</style>
