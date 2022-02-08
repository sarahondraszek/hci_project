<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="9">
        <v-expansion-panels v-model="panel">

          <v-expansion-panel>
            <v-expansion-panel-header color="#272727">Mandatory Courses</v-expansion-panel-header>
            <v-expansion-panel-content>
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
                />
              </draggable>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header color="#272727">Optional Courses</v-expansion-panel-header>
            <v-expansion-panel-content><br>You have no optional courses available this semester.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="3">
        <v-card class="pa-md-4" width="300" color="#272727">
          <draggable v-model="allCourses.booked"
                     group="allCourses" :empty-insert-threshold="100"
                     ghost-class="hidden-ghost"
                     @change="snackbar = true"></draggable>
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
          <v-card-actions class="justify-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    outlined
                    rounded
                    text
                    color="#E95A24"
                    v-bind="attrs"
                    v-on="on"
                    @click="oneClick"
                >
                  1-click Add <br> to Bookbag
                </v-btn>
              </template>
              <span>Add all mandatory courses to your Bookbag at once</span>
            </v-tooltip>
          </v-card-actions>
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
        offered: [{
          courseID: "BWL-001",
          title: 'Einführung in die BWL',
          teacher: "Mueller",
          location: "Audimax",
          time: "Mo, 10:15",
          sws: 5,
        },
          {
            courseID: "BWL-002",
            title: "Einführung in die VWL",
            teacher: "Haupt",
            location: "A18",
            time: "Di, 14:15",
            sws: 5,
          },
          {
            courseID: "BWL-003",
            title: "Mathe 1",
            teacher: "Drews",
            location: "B35",
            time: "Do, 12:15",
            sws: 10,
          },
          {
            courseID: "BWL-004",
            title: "Marketing",
            teacher: "Teichert",
            location: "C8",
            time: "Mi, 14:15",
            sws: 10,
          },
        ],
        booked: [],
      },
      panel: 0,
      snackbar: false,
      text: 'Successfully added.',
      timeout: 1500,

    }
  },
  methods: {
    oneClick() {
      this.allCourses.offered = []
      this.snackbar = true
    }
  }
}
</script>

<style scoped>
.hidden-ghost {
  display: none;
}
</style>