<template>
  <v-app>
    <!-- Header Bereich -->
    <v-app-bar app
               prominent >
      <v-row align="center" justify="space-between" >
        <v-col cols="11">
          <router-link to="/" >
            <v-img src="@/assets/spacegate54.png"
                   contain
                   id="sg-ig"></v-img>
            <h1 id="page-title">
              SpaceGate 54
            </h1>
          </router-link>
        </v-col>
        <v-col v-if="$route.name !== 'Home'">
          <User/>
        </v-col>
      </v-row>

    </v-app-bar>

    <!-- Hauptseite, enthält immer die aktuelle Sicht-->
    <v-main><router-view/></v-main>

    <!-- Footer-->
    <v-footer padless>
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
import User from "@/components/User";
export default {
  name: 'App',
  components: {
    User,
  },
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
</style>
