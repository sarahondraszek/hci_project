<template>
  <v-row>
    <v-col>
      <h2 id="description-title">Your Schedule</h2>
      <v-calendar
          color="#E95A24"
          type="day"
          :first-interval=4
          :interval-count=6
          :interval-minutes=120
      >
        <template v-slot:day-header="{ present }">
          <template
              v-if="present"
              class="text-center"
          >
            &nbsp; Today
          </template>
        </template>
      </v-calendar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Daily Calendar",
  data: () => ({}),
}
</script>

<style scoped>
#description-title {
  text-align: center;
  color: #FFFFFF;
  background-color: #E95A24;
}
</style>