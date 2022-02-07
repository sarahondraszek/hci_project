<template>
  <v-container>
    <v-card>
      <v-card-text class="pt-1">
        You can view and edit the courses you are currently teaching or view your weekly schedule.
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
              class="calenderClass"
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
        name: 'HCI',
        start: '2022-02-07 10:15',
        end: '2022-02-07 11:45',
      },
      {
        name: 'Meeting',
        start: '2022-02-8 10:30',
        end: '2022-02-8 13:45',
      },
      {
        name: 'Programming I',
        start: '2022-02-8 14:15',
        end: '2022-02-8 15:45',
      },
      {
        name: 'Consultation',
        start: '2022-02-10 11:00',
        end: '2022-02-10 13:30',
      },
      {
        name: 'Meeting',
        start: '2022-02-10 14:15',
        end: '2022-02-10 16:30',
      },
      {
        name: 'Lunch w/ Prof. Graham',
        start: '2022-02-9 12:30',
        end: '2022-02-9 13:10',
      },
      {
        name: 'Exam Programming I',
        start: '2022-02-10 08:15',
        end: '2022-02-10 09:45',
      },
    ],
    courses: [
      {
        courseID: "CS-011",
        title: 'Human Computer Interaction',
        teacher: "You",
        location: "H420",
        time: "Mo, 10:15",
        sws: 5,
      },
      {
        courseID: "CS-01",
        title: 'Programming I',
        teacher: "You",
        location: "H69",
        time: "Tue, 14:15",
        sws: 10,
      },
    ]
  }),
}
</script>

<style scoped>

</style>