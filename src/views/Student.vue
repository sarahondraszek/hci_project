<template>
  <v-card style="height:100%">
    <v-row>
    <v-toolbar
              color="#E95A24"
              dark
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Courses Winter 2022</v-toolbar-title>
          </v-toolbar>
    </v-row>
      <v-row>
          <v-tabs vertical grow color="#E95A24">
            <v-tab class="vert-tab">
              Enroll
            </v-tab>
            <v-tab class="vert-tab">
              Option 2
            </v-tab>
          <v-tab-item>
            <v-col>
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
            </v-col>
            <v-col cols="2">
              <v-card class="pa-md-4" color="dark-grey">
                <draggable v-model="allCourses.booked" group="allCourses">
                </draggable>
                <v-img src="@/assets/bag.png" contain></v-img>
                <v-card-actions class="justify-center">
                  <router-link style="text-decoration: none; color: inherit;" to="/Bookbag">
                    <v-btn
                        outlined
                        rounded
                        text
                        color="orange accent-4">
                      Review Bookbag
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-col>
      </v-tab-item>
      <v-tab-item>
        <p>Page 2</p>
      </v-tab-item>
      </v-tabs>
    </v-row>
  </v-card>

</template>

<script>
import draggable from "vuedraggable";
import Course from "@/components/Course";
//import DropArea_Bag from "@/components/DropArea_Bag";
export default {
  name: "Student",
  components: {
    draggable,
    //DropArea_Bag,
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
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.vert-tab{
  transform: rotate(270deg);
}
</style>