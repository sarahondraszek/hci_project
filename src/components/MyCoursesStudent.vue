<template>
  <v-container>
    <v-card>
      <v-card-title>My courses</v-card-title>
      <v-card-text>You can view and edit the courses you are currently enrolled in or view your weekly schedule.
      </v-card-text>
    </v-card>
    <v-expansion-panels v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-header color="#272727">Your Current Courses</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Course v-for="course in courses"
                  :key="course.courseID"
                  :courseID='course.courseID'
                  :title='course.title'
                  :teacher='course.teacher'
                  :location='course.location'
                  :time='course.time'
                  :sws='course.sws'
                  :can-edit="true"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header color="#272727">Your Weekly Schedule</v-expansion-panel-header>
        <v-expansion-panel-content style="margin-bottom: 30px">
          <br>
          <v-calendar
              ref="calendar"
              :now="today"
              :value="today"
              :events="events"
              event-color="#E95A24"
              color="#E95A24"
              type="week"
              :weekdays="weekday"
              :first-interval=4
              :interval-count=6
              :interval-minutes=120
          ></v-calendar>
          <br>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Course from "@/components/Course";

export default {
  name: "MyCoursesStudent",
  components: {
    Course
  },
  data: () => ({
    panel: 0,
    today: '2022-02-08',
    weekday: [1, 2, 3, 4, 5],
    events: [
      {
        name: 'Course 1',
        start: '2022-02-09 10:15',
        end: '2022-02-09 11:45',
      },
      {
        name: 'Course 2',
        start: '2022-02-10 14:15',
        end: '2022-02-10 15:45',
      },
      {
        name: 'Course 3',
        start: '2022-02-11 12:15',
        end: '2022-02-11 13:45',
      },
    ],
    courses: [{
      courseID: "BWL-001",
      title: 'Einführung in die BWL',
      teacher: "Mueller",
      location: "Audimax",
      time: "Mo, 10:15",
      sws: 5,
    },]
  }),
}
</script>

<style scoped>

</style>