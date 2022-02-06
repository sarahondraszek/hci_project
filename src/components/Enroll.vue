<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="6">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel>
            <v-expansion-panel-header color="#E95A24">Mandatory Courses</v-expansion-panel-header>
            <v-expansion-panel-content>
        <draggable class="row" v-model="allCourses.offered" group="allCourses" >
          <Course v-for="course in allCourses.offered"
                  :key="course.courseID"
                  :courseID='course.courseID'
                  :title='course.title'
                  :teacher='course.teacher'
                  :location='course.location'
                  :time='course.time'
                  :sws='course.sws'
          />
        </draggable>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#E95A24">Optional Courses</v-expansion-panel-header>
            <v-expansion-panel-content> You have no optional courses available this semester.</v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-md-4" max-width="300" color="#272727">
          <draggable v-model="allCourses.booked" group="allCourses">
          </draggable>
          <v-img src="@/assets/bag.png" contain></v-img>
          <v-card-actions class="justify-center">
            <router-link style="text-decoration: none; color: inherit;" to="/student/bookbag">
              <v-btn
                  outlined
                  rounded
                  text
                  color="#E95A24">
                Review Bookbag
              </v-btn>
            </router-link>
          </v-card-actions>
          <v-card-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    outlined
                    rounded
                    text
                    color="#E95A24"
                    v-bind="attrs"
                    v-on="on"
                >
                  1-click enrollment
                </v-btn>
              </template>
              <span>Add all mandatory courses to your Bookbag at once</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/Course";

export default {
  name: "Enroll",
  components: {
    draggable,
    Course
},
  data() {
    return {
      allCourses: {
        offered:[{
          courseID: "BWL-001",
          title: 'Einführung in die BWL',
          teacher: "Mueller",
          location: "Audimax",
          time: "Mo, 10:15",
          sws: 5,
        },
          {courseID: "BWL-002",
            title: "Einführung in die VWL",
            teacher:"Haupt",
            location: "A18",
            time: "Di, 14:15",
            sws:5,},
          {
            courseID: "BWL-003",
            title: "Mathe 1",
            teacher: "Drews",
            location: "B35",
            time: "Do, 12:15",
            sws: 10,
          }
        ],
        booked: [],
      },
      panel: 0,
    }
  },
}
</script>

<style scoped>

</style>