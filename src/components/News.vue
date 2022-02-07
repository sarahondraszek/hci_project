<template>
  <v-container>
    <h2 id="news-head">News for SpaceGate 54 Users</h2>
    <vueper-slides fixed-height="50vh"
                   slide-content-outside="top"
                   autoplay
                   class="mt-4"
    >
      <vueper-slide v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    :title="slide.title"
                    :content="slide.content"
                    class="mt-4"
      />
    </vueper-slides>
  </v-container>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {VueperSlides, VueperSlide},
  name: "News",
  data: () => ({
    slides: [
      {
        title: '<h3>Journey to Xandar</h3>',
        content: "The university's president was sent on a mission to Xandar to recruit further tutors and " +
            "professors for Space University. We all wish him a peaceful journey!",
        image: require('../assets/IMG_2900.jpg'),
      },
      {
        title: '<h3>New Courses Available</h3>',
        content: "Cheerful news for all our students: New courses are available in the registration system! If you " +
            "haven't seen the update yet, please don't hesitate to see if you have access to new courses.",
        image: require('../assets/bg_2.jpg'),
      }
    ]
  }),
};
</script>

<style scoped>
#news-head {
  text-align: center;
  color: #FFFFFF;
  background-color: #E95A24;
}
</style>