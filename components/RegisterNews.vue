<template>
  <v-card flat>
    <v-row justify="center" align="center" class="mt-3">
      <v-col cols="1">
        <p>pass</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="newsRegisterObj.password" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>title</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="newsRegisterObj.title" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>link</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="newsRegisterObj.link" />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="1">
        <v-btn
          class="ma-2"
          color="success"
          @click="addNEWS()"
        >
          追加
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ImgInputer from 'vue-img-inputer'
import {axiosInstance as Api} from '~/myModules/api'

export default {
  data() {
    return {
      newsRegisterObj: {
        password: "",
        title: "",
        link: ""
      },
    }
  },
  methods: {
    async addNEWS() {
      const res = await Api.post('/news/register_news', this.newsRegisterObj)
      alert(res['data']['message'])
      location.reload()
    },
  },
  components: {
    ImgInputer
  }
}
</script>
