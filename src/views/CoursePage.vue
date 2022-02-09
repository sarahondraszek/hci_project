<template>
  <v-container>
    <v-sheet height="100%" min-height="500px">
      <v-toolbar
          color="#E95A24"
          dark
      >
        <v-icon>mdi-bookshelf</v-icon>
        <v-toolbar-title>&nbsp;Courses Winter 2022</v-toolbar-title>
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
    </v-sheet>
  </v-container>
</template>

<script>

import Enroll from "@/components/student/Enroll";
import MyCoursesStudent from "@/components/student/MyCoursesStudent";

export default {
  name: "Courses",
  components: {
    Enroll,
    MyCoursesStudent
  },
}
</script>

<style scoped>
.vert-tab {
  transform: rotate(270deg);
}
</style>