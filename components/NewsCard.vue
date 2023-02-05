<template>
  <v-card>
    <v-card-title class="headline">
      ニュース
    </v-card-title>

    <v-list-item-group>
      <v-list dense>
        <ul>
          <v-list-item v-for="article in news" :key="article.title" class="my-2">
            <li><a target="_blank" :href="article.link">{{article.title}}</a></li>
          </v-list-item>
        </ul>
      </v-list>
    </v-list-item-group>
  </v-card>
</template>


<script>
import {axiosInstance as Api} from '~/myModules/api'

export default {
  data() {
    return {
      news: []
    }
  },
  async created() {
    const res = await Api.get('news/latest_news')
    this.news = res['data']
  },
}
</script>
