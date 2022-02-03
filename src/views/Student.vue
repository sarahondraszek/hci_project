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

            <Course v-for="course in listOne"
                    :key="course.courseID"
                    :courseID='course.courseID'
                    :title='course.title'
                    :teacher='course.teacher'
                    :location='course.location'
                    :time='course.time'
                    :sws='course.sws'
                    draggable
                    @dragstart="startDrag($event, item)"/>
        </v-card>

      </v-col>
      <v-col cols="2">
        <DropArea_Bag
            @drop="onDrop($event,2)"
            @dragover.prevent
            @dragenter.prevent/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Course from "@/components/Course";
import DropArea_Bag from "@/components/DropArea_Bag";
export default {
  name: "Student",
  components: {
    DropArea_Bag,
    Course
  },
  data() {
    return {
      courses:[{
        courseID: 'BWL-001',
        title: 'Einführung in die BWL',
        teacher: "Mueller",
        location: "Audimax",
        time: "Mo, 10:15",
        sws: 5,
        list:1
      },
        {courseID: "BWL-002",
        title: "Einführung in die VWL",
          teacher:"Haupt",
          location: "A18",
          time: "Di, 14:15",
          sws:5,
          list:1},
        {
        courseID: "BWL-003",
          title: "Mathe 1",
          teacher: "Drews",
          location: "B35",
          time: "Do, 12:15",
          sws: 10,
          list:1
        }]
    }
  },
computed: {
  listOne(){
    return this.courses.filter(item => item.list === 1)
  },
  listTwo(){
    return this.courses.filter(item => item.list === 2)
  }
  },
  methods: {
    startDrag (evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.courseID)
    },
    onDrop (evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.courses.find(item => item.courseID == itemID)
      item.list = list
      console.log(itemID)
    }
  }
}
</script>

<style scoped>
.drop-zone{
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color:#fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>