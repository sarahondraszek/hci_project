<template>
  <v-card
      class="mx-auto"
      max-width="900"
  >
    <v-toolbar
        color="#E95A24"
        dark
    >
      <v-icon>mdi-bookshelf</v-icon>
      <v-toolbar-title>Your Bookbag</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on}">
          <v-btn
              v-on="on"
              icon
              @click="selectAll">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </template>
        <span>Select all</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
              v-on="on"
              icon @click="deleteAll">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Delete all courses in your Bookbag</span>
      </v-tooltip>
    </v-toolbar>
    <v-list two-line>
      <v-list-item-group
          v-model="selected"
          active-class="orange--text"
          multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                ></v-list-item-subtitle>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.sws+' SWS'"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon
                    v-if="!active"
                    color="grey lighten-1"
                >
                  mdi-checkbox-blank-circle-outline
                </v-icon>
                <v-icon
                    v-else
                    color="orange darken-3"
                >
                  mdi-checkbox-marked-circle
                </v-icon>
              </v-list-item-action>
              <v-list-item-action>
                <v-icon
                    @click="deleteCourse(index)"
                    color="grey lighten-1"
                >
                  mdi-delete-outline
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
              v-if="index < items.length - 1"
              :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-row class="px-3 pt-1">
      <v-col class="text-left">
        <router-link v-if="$route.name === 'StudentBookbag'" style="text-decoration: none; color: inherit;"
                     to="/student/courses">
          <v-btn
              elevation="2"
          >Return to Course Page
          </v-btn>
        </router-link>
        <router-link v-if="$route.name === 'TeacherBookbag'" style="text-decoration: none; color: inherit;"
                     to="/teacher/courses">
          <v-btn
              elevation="2"
          >Return to Course Page
          </v-btn>
        </router-link>
      </v-col>
      <v-col class="text-right">

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                @click.stop="confirm()"
                elevation="2">Confirm
            </v-btn>
          </template>
          <span v-if="$route.name === 'TeacherBookbag'">By confirming you will be opening all selected courses to students</span>
          <span
              v-if="$route.name === 'StudentBookbag'">By confirming you will be enrolled in all selected courses</span>
        </v-tooltip>
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h6 orange darken-4">
              Selection confirmed
            </v-card-title>

            <v-card-text v-if="$route.name === 'TeacherBookbag'">
              You have now opened the selected courses for students. You can view them on the "My courses" tab on the
              course page.
            </v-card-text>
            <v-card-text v-if="$route.name === 'StudentBookbag'">
              You have been enrolled in the selected courses. You can view them on the "My courses" tab on the course
              page.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="#E95A24"
                  text
                  @click="dialog = false"
              >
                Okay
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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


  </v-card>
</template>

<script>
export default {
  name: "Bookbag",
  data: () => ({
    selected: [],
    items: [
      {
        headline: 'BWL-001',
        title: 'Einführung in die BWL',
        sws: 5
      },
      {
        headline: 'BWL-002',
        title: 'Einführung in die VWL',
        sws: 5
      },
      {
        headline: 'BWL-003',
        title: 'Mathe 1',
        sws: 10
      },
    ],
    snackbar: false,
    text: 'Successfully deleted.',
    timeout: 1500,
    dialog: false,
  }),
  methods: {
    deleteCourse(index) {
      this.items.splice(index, 1)
      this.snackbar = true
    },
    deleteAll() {
      this.items = []
      this.snackbar = true
    },
    selectAll() {

    },
    confirm() {
      this.items = []
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>