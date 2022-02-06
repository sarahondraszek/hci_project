<template>
  <v-container>
    <v-card style="height:100%">
      <v-toolbar
          color="#E95A24"
          dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Courses Winter 2022</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical grow color="#E95A24">
        <v-tab class="vert-tab">
          Enroll
        </v-tab>
        <v-tab class="vert-tab">
          My courses
        </v-tab>
        <v-tab-item>
          <Enroll/>
        </v-tab-item>
        <v-tab-item>
          <MyCoursesStudent/>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>

import Enroll from "@/components/Enroll";
import MyCoursesStudent from "@/components/MyCoursesStudent";
export default {
  name: "Courses",
  components: {
    Enroll,
    MyCoursesStudent
  },
}
</script>

<style scoped>
.vert-tab{
  transform: rotate(270deg);
}
</style>