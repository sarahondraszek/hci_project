<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-card class="mx-auto"
                max-width="900">
          <v-toolbar
              color="#E95A24">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Your courses of past semesters</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <draggable class="row" :sort="true">
            <v-col>
              <Course courseID="CS-008" title="Data Structures" teacher="You" location="HS12"
                      time="Mo, 10:15" sws="10"/>
            </v-col>
            <v-col>
              <Course courseID="CS-003" title="Logic" teacher="You" location="HS10"
                      time="Tue, 10:15 and Fr, 12:15" sws="5"/>
            </v-col>
          </draggable>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-md-4" color="dark-grey">
          <v-img src="@/assets/book-bag.png" contain></v-img>
          <v-card-actions class="justify-center">
            <router-link style="text-decoration: none; color: inherit;" to="/courseCreation">
              <v-btn
                  outlined
                  rounded
                  text
                  color="orange accent-4">
                Open courses<br>for students
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols="12"
             md="10">
        <v-card class="mx-auto"
                max-width="900">
          <v-toolbar
              color="#E95A24">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Create new course</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/Course";
export default {
  name: "Teacher",
  components: {
    draggable,
    Course,
  },
  data: () => ({
    form:{
      courseid: "",
      title: "",
      teacher: "",
      location: "",
      time: "",
      sws: "",
    }
  })
};
</script>

<style>

</style>