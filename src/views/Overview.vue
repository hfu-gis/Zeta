<template>
    <div>
    <div>
        <h1> <p class="font-weight-black">Willkommen auf MyBerry Deine App für die Erdbeerwoche.</p></h1>
        <h2> <p class="my-5 font-weight-black">Deine App für die Erdbeerwoche.</p></h2>
        <p class="font-weight-regular">Aktuell</p>
    </div>

        <v-row>
    <v-card elevation="8"
            class="mx-8"
            max-width="400"
    >
        <v-img
                class="black--text align-end"
                height="200px"
                src="../../blog-pic1.2.jpg"
        >
            <v-card-title>Menstruationstasse - Top or Flop?</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Milena Sagert</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>Die Menstruationstasse</div>

            <div>Was du alles wissen solltest</div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    color="black"
                    text
            >
                Teilen
            </v-btn>

            <router-link
                    :to='/blog1/'
                    class="button"
            >
                Mehr dazu
            </router-link>
            <v-btn
                    color="red"
                    text
            >
             Mehr dazu
            </v-btn>
        </v-card-actions>
    </v-card>

        <v-card elevation="8"
                class="mx-8"
                max-width="400"
        >
            <v-img
                    class="black--text align-end"
                    height="200px"
                    src="../../blog-pic2.2.png"
            >
                <v-card-title>9 Must Haves für deine Periode</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Melanie Fleischer</v-card-subtitle>

            <v-card-text class="text--primary">
                <div>Must Haves</div>

                <div>Das solltest du nie vergessen</div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                        color="black"
                        text
                >
                    Teilen
                </v-btn>

                <v-btn
                       link :to="/blog2/"
                        color="red"
                        text
                >
                    Mehr dazu
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-card elevation="8"
                class="mx-8"
                max-width="400"
        >
            <v-img
                    class="black--text align-end"
                    height="200px"
                    src="../../blog-pic3.2.png"
            >
                <v-card-title>Regelschmerzen: Was dagegen tun &  Was hilft wirklich?</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Eva Breuninger</v-card-subtitle>

            <v-card-text class="text--primary">
                <div>Regelschmerzen</div>

                <div>Unsere Tipps und Tricks für dich!</div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                        color="black"
                        text
                >
                    Teilen
                </v-btn>

                <v-btn
                        link :to="{name:'blog3'}"
                        color="red"
                        text
                >
                    Mehr dazu
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-row>
    </div>
</template>



<script>
    export default {
        data: () => ({
            //
        }),
    }
</script>

<style>
</style>