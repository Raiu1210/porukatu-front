<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="10">
        <NewsCard/>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="10">
        <v-card>
          <v-img
            src="/road.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title class="headline font-weight-bold">Touring spot</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'

export default {
  data() {
    return {
      test: [
        'aaa',
        'bbb',
        'ccc'
      ]
    }
  },
  components: {
    NewsCard
  }
}
</script>
