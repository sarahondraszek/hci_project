<template>
  <v-container>
    <v-row dense>
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
          <v-row>
            <draggable :list="allCourses.offered" group="allCourses" >
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
          </v-row>
          <v-row>
            <draggable :list="allCourses.booked" group="allCourses">
          <Course v-for="course in allCourses.booked"
                  :key="course.courseID"
                  :courseID='course.courseID'
                  :title='course.title'
                  :teacher='course.teacher'
                  :location='course.location'
                  :time='course.time'
                  :sws='course.sws'
                  />
            </draggable>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="1">
        <DropArea_Bag/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/Course";
import DropArea_Bag from "@/components/DropArea_Bag";
export default {
  name: "Student",
  components: {
    draggable,
    DropArea_Bag,
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
        }],
        booked: [],
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>