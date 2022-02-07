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
          <v-col>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="2"
                label="Course ID Prefix"
            ></v-text-field>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="30"
                label="Course Name"
            ></v-text-field>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="2"
                label="SWS"
            ></v-text-field>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="30"
                label="Teacher"
            ></v-text-field>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="10"
                label="Location"
            ></v-text-field>
            <v-text-field
                v-model="value"
                color="#E65100"
                :counter="20"
                label="Time"
            ></v-text-field>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    elevation="2"
                    color="#E95A24"
                >
                  <v-icon class="mr-2">
                    mdi-check-bold
                  </v-icon>
                  Create course
                </v-btn>
              </template>
              <span>Create a new course with the input given above</span>
            </v-tooltip>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/Course";

export default {
  name: "CourseManagement",
  components: {
    draggable,
    Course,
  },
  data: () => ({
    form: {
      courseID: "",
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