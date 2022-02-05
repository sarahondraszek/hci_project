<template>
  <v-container>
    <v-row>
      <v-col cols="12"
             md="12">
        <h2 id="description-title">Welcome to SpaceGate 54</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             md="12">
        <p>
          Welcome to SpaceGate 54, your course registration portal for Trier Space University.
        </p>
        <router-link style="text-decoration: none; color: inherit;" to="/student/courses">Go to course page</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Description"
}
</script>

<style scoped>
#description-title {
  text-align: center;
  color: #FFFFFF;
  background-color: #E95A24;
}
</style>