<template>
  <v-container style="padding-bottom: 69px">
    <v-row class="mt-3">
      <v-col cols="12"
             md="10">
        <v-card class="mx-auto"
                max-width="900">
          <v-toolbar
              color="#E95A24">
            <v-icon>mdi-bookshelf</v-icon>
            <v-toolbar-title>&nbsp;Your current courses</v-toolbar-title>
          </v-toolbar>
          <MyCoursesTeacher/>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10">
        <v-card class="mx-auto"
                max-width="900">
          <v-toolbar
              color="#E95A24">
            <v-icon>mdi-clock</v-icon>
            <v-toolbar-title>&nbsp;Your courses of past semesters</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>&nbsp;&nbsp;&nbsp;You can drag and drop courses of past semesters into the bag
            on the right if you want to start them again this semester.
          </v-card-text>
          <draggable v-model="allCourses.offered"
                     group="allCourses">
            <Course v-for="course in allCourses.offered"
                    :key="course.courseID"
                    :courseID='course.courseID'
                    :title='course.title'
                    :teacher='course.teacher'
                    :location='course.location'
                    :time='course.time'
                    :sws='course.sws'
                    :can-edit="true"
            />
          </draggable>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-md-4" width="300" color="#272727">
          <draggable v-model="allCourses.opened"
                     group="allCourses" :empty-insert-threshold="100"
                     ghost-class="hidden-ghost"
                     @change="snackbar = true"></draggable>
          <v-img src="@/assets/bag.png" contain></v-img>
          <v-card-actions class="justify-center">
            <router-link style="text-decoration: none; color: inherit;" to="/teacher/bookbag">
              <v-btn
                  outlined
                  rounded
                  text
                  color="#E95A24">
                Open Courses <br> for Students
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
            <v-icon>mdi-pencil</v-icon>
            <v-toolbar-title>&nbsp;Create new course</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-col>
            <v-text-field
                color="#E65100"
                :counter="2"
                label="Course ID Prefix"
            ></v-text-field>
            <v-text-field
                color="#E65100"
                :counter="30"
                label="Course Name"
            ></v-text-field>
            <v-text-field
                color="#E65100"
                :counter="2"
                label="SWS"
            ></v-text-field>
            <v-text-field
                color="#E65100"
                :counter="30"
                label="Teacher"
            ></v-text-field>
            <v-text-field
                color="#E65100"
                :counter="10"
                label="Location"
            ></v-text-field>
            <v-text-field
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
      <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
              color="#E95A24"
              text
              v-bind="attrs"
              @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/shared/Course";
import MyCoursesTeacher from "@/components/teacher/MyCoursesTeacher";

export default {
  name: "CourseManagement",
  components: {
    draggable,
    Course,
    MyCoursesTeacher,
  },
  data: () => ({
    form: {
      courseID: "",
      title: "",
      teacher: "",
      location: "",
      time: "",
      sws: "",
    },
      allCourses: {
        offered: [{
          courseID: "CS-008",
          title: 'Data Structures',
          teacher: "You",
          location: "HS12",
          time: "Mo, 10:15",
          sws: 10,
        },
          {
            courseID: "CS-003",
            title: "Logic",
            teacher: "You",
            location: "HS10",
            time: "Tue, 10:15 and Fr, 12:15",
            sws: 5,
          },
        ],
        opened: [],
      },
      panel: 0,
      snackbar: false,
      text: 'Successfully added.',
      timeout: 1500,

    })
};
</script>

<style>

</style>