<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app
               prominent >

      <router-link to="/">
        <v-img src="@/assets/spacegate54.png"
               contain
                                 id="sg-ig"></v-img>
        <h1 id="page-title">
          SpaceGate 54
        </h1>
      </router-link>
    </v-app-bar>
    <v-main><router-view/></v-main>
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

<style>
#sg-ig {
  margin: 10px;
  width: 90px;
  height: 92px;
  float: left;
  vertical-align:middle;
}
#page-title {
  font-family: "Audiowide", sans-serif;
  font-size: 40px;
  color: #E95A24;
  float: left;
}
</style>
