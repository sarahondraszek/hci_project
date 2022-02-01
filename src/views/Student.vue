<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-card class="mx-auto"
                max-width="900">
          <v-toolbar
              color="#E95A24"
              dark
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Courses Winter 2022</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <draggable class="row" :sort="true">
            <v-col>
              <Course courseID="BWL-001" title="Einführung in die BWL" teacher="Mueller" location="Audimax"
                      time="Mo, 10:15" sws="5"/>
            </v-col>
            <v-col>
              <Course courseID="BWL-002" title="Einführung in die VWL" teacher="Haupt" location="A18"
                      time="Di, 14:15" sws="5"/>
            </v-col>
            <v-col>
              <Course courseID="BWL-003" title="Mathe 1" teacher="Drews" location="B35"
                      time="Do, 12:15" sws="10"/>
            </v-col>
          </draggable>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-md-4" color="dark-grey">
          <v-img src="@/assets/book-bag.png" contain></v-img>
          <v-card-actions class="justify-center">
            <router-link style="text-decoration: none; color: inherit;" to="/bookbag">
              <v-btn
                  outlined
                  rounded
                  text
                  color="orange accent-4"
              >
                View Bookbag
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { mapGetters, mapMutations } from "vuex";
import draggable from "vuedraggable";
import Course from "@/components/Course";

export default {
  name: "Student",
  components: {
    draggable,
    Course,
  },
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>