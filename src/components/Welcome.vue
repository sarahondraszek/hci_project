<template>
  <v-container>
    <v-row>
      <v-col cols="12"
             md="12">
        <h2 id="description-title">Welcome to SpaceGate 54</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             md="12">
        <p>
          Welcome to SpaceGate 54, your course registration portal for Trier Space University.
        </p>
        <p> You can view and edit your courses on the
          <router-link v-if="$route.name === 'TeacherLanding'" style="text-decoration: none; color: #E95A24;"
                       to="/teacher/courses">
            course page</router-link>
          <router-link v-if="$route.name === 'StudentLanding'" style="text-decoration: none; color: #E95A24;"
                       to="/student/courses">course page</router-link>.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             md="12">
        <DailyCalendar/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DailyCalendar from "@/components/DailyCalendar";

export default {
  name: "Welcome",
  components: {DailyCalendar}
}
</script>

<style scoped>
#description-title {
  text-align: center;
  color: #FFFFFF;
  background-color: #E95A24;
}
</style>