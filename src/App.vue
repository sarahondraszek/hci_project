<template>
  <v-app>
    <!-- Header Bereich -->
    <v-app-bar app
               prominent>
      <v-row align="center" justify="space-between">
        <v-container class="mx-0" style="width: auto">
          <router-link to="/">
            <v-img src="@/assets/spacegate54.png"
                   contain
                   id="sg-ig"></v-img>
            <h1 id="page-title" class="d-none d-md-flex">
              SpaceGate 54
            </h1>
          </router-link>
        </v-container>
        <v-row style="max-width: 200px" align="center">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn tile outlined
                     v-bind="attrs" v-on="on" color="#E95A24"
                     style="margin-right: 20px">
                <v-icon>mdi-translate</v-icon>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item v-for="language in languages" :key="language.name">
                <v-list-item-content>
                  <v-list-item-title v-text="language.name"/>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          <User v-if="$route.path.match(/\/teacher*/g)"
                initials="MD" fullName="Maja Drews"
                email="maja.drews@space-university.com"/>
          <User v-if="$route.path.match(/\/student*/g)"
                initials="JR" fullName="Johannes Reichert"
                email="johannes.reichert@space-university.com"/>
        </v-row>
      </v-row>
    </v-app-bar>

    <!-- Hauptseite-->
    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer-->
    <v-footer padless style="z-index: 10">
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Space University Trier</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
import User from "@/components/shared/User";

export default {
  name: 'App',
  components: {
    User,
  },
  data() {
    return {
      languages: [
        {
          name: 'English',
        },
        {
          name: 'Deutsch',
        }
      ],

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Audiowide');

#sg-ig {
  margin: 10px;
  width: 90px;
  height: 92px;
  float: left;
  vertical-align: middle;
}

#page-title {
  font-family: "Audiowide", sans-serif;
  font-size: 54px;
  color: #E95A24;
  float: left;
}

.v-calendar-daily__scroll-area {
  overflow-y: visible !important;
}

.v-event-timed-container {
  margin-left: 10px;
}

.theme--dark.v-calendar-daily {
  border-right: #9e9e9e 1px solid;
  border-bottom: #9e9e9e 1px solid;
}
</style>
